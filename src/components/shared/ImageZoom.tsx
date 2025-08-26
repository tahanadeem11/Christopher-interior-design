"use client";

import Image, { ImageProps } from "next/image";
import { useRef, useState } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface ImageZoomProps extends ImageProps {
  containerClassName?: string;
}

function ImageZoom({ containerClassName, className, alt, ...props }: ImageZoomProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isVisible = useIntersectionObserver(ref, { 
    threshold: 0.1,
    rootMargin: '100px'
  });

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={ref} className={`image-container ${containerClassName || ""}`}>
      <Image
        {...props}
        alt={alt}
        onLoad={handleImageLoad}
        className={`image-zoom-effect ${className || ""} ${isVisible && isLoaded ? "is-visible" : ""}`}
      />
    </div>
  );
}

export default ImageZoom;
