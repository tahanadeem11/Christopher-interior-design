"use client";

import { useEffect, useRef, useState } from "react";
import LoadingOverlay from "./LoadingOverlay";

export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    let fontsReady: Promise<void> = Promise.resolve();
    if (typeof document !== "undefined") {
      const d = document as Document & { fonts?: { ready?: Promise<void> } };
      fontsReady = d.fonts?.ready ?? Promise.resolve();
    }

    const windowLoaded: Promise<void> = new Promise((resolve) => {
      if (typeof document === "undefined") return resolve();
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });

    const deadline = new Promise<void>((resolve) => {
      timeoutRef.current = window.setTimeout(resolve, 2500);
    });

    Promise.all([Promise.race([fontsReady, deadline]), Promise.race([windowLoaded, deadline])]).then(() => {
      if (cancelled) return;
      setFadeOut(true);
      // allow css transition to finish before unmounting
      const t = window.setTimeout(() => {
        if (cancelled) return;
        setVisible(false);
      }, 550);
      // track last timeout to clear on unmount
      timeoutRef.current = t;
    });

    return () => {
      cancelled = true;
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return <LoadingOverlay visible={visible} fadeOut={fadeOut} message="Loading" />;
}
