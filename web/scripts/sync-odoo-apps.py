#!/usr/bin/env python3
"""Fetch Wan Buffer Odoo Apps Store listings and build local catalog assets."""

from __future__ import annotations

import argparse
import html as htmlmod
import json
import socket
import urllib.error
import re
import ssl
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_APPS = ROOT / "public" / "odoo-apps"
CATALOG_JSON = ROOT / "lib" / "odoo-apps-catalog.generated.json"
ACTIVITY_JSON = ROOT / "lib" / "odoo-apps-activity-management.json"

MODULES = [
    "wb_advance_task_timer",
    "wb_sale_customer_credit_limit",
    "wb_scandoc_integration",
    "wb_ticket_PO",
    "wb_ticket_so",
    "wb_terms_and_conditions",
    "wb_aged_receivable",
    "wb_so_auto_credit_note",
    "wb_auto_po_fulfillment",
    "wb_bi_dashboard",
    "wb_brevo_connector",
    "wb_crm_lead_generation",
    "wb_code_captcha",
    "wb_partner_merge_customization",
    "wb_company_filter",
    "wb_dynamic_warning",
    "wb_image_captcha",
    "wb_update_record",
    "wb_custom_widget_many2many",
    "wb_invoice_merging",
    "wb_otp_login",
    "wb_overdue_penalty",
    "wb_low_stock_notification",
    "wb_product_multiple_barcodes",
    "wb_split_extract_sales_order",
    "wb_stock_3d_custom_view",
    "wb_log_message_delete",
    "wb_cancel_mo",
    "wb_access_record_in_new_tab",
    "wb_advanced_search_views_columns",
]

CATEGORY_RULES = [
    (["crm", "lead", "sale", "credit", "ticket_so", "split_extract_sales", "customer"], "Sales & CRM"),
    (["invoice", "receivable", "credit_note", "penalty", "account", "merging", "aged"], "Accounting"),
    (["stock", "barcode", "low_stock", "po_fulfillment", "ticket_po", "auto_po", "3d", "cancel_mo"], "Inventory"),
    (["timer", "task", "log_message", "update_record", "company_filter", "partner_merge", "widget", "dynamic_warning", "access_record", "advanced_search", "search_views", "new_tab"], "Productivity"),
    (["bi_dashboard", "dashboard"], "Productivity"),
    (["captcha", "otp", "login", "code_captcha", "image_captcha"], "Website"),
    (["brevo", "scandoc", "terms"], "Website"),
]

DEFAULT_TRUST_STATS = [
    {"value": "365", "label": "Days free support"},
    {"value": "50+", "label": "Custom apps delivered"},
    {"value": "254+", "label": "Happy customers"},
    {"value": "7+", "label": "Years of experience"},
]

DEFAULT_HIGHLIGHTS = [
    {
        "title": "Built for live Odoo teams",
        "body": "The module fits into standard Odoo menus and workflows, so your users adopt it without relearning the platform.",
    },
    {
        "title": "365 days of Wan Buffer support",
        "body": "Every purchase includes a full year of support from our Odoo team for setup questions, fixes, and guidance.",
    },
    {
        "title": "Community and Enterprise ready",
        "body": "Install on Odoo Online, Odoo.sh, or on-premise deployments running Odoo Community or Enterprise.",
    },
]


def clean_text(value: str) -> str:
    text = re.sub(r"<[^>]+>", " ", value)
    text = htmlmod.unescape(re.sub(r"\s+", " ", text)).strip()
    return text.replace("\u2014", ". ").replace("\u2013", ", ").replace("—", ". ").replace("–", ", ")


def slug_from_technical(technical_name: str) -> str:
    return technical_name.replace("wb_", "").replace("_", "-").lower()


def humanize_filename(filename: str) -> str:
    stem = Path(filename).stem.replace("-", " ").replace("_", " ")
    return stem[:1].upper() + stem[1:]


def infer_categories(technical_name: str, name: str, description: str) -> list[str]:
    haystack = f"{technical_name} {name} {description}".lower()
    categories: list[str] = []
    for keys, category in CATEGORY_RULES:
        if any(key in haystack for key in keys) and category not in categories:
            categories.append(category)
    return categories or ["Productivity"]


def fetch(url: str, retries: int = 4) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 WanBufferSync/1.0"})
    context = ssl.create_default_context()
    last_error: Exception | None = None
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(request, timeout=120, context=context) as response:
                return response.read()
        except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError, socket.timeout, OSError) as error:
            last_error = error
            if attempt < retries - 1:
                wait = 2 ** attempt
                print(f"  retry fetch ({attempt + 1}/{retries}) after {wait}s: {url}")
                time.sleep(wait)
                continue
            raise last_error
    raise RuntimeError(f"Failed to fetch {url}")


def primary_desc_content(desc_chunk: str) -> str:
    marker = "<!-- Features Section -->"
    if marker not in desc_chunk:
        return desc_chunk
    parts = desc_chunk.split(marker)
    if len(parts) >= 2:
        return parts[0] + marker + parts[1]
    return desc_chunk


BROWSE_AUTHOR_URL = "https://apps.odoo.com/apps/modules/browse?author=Wan%20Buffer%20Services"


def fetch_store_cover_map() -> dict[str, str]:
    covers: dict[str, str] = {}
    page = 1

    while page <= 6:
        url = BROWSE_AUTHOR_URL if page == 1 else f"{BROWSE_AUTHOR_URL}&page={page}"
        try:
            html = fetch(url).decode("utf-8", "replace")
        except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError, socket.timeout, OSError) as error:
            print(f"  skip browse page {page} ({error})")
            break

        chunks = html.split("loempia_app_card")[1:]
        if not chunks:
            break

        page_matches = 0
        for chunk in chunks:
            module_match = re.search(r"/apps/modules/[\d.]+/(wb_[^\"']+)", chunk)
            image_match = re.search(r"module_image\?image_id=(\d+)", chunk)
            if not module_match or not image_match:
                continue
            technical_name = module_match.group(1)
            covers[technical_name] = image_match.group(1)
            page_matches += 1

        if page_matches == 0:
            break
        page += 1

    return covers


def download_store_cover(technical_name: str, image_id: str, app_dir: Path, force: bool = False) -> bool:
    url = f"https://apps.odoocdn.com/apps/module_image?image_id={image_id}"
    return download_file(url, app_dir / "cover.png", force=force)


def download_file(url: str, destination: Path, force: bool = False) -> bool:
    destination.parent.mkdir(parents=True, exist_ok=True)
    if destination.exists() and destination.stat().st_size > 0 and not force:
        return True
    try:
        data = fetch(url)
    except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError, socket.timeout, OSError) as error:
        print(f"  skip missing asset ({error}): {url}")
        return False
    destination.write_bytes(data)
    time.sleep(0.12)
    return True


def asset_paths_in_html(html: str, technical_name: str) -> list[str]:
    pattern = rf"apps/assets/19\.0/{re.escape(technical_name)}/([^\"?]+\.(?:png|jpg|jpeg|webp))"
    paths: list[str] = []
    for match in re.findall(pattern, html, flags=re.I):
        lowered = match.lower()
        if "brandsection" in lowered:
            continue
        if match not in paths:
            paths.append(match)
    return paths


def discover_feature_files(html: str, technical_name: str) -> list[str]:
    return [path for path in asset_paths_in_html(html, technical_name) if path.startswith("features/")][:8]


def is_screenshot_asset_path(path: str) -> bool:
    lowered = path.lower()
    if lowered.startswith("features/"):
        return False
    if lowered.startswith("screenshots/") or lowered.startswith("screenshot/"):
        return True
    if "/screenshots/" in lowered or "/screenshot/" in lowered:
        return True
    return False


def discover_screenshot_paths(html: str, technical_name: str) -> list[str]:
    screenshot_paths = [
        path
        for path in asset_paths_in_html(html, technical_name)
        if is_screenshot_asset_path(path)
    ]
    return screenshot_paths[:12]


def screenshot_local_name(relative_path: str) -> str:
    return urllib.parse.unquote(Path(relative_path).name)


def download_screenshot_asset(
    technical_name: str,
    relative_path: str,
    app_dir: Path,
    force: bool = False,
) -> bool:
    filename = screenshot_local_name(relative_path)
    destination = app_dir / "screenshots" / filename
    candidates = [
        f"https://apps.odoocdn.com/apps/assets/19.0/{technical_name}/{relative_path}",
        f"https://apps.odoocdn.com/apps/assets/19.0/{technical_name}/{urllib.parse.unquote(relative_path)}",
    ]
    seen: set[str] = set()
    for url in candidates:
        if url in seen:
            continue
        seen.add(url)
        if download_file(url, destination, force=force):
            return True
    return False


def parse_module(technical_name: str) -> dict:
    store_url = f"https://apps.odoo.com/apps/modules/19.0/{technical_name}"
    html = fetch(store_url).decode("utf-8", "replace")

    info_end = html.find('id="module-description"')
    info = html[:info_end]
    desc_start = info_end
    desc_end = html.find('id="module_info"', desc_start)
    desc_chunk = html[desc_start : desc_end if desc_end != -1 else desc_start + 120000]
    asset_html = primary_desc_content(desc_chunk)

    name_match = re.search(r'itemprop="name"><b>([^<]+)</b>', html)
    name = clean_text(name_match.group(1)) if name_match else humanize_filename(technical_name)

    dependencies: list[str] = []
    for dep_name, _dep_code in re.findall(r"<span>([^<(]+)\s*\(([a-z_0-9]+)\)</span>", info):
        label = clean_text(dep_name).strip()
        if label and label not in dependencies:
            dependencies.append(label)
    if not dependencies:
        dependencies = ["Discuss"]

    price_match = re.search(r'oe_currency_value">([\d.]+)', info)
    price = price_match.group(1) if price_match else None
    price_label = f"From ${float(price):.0f}" if price else "View on store"

    loc_match = re.search(r"Lines of code[\s\S]*?<td[^>]*>\s*(\d+)", info)
    lines_of_code = int(loc_match.group(1)) if loc_match else None

    versions = sorted(set(re.findall(rf"/apps/modules/([\d.]+)/{re.escape(technical_name)}", info)), key=float)

    paragraphs = [clean_text(match) for match in re.findall(r"<p[^>]*>([\s\S]*?)</p>", desc_chunk)]
    intro_candidates = []
    for paragraph in paragraphs:
        if len(paragraph) < 80:
            continue
        lowered = paragraph.lower()
        if any(token in lowered for token in ["sales@wanbuffer", "copyright", "license v1", "log in to comment"]):
            continue
        if paragraph.startswith(("Yes.", "No.", "Can I", "Does it", "What is", "Which Odoo")):
            continue
        if re.match(r"^\d+[\).\]]", paragraph):
            continue
        intro_candidates.append(paragraph)

    description = intro_candidates[0] if intro_candidates else (
        f"{name} extends Odoo with practical workflows built and supported by Wan Buffer."
    )
    summary = description if len(description) <= 180 else description[:177].rsplit(" ", 1)[0] + "..."

    intro_paragraphs = intro_candidates[:3]
    if len(intro_paragraphs) < 2:
        intro_paragraphs = [
            description,
            f"{name} is available on the Odoo Apps Store with 365 days of support from Wan Buffer.",
        ]

    feature_paths = discover_feature_files(asset_html, technical_name)
    feature_texts = [
        clean_text(match)
        for match in re.findall(
            r'features/[^"]+\.(?:png|jpg|jpeg|webp)[^>]*>\s*<span[^>]*>\s*([^<]+)',
            asset_html,
            flags=re.I,
        )
    ][:8]

    features = []
    slug = slug_from_technical(technical_name)
    for index, feature_path in enumerate(feature_paths):
        image_file = Path(feature_path).name
        title = feature_texts[index] if index < len(feature_texts) else humanize_filename(image_file)
        body = feature_texts[index] if index < len(feature_texts) else (
            f"A core part of {name} designed to improve day-to-day work inside Odoo."
        )
        features.append(
            {
                "title": title[:100],
                "body": body[:260],
                "imageSrc": f"/odoo-apps/{slug}/features/{urllib.parse.unquote(image_file)}",
            }
        )

    if not features:
        for index, paragraph in enumerate(intro_candidates[1:5], start=1):
            features.append(
                {
                    "title": f"Key capability {index}",
                    "body": paragraph[:260],
                }
            )

    setup_steps = []
    for paragraph in paragraphs:
        if not re.match(r"^\d+[\).\]]", paragraph):
            continue
        match = re.match(r"^(\d+)[\).\]]\s*(.+)$", paragraph)
        if not match:
            continue
        rest = match.group(2).strip()
        split = re.split(r"(?<=[a-z])\s+(?=[A-Z])", rest, maxsplit=1)
        title = split[0][:90]
        body = split[1] if len(split) > 1 else rest
        setup_steps.append({"title": title.strip(), "body": body.strip()[:320]})

    if len(setup_steps) < 3:
        setup_steps = [
            {
                "title": "Install the module",
                "body": f"Open Apps in Odoo, search for {name}, and install it on your database.",
            },
            {
                "title": "Configure users and settings",
                "body": "Review access rights and module settings so the workflow matches your team.",
            },
            {
                "title": "Validate with a test record",
                "body": f"Create or open a sample record and confirm {name} behaves as expected.",
            },
        ]

    screenshot_paths = discover_screenshot_paths(asset_html, technical_name)

    screenshots = []
    for screenshot_path in screenshot_paths:
        screenshot_file = screenshot_local_name(screenshot_path)
        title = humanize_filename(screenshot_file)
        screenshots.append(
            {
                "src": f"/odoo-apps/{slug}/screenshots/{screenshot_file}",
                "alt": f"{name} {title} screenshot",
                "title": title,
                "caption": f"A live view of {title.lower()} inside {name}.",
            }
        )

    faq_pairs = re.findall(r"<h[34][^>]*>([^<]+\?)\s*</h[34]>\s*<p[^>]*>([\s\S]*?)</p>", desc_chunk, re.I)
    faqs = [{"q": clean_text(question), "a": clean_text(answer)[:400]} for question, answer in faq_pairs[:6]]
    if len(faqs) < 2:
        faqs = [
            {"q": f"What does {name} do?", "a": description[:350]},
            {
                "q": "Is support included after purchase?",
                "a": "Yes. Wan Buffer includes 365 days of support. Email sales@wanbuffer.com for installation or customization help.",
            },
            {
                "q": "Does it work on Community and Enterprise?",
                "a": "Yes. The module supports Odoo Community and Enterprise on Odoo Online, Odoo.sh, and on-premise.",
            },
        ]

    icon_match = re.search(r"//apps\.odoocdn\.com/web/image/loempia\.module/\d+/icon_image/84x84[^\"']*", html)
    icon_url = f"https:{icon_match.group(0)}" if icon_match else None

    hero_file = screenshot_local_name(screenshot_paths[0]) if screenshot_paths else None
    card_file = (
        screenshot_local_name(screenshot_paths[1])
        if len(screenshot_paths) > 1
        else hero_file
    )

    app = {
        "slug": slug,
        "name": name,
        "technicalName": technical_name,
        "summary": summary,
        "description": description,
        "introParagraphs": intro_paragraphs,
        "categories": infer_categories(technical_name, name, description),
        "versions": versions or ["17.0", "18.0", "19.0"],
        "priceLabel": price_label,
        "license": "OPL-1",
        "dependencies": dependencies,
        "features": features,
        "setupSteps": setup_steps,
        "screenshots": screenshots,
        "highlights": DEFAULT_HIGHLIGHTS,
        "trustStats": DEFAULT_TRUST_STATS,
        "faqs": faqs,
        "odooStoreUrl": store_url,
        "iconSrc": f"/odoo-apps/{slug}/icon.png",
        "cardImageSrc": f"/odoo-apps/{slug}/screenshots/{card_file}" if card_file else None,
        "heroImageSrc": f"/odoo-apps/{slug}/screenshots/{hero_file}" if hero_file else None,
        "featured": False,
        "_assets": {
            "iconUrl": icon_url,
            "featureFiles": feature_paths,
            "screenshotPaths": screenshot_paths,
        },
    }

    if price:
        app["priceAmount"] = f"${price}"
    if lines_of_code is not None:
        app["linesOfCode"] = lines_of_code

    return app


def sync_assets(app: dict, cover_image_id: str | None = None, force: bool = False) -> None:
    slug = app["slug"]
    assets = app.pop("_assets", {})
    app_dir = PUBLIC_APPS / slug
    technical_name = app["technicalName"]

    icon_url = assets.get("iconUrl")
    if icon_url:
        download_file(icon_url, app_dir / "icon.png", force=force)

    downloaded_features: list[str] = []
    for feature_path in assets.get("featureFiles", []):
        feature_file = urllib.parse.unquote(Path(feature_path).name)
        url = f"https://apps.odoocdn.com/apps/assets/19.0/{technical_name}/{feature_path}"
        if download_file(url, app_dir / "features" / feature_file, force=force):
            downloaded_features.append(feature_file)

    downloaded_screenshots: list[str] = []
    for screenshot_path in assets.get("screenshotPaths", []):
        if download_screenshot_asset(technical_name, screenshot_path, app_dir, force=force):
            downloaded_screenshots.append(screenshot_local_name(screenshot_path))

    app["features"] = [
        feature
        for feature in app["features"]
        if not feature.get("imageSrc") or feature["imageSrc"].split("/")[-1] in downloaded_features
    ]

    app["screenshots"] = [
        shot
        for shot in app["screenshots"]
        if shot["src"].split("/")[-1] in downloaded_screenshots
    ]

    hero_file = downloaded_screenshots[0] if downloaded_screenshots else None
    card_file = downloaded_screenshots[1] if len(downloaded_screenshots) > 1 else hero_file

    if hero_file:
        app["heroImageSrc"] = f"/odoo-apps/{slug}/screenshots/{hero_file}"
        app["cardImageSrc"] = f"/odoo-apps/{slug}/screenshots/{card_file or hero_file}"
    elif downloaded_features:
        app["heroImageSrc"] = f"/odoo-apps/{slug}/features/{downloaded_features[0]}"
        second = downloaded_features[1] if len(downloaded_features) > 1 else downloaded_features[0]
        app["cardImageSrc"] = f"/odoo-apps/{slug}/features/{second}"
    else:
        app["heroImageSrc"] = f"/odoo-apps/{slug}/icon.png"
        app["cardImageSrc"] = f"/odoo-apps/{slug}/icon.png"

    if cover_image_id and download_store_cover(technical_name, cover_image_id, app_dir, force=force):
        app["cardImageSrc"] = f"/odoo-apps/{slug}/cover.png"


def main() -> None:
    parser = argparse.ArgumentParser(description="Sync Odoo Apps Store catalog and assets.")
    parser.add_argument(
        "--force",
        action="store_true",
        help="Re-download assets even when local files already exist.",
    )
    args = parser.parse_args()

    print("Fetching Odoo Apps Store cover images...")
    cover_map = fetch_store_cover_map()
    print(f"Found {len(cover_map)} store cover images")

    apps = []
    for index, technical_name in enumerate(MODULES, start=1):
        print(f"[{index}/{len(MODULES)}] Syncing {technical_name}...")
        app = parse_module(technical_name)
        sync_assets(app, cover_image_id=cover_map.get(technical_name), force=args.force)
        apps.append(app)
        CATALOG_JSON.write_text(json.dumps(apps, indent=2), encoding="utf-8")

    print(f"Wrote {len(apps)} apps to {CATALOG_JSON}")


if __name__ == "__main__":
    main()
