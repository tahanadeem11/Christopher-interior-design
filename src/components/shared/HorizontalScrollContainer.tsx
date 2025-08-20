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

    const smoothScrollToPosition = (targetPosition: number) => {
      const content = contentRef.current;
      if (!content) return;

      const currentPosition = scrollPosition;
      const distance = targetPosition - currentPosition;
      const duration = 500; // duration of the smooth scroll in milliseconds
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // ease out

        // Calculate the easing effect: smooth transition
        const easeProgress = 1 - Math.pow(1 - progress, 3); // cubic easing

        const newPosition = currentPosition + distance * easeProgress;
        setScrollPosition(newPosition);
        content.style.transform = `translateX(-${newPosition}px)`;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          if (onScrollChange) {
            onScrollChange({
              scrollPosition: newPosition,
              maxScroll,
              scrollPercentage: maxScroll > 0 ? (newPosition / maxScroll) * 100 : 0,
              direction: newPosition > scrollPosition ? "right" : "left",
            });
          }
        }
      };

      requestAnimationFrame(animateScroll);
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
      };

      // Handle wheel scroll
      const handleWheel = (e: WheelEvent & { target: EventTarget | null }) => {
        e.preventDefault();

        const delta = e.deltaY * scrollSpeed;
        const newScrollPosition = Math.max(0, Math.min(maxScroll, scrollPosition + delta));

        setScrollPosition(newScrollPosition);
        if (content) {
          content.style.transform = `translateX(-${newScrollPosition}px)`;
        }

        // Call the callback function with scroll info
        if (onScrollChange) {
          onScrollChange({
            scrollPosition: newScrollPosition,
            maxScroll,
            scrollPercentage: maxScroll > 0 ? (newScrollPosition / maxScroll) * 100 : 0,
            direction: delta > 0 ? "right" : "left",
          });
        }
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
      };
    }, [scrollPosition, maxScroll, scrollSpeed, onScrollChange]);

    return (
      <div ref={containerRef} className={`overflow-hidden min-w-screen ${className}`}>
        <div
          ref={contentRef}
          className='flex transition-transform duration-75 ease-out'
          style={{ willChange: "transform" }}
        >
          {children}
        </div>
      </div>
    );
  }
);

HorizontalScrollContainer.displayName = "HorizontalScrollContainer";
