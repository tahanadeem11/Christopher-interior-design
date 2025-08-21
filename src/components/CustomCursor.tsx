"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const [enabled, setEnabled] = useState(false);

  const springConfig = { damping: 30, stiffness: 150, mass: 0.8 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // enable only on devices with fine pointers (e.g., mouse) and hover capability
  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine) and (hover: hover)");
    const handleChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    setEnabled(mql.matches);

    // listener compatibility (fallback to deprecated addListener/removeListener if needed)
    let cleanup = () => {};
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handleChange);
      cleanup = () => mql.removeEventListener("change", handleChange);
    } else {
      const legacyMql = mql as MediaQueryList & {
        addListener?: (listener: (ev: MediaQueryListEvent) => void) => void;
        removeListener?: (listener: (ev: MediaQueryListEvent) => void) => void;
      };
      legacyMql.addListener?.(handleChange);
      cleanup = () => legacyMql.removeListener?.(handleChange);
    }
    return cleanup;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const moveCursor = (e: PointerEvent) => {
      // center the 40px cursor by offsetting 20px in both directions
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);

      // small dot follows the real cursor exactly; dot size is 6px, so offset by 3px
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };

    window.addEventListener("pointermove", moveCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
    };
  }, [enabled, cursorX, cursorY, dotX, dotY]);

  return (
    <>
      {/** skip rendering on touch / coarse pointer devices */}
      {!enabled ? null : (
        <>
      <motion.div
        className='custom-cursor'
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <motion.div
        className='cursor-dot'
        style={{
          translateX: dotX,
          translateY: dotY,
        }}
      />
        </>
      )}
    </>
  );
}
