"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // configure lenis for gentle, not-too-instant smoothing
    const lenis = new Lenis({
      // duration is a multiplier (approx seconds for 1000px)
      duration: 1.15,
      // cubic out easing for natural deceleration
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}

export default SmoothScroll;
