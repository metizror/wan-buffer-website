import dynamic from "next/dynamic";

import { HomeHeader } from "@/components/home/header";
import { HomeHero } from "@/components/home/hero";
import { HomeLogoBar } from "@/components/home/logo-bar";
import { HomeAiStrip } from "@/components/home/ai-strip";
import { HomeWhyUs } from "@/components/home/why-us";
import { HomeAiServices } from "@/components/home/ai-services";
import { HomeIndustries } from "@/components/home/industries";
import { HomeCaseStudy } from "@/components/home/case-study";
import { HomeTechStack } from "@/components/home/tech-stack";
import { HomeModels } from "@/components/home/models";
import { HomePhilosophy } from "@/components/home/philosophy";
import { HomePlatforms } from "@/components/home/platforms";
import { HomeGlobal } from "@/components/home/global";
import { HomeBrands } from "@/components/home/brands";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeInsights } from "@/components/home/insights";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";

const HomeTestimonials = dynamic(
  () => import("@/components/home/testimonials").then((m) => m.HomeTestimonials),
  { ssr: true },
);
const HomeFaq = dynamic(
  () => import("@/components/home/faq").then((m) => m.HomeFaq),
  { ssr: true },
);

export default function HomePage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <main>
        <HomeHero />
        <HomeLogoBar />
        <HomeAiStrip />
        <HomeWhyUs />
        <div className="cv-auto">
          <HomeAiServices />
          <HomeIndustries />
          <HomeCaseStudy />
          <HomeTechStack />
          <HomeModels />
          <HomePhilosophy />
          <HomePlatforms />
          <HomeGlobal />
          <HomeBrands />
          <HomeTestimonials />
          <HomeFaq />
          <HomeInsights />
          <HomeContact />
        </div>
      </main>
      <HomeFooter />
      <HomeWanny />
    </>
  );
}
