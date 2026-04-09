import fs from "fs";
import path from "path";
import Script from "next/script";

export default function HomePage() {
  const htmlPath = path.join(process.cwd(), "lib", "home-body.html");
  const html = fs.readFileSync(htmlPath, "utf8");

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
