import { ReactNode, useRef, useState, useEffect, useImperativeHandle, forwardRef } from "react";

interface ScrollInfo {
  scrollPosition: number;
  maxScroll: number;
  scrollPercentage: number;
  direction: "left" | "right";
}

interface HorizontalScrollContainerProps {
  children: ReactNode;
  onScrollChange?: (info: ScrollInfo) => void;
  className?: string;
  scrollSpeed?: number;
}

export interface HorizontalScrollContainerRef {
  scrollToPosition: (position: number) => void;
  resetScroll: () => void;
}

export const HorizontalScrollContainer = forwardRef<HorizontalScrollContainerRef, HorizontalScrollContainerProps>(
  ({ children, onScrollChange, className = "", scrollSpeed = 1 }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    // refs to maintain latest values without re-binding listeners
    const targetRef = useRef(0);
    const animFrameRef = useRef<number | null>(null);
    const scrollPositionRef = useRef(0);
    const maxScrollRef = useRef(0);
    const onScrollChangeRef = useRef(onScrollChange);

    useEffect(() => {
      scrollPositionRef.current = scrollPosition;
    }, [scrollPosition]);

    useEffect(() => {
      maxScrollRef.current = maxScroll;
    }, [maxScroll]);

    useEffect(() => {
      onScrollChangeRef.current = onScrollChange;
    }, [onScrollChange]);

    const startAnimation = () => {
      const content = contentRef.current;
      if (!content) return;

      if (animFrameRef.current !== null) return; // already animating

      const step = () => {
        const current = scrollPositionRef.current;
        const target = targetRef.current;
        const diff = target - current;

        // smoothing factor: lower = smoother/longer
        const newPosition = Math.abs(diff) < 0.5 ? target : current + diff * 0.12;

        scrollPositionRef.current = newPosition;
        setScrollPosition(newPosition);
        content.style.transform = `translateX(-${newPosition}px)`;

        // notify listener with latest values
        const max = maxScrollRef.current;
        const cb = onScrollChangeRef.current;
        if (cb) {
          cb({
            scrollPosition: newPosition,
            maxScroll: max,
            scrollPercentage: max > 0 ? (newPosition / max) * 100 : 0,
            direction: diff >= 0 ? "right" : "left",
          });
        }

        if (Math.abs(diff) >= 0.5) {
          animFrameRef.current = requestAnimationFrame(step);
        } else {
          animFrameRef.current = null;
        }
      };

      animFrameRef.current = requestAnimationFrame(step);
    };

    const smoothScrollToPosition = (targetPosition: number) => {
      targetRef.current = targetPosition;
      startAnimation();
    };

    const scrollToPosition = (position: number) => {
      const newPosition = Math.max(0, Math.min(maxScroll, position));
      smoothScrollToPosition(newPosition);
    };

    const resetScroll = () => {
      scrollToPosition(0);
    };

    useImperativeHandle(ref, () => ({
      scrollToPosition,
      resetScroll,
    }));

    useEffect(() => {
      const container = containerRef.current;
      const content = contentRef.current;

      if (!container || !content) return;

      // Calculate max scroll distance
      const updateMaxScroll = () => {
        const containerWidth = container.clientWidth;
        const contentWidth = content.scrollWidth;
        const newMaxScroll = Math.max(0, contentWidth - containerWidth);
        setMaxScroll(newMaxScroll);
        maxScrollRef.current = newMaxScroll;
        // clamp targets within bounds after resize
        targetRef.current = Math.max(0, Math.min(newMaxScroll, targetRef.current));
        scrollPositionRef.current = Math.max(0, Math.min(newMaxScroll, scrollPositionRef.current));
        content.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      };

      // Handle wheel scroll with smoothing
      const handleWheel = (e: WheelEvent & { target: EventTarget | null }) => {
        e.preventDefault();
        const delta = e.deltaY * scrollSpeed;
        const nextTarget = Math.max(0, Math.min(maxScrollRef.current, targetRef.current + delta));
        targetRef.current = nextTarget;
        startAnimation();
      };

      // Initial setup
      updateMaxScroll();

      // Add event listeners
      container.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("resize", updateMaxScroll);

      // Cleanup
      return () => {
        container.removeEventListener("wheel", handleWheel);
        window.removeEventListener("resize", updateMaxScroll);
        if (animFrameRef.current !== null) cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      };
    }, [scrollSpeed]);

    return (
      <div ref={containerRef} className={`overflow-hidden min-w-screen ${className}`}>
        <div ref={contentRef} className='flex' style={{ willChange: "transform" }}>
          {children}
        </div>
      </div>
    );
  }
);

HorizontalScrollContainer.displayName = "HorizontalScrollContainer";
