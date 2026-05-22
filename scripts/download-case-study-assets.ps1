# Downloads case study detail assets from wanbuffer.com into web/public/case-study/
$ErrorActionPreference = "Stop"
$public = Join-Path $PSScriptRoot "..\web\public\case-study"

function Save-RemoteFile($Url, $OutPath) {
  $dir = Split-Path $OutPath -Parent
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  curl.exe -sL $Url -o $OutPath
  if (-not (Test-Path $OutPath) -or (Get-Item $OutPath).Length -lt 100) {
    throw "Failed download: $Url"
  }
  Write-Host "OK $OutPath"
}

$base = "https://wanbuffer.com/case-study/wp-content/uploads"

# Shared approach + tech icons
@(
  @{ u = "$base/2025/05/Revamp_kj0k1h.svg"; o = "$public/shared/revamp.svg" }
  @{ u = "$base/2025/05/Integration_l40ngr.svg"; o = "$public/shared/integration.svg" }
  @{ u = "$base/2025/05/Updates_u3zerr.svg"; o = "$public/shared/updates.svg" }
  @{ u = "$base/2025/05/Marketing_xqy9s0.svg"; o = "$public/shared/optimization.svg" }
  @{ u = "$base/2025/06/odoo.webp"; o = "$public/shared/tech/odoo.webp" }
  @{ u = "$base/2025/06/python.png"; o = "$public/shared/tech/python.png" }
  @{ u = "$base/2025/06/postgresql.png"; o = "$public/shared/tech/postgresql.png" }
  @{ u = "$base/2025/06/magento.png"; o = "$public/shared/tech/magento.png" }
  @{ u = "$base/2025/06/git.png"; o = "$public/shared/tech/git.png" }
  @{ u = "$base/2025/06/docker.png"; o = "$public/shared/tech/docker.png" }
  @{ u = "$base/2025/05/WordPress.webp"; o = "$public/shared/tech/wordpress.webp" }
  @{ u = "$base/2025/05/JavaScript.webp"; o = "$public/shared/tech/javascript.webp" }
  @{ u = "$base/2025/05/PHP.webp"; o = "$public/shared/tech/php.webp" }
  @{ u = "$base/2025/05/HTML-3.webp"; o = "$public/shared/tech/html.webp" }
  @{ u = "$base/2025/05/CSS-3.webp"; o = "$public/shared/tech/css.webp" }
  @{ u = "$base/2025/05/MySQL.webp"; o = "$public/shared/tech/mysql.webp" }
) | ForEach-Object { Save-RemoteFile $_.u $_.o }

# Textile
@(
  @{ u = "$base/2025/10/textile-manufactring-1.webp"; o = "$public/detail/textile/screenshot-1.webp" }
  @{ u = "$base/2025/10/textile-manufactring-2.webp"; o = "$public/detail/textile/screenshot-2.webp" }
  @{ u = "$base/2025/10/textile-manufactring-3.webp"; o = "$public/detail/textile/screenshot-3.webp" }
  @{ u = "$base/2025/10/Textile-manufactring1-2.jpg"; o = "$public/detail/textile/solution-1.jpg" }
  @{ u = "$base/2025/10/Textile-manufactring2.jpg"; o = "$public/detail/textile/solution-2.jpg" }
  @{ u = "$base/2025/10/Textile-manufactring3.jpg"; o = "$public/detail/textile/solution-3.jpg" }
  @{ u = "$base/2025/10/Textile-manufactring4.jpg"; o = "$public/detail/textile/solution-4.jpg" }
) | ForEach-Object { Save-RemoteFile $_.u $_.o }

# Steel
@(
  @{ u = "$base/2025/06/image-5.png"; o = "$public/detail/steel/screenshot-1.png" }
  @{ u = "$base/2025/06/image-6.png"; o = "$public/detail/steel/screenshot-2.png" }
  @{ u = "$base/2025/06/image-7.png"; o = "$public/detail/steel/screenshot-3.png" }
  @{ u = "$base/2025/06/image-8.png"; o = "$public/detail/steel/screenshot-4.png" }
  @{ u = "$base/2025/06/image-9.png"; o = "$public/detail/steel/screenshot-5.png" }
  @{ u = "$base/2025/06/Steel-Manufacturing1.webp"; o = "$public/detail/steel/solution-1.webp" }
  @{ u = "$base/2025/06/Steel-Manufacturing2.webp"; o = "$public/detail/steel/solution-2.webp" }
  @{ u = "$base/2025/06/Steel-Manufacturing3.webp"; o = "$public/detail/steel/solution-3.webp" }
) | ForEach-Object { Save-RemoteFile $_.u $_.o }

# USA eCommerce
@(
  @{ u = "$base/2025/06/odoo-integration-ecommerce-shop1.webp"; o = "$public/detail/ecommerce-usa/solution-1.webp" }
  @{ u = "$base/2025/06/odoo-integration-ecommerce-shop2.webp"; o = "$public/detail/ecommerce-usa/solution-2.webp" }
  @{ u = "$base/2025/06/odoo-integration-ecommerce-shop3.webp"; o = "$public/detail/ecommerce-usa/solution-3.webp" }
) | ForEach-Object { Save-RemoteFile $_.u $_.o }

# Magento
@(
  @{ u = "$base/2025/06/linun-plus-1.png"; o = "$public/detail/magento/screenshot-1.png" }
  @{ u = "$base/2025/06/linun-plus-2.png"; o = "$public/detail/magento/screenshot-2.png" }
  @{ u = "$base/2025/06/linun-plus-3.png"; o = "$public/detail/magento/screenshot-3.png" }
  @{ u = "$base/2025/06/linun-plus-4.png"; o = "$public/detail/magento/screenshot-4.png" }
  @{ u = "$base/2025/06/magento-odoo-integration1.webp"; o = "$public/detail/magento/solution-1.webp" }
  @{ u = "$base/2025/06/magento-odoo-integration2.webp"; o = "$public/detail/magento/solution-2.webp" }
  @{ u = "$base/2025/06/magento-odoo-integration3.webp"; o = "$public/detail/magento/solution-3.webp" }
) | ForEach-Object { Save-RemoteFile $_.u $_.o }

# UK eCommerce
@(
  @{ u = "$base/2025/06/1.png"; o = "$public/detail/uk-ecommerce/screenshot-1.png" }
  @{ u = "$base/2025/06/2.png"; o = "$public/detail/uk-ecommerce/screenshot-2.png" }
  @{ u = "$base/2025/06/el-gross1.webp"; o = "$public/detail/uk-ecommerce/solution-1.webp" }
  @{ u = "$base/2025/06/el-gross2.webp"; o = "$public/detail/uk-ecommerce/solution-2.webp" }
  @{ u = "$base/2025/06/el-gross3.webp"; o = "$public/detail/uk-ecommerce/solution-3.webp" }
) | ForEach-Object { Save-RemoteFile $_.u $_.o }

# Omahat
@(
  @{ u = "$base/2025/05/omahat-img-1.webp"; o = "$public/detail/omahat/screenshot-1.webp" }
  @{ u = "$base/2025/05/omahat-img-2.webp"; o = "$public/detail/omahat/screenshot-2.webp" }
  @{ u = "$base/2025/05/omahat-img-3.webp"; o = "$public/detail/omahat/screenshot-3.webp" }
  @{ u = "$base/2025/05/omahat-img-4.webp"; o = "$public/detail/omahat/screenshot-4.webp" }
  @{ u = "$base/2025/05/omahat-solution-1.webp"; o = "$public/detail/omahat/solution-1.webp" }
  @{ u = "$base/2025/05/omahat-solution-2.webp"; o = "$public/detail/omahat/solution-2.webp" }
  @{ u = "$base/2025/05/omahat-solution-3.webp"; o = "$public/detail/omahat/solution-3.webp" }
) | ForEach-Object { Save-RemoteFile $_.u $_.o }

Write-Host "All case study assets downloaded."
