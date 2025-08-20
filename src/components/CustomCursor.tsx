"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 150, mass: 0.8 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
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
  }, [cursorX, cursorY, dotX, dotY]);

  return (
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
  );
}
