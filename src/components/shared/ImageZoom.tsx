"use client";

import Image, { ImageProps } from "next/image";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface ImageZoomProps extends ImageProps {
  containerClassName?: string;
}

function ImageZoom({ containerClassName, className, alt, ...props }: ImageZoomProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <div ref={ref} className={`image-container ${containerClassName || ""}`}>
      <Image
        {...props}
        alt={alt}
        className={`image-zoom-effect ${className || ""} ${isVisible ? "is-visible" : ""}`}
      />
    </div>
  );
}

export default ImageZoom;
