"use client";

import { useState, useEffect, RefObject } from "react";

interface IntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

function useIntersectionObserver(
  ref: RefObject<Element | null>,
  { threshold = 0.1, root = null, rootMargin = "0px", triggerOnce = true }: IntersectionObserverOptions = {}
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current; // Capture the node

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          // Disconnect if triggerOnce is true
          if (triggerOnce) {
            observer.unobserve(node);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    // Cleanup
    return () => {
      observer.unobserve(node);
    };
  }, [ref, threshold, root, rootMargin, triggerOnce]);

  return isIntersecting;
}

export default useIntersectionObserver;
