"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import type { OdooApp } from "@/lib/odoo-apps-data";
import { OdooAppImage } from "./odoo-app-image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface OdooAppScreenshotsCarouselProps {
  screenshots: OdooApp["screenshots"];
}

export function OdooAppScreenshotsCarousel({ screenshots }: OdooAppScreenshotsCarouselProps) {
  return (
    <Swiper
      className="oa-shots-swiper"
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={22}
      slidesPerView={1}
      slidesPerGroup={1}
      speed={700}
      loop={screenshots.length > 3}
      autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {screenshots.map((shot) => (
        <SwiperSlide key={shot.title}>
          <figure className="oa-shot">
            <div className="oa-shot-media">
              <OdooAppImage
                src={shot.src}
                alt={shot.alt}
                width={960}
                height={600}
                className="oa-shot-img"
              />
            </div>
            <figcaption>
              <h3>{shot.title}</h3>
              <p>{shot.caption}</p>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
