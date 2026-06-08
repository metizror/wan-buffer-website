"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";

type OdooAppImageProps = Omit<ImageProps, "unoptimized" | "loading"> & {
  unoptimized?: boolean;
  fixedSize?: boolean;
  cover?: boolean;
  lazy?: boolean;
};

export function OdooAppImage({
  className,
  style,
  unoptimized = true,
  fixedSize = false,
  cover = false,
  lazy,
  priority = false,
  src,
  alt,
  width,
  height,
  ...props
}: OdooAppImageProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const shouldLazy = lazy ?? !priority;
  const [isVisible, setIsVisible] = useState(!shouldLazy);

  useEffect(() => {
    if (!shouldLazy || isVisible) {
      return;
    }

    const node = containerRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLazy, isVisible]);

  const imageStyle = fixedSize
    ? style
    : cover
      ? { width: "100%", height: "100%", objectFit: "cover", ...style }
      : { width: "100%", height: "auto", ...style };

  const placeholderStyle = cover
    ? { width: "100%", height: "100%" }
    : fixedSize
      ? {
          width: typeof width === "number" ? `${width}px` : "100%",
          height: typeof height === "number" ? `${height}px` : "100%",
        }
      : {
          width: "100%",
          aspectRatio:
            typeof width === "number" && typeof height === "number"
              ? `${width} / ${height}`
              : "16 / 9",
        };

  const wrapClassName = cover
    ? "oa-image-wrap oa-image-wrap-cover"
    : fixedSize
      ? "oa-image-wrap oa-image-wrap-fixed oa-app-icon-frame"
      : "oa-image-wrap";

  return (
    <span ref={containerRef} className={wrapClassName}>
      {isVisible ? (
        <Image
          {...props}
          src={src}
          alt={alt}
          width={width}
          height={height}
          unoptimized={unoptimized}
          className={className}
          style={imageStyle}
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      ) : (
        <span
          className={`oa-image-placeholder${className ? ` ${className}` : ""}`}
          style={{ ...placeholderStyle, ...style }}
          aria-hidden
        />
      )}
    </span>
  );
}
