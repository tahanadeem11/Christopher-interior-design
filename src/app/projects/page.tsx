"use client";
import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Image from "next/image";

// components
import { HorizontalScrollContainer, HorizontalScrollContainerRef } from "@/components/shared/HorizontalScrollContainer";

import Image1 from "@/assets/projects/image1.jpeg";
import Image2 from "@/assets/projects/image2.jpeg";
import Image3 from "@/assets/projects/image3.jpeg";
import Image4 from "@/assets/projects/image4.jpeg";
import Image5 from "@/assets/projects/image5.jpeg";
import Image6 from "@/assets/projects/image6.jpeg";

// types
interface ScrollInfo {
  scrollPosition: number;
  maxScroll: number;
  scrollPercentage: number;
  direction: "left" | "right";
}

// assets
import BGImage from "@/assets/projects/background.jpg";
import Logo from "@/assets/ethos/logo.png";
import Link from "next/link";

export default function Projects() {
  const [showScrollControls, setShowScrollControls] = useState(false);
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());
  const scrollContainerRef = useRef<HorizontalScrollContainerRef>(null);

  const handleScrollChange = (info: ScrollInfo) => {
    setShowScrollControls(info.scrollPosition > 50); // Show controls after scrolling 50px
  };

  const scrollToStart = () => {
    scrollContainerRef.current?.resetScroll();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const imageId = entry.target.getAttribute("data-image-id");
          if (imageId) {
            setVisibleImages((prev) => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(imageId);
              } else {
                newSet.delete(imageId);
              }
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the image is visible
        rootMargin: "50px", // Start animation 50px before the image enters viewport
      }
    );

    // Observe all images after component mounts
    const images = document.querySelectorAll("[data-image-id]");
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={BGImage}
          alt='Background image of projects'
          className='w-full h-full object-cover min-w-full min-h-full'
        />
      </div>

      {/* Header with Logo and Menu */}
      <Header logo={Logo} isShowMenu={showScrollControls} buttonClassName='text-[#D6D5C9]' />

      {/* Main Content */}
      <main className='relative z-10 container -mt-8'>
        <HorizontalScrollContainer ref={scrollContainerRef} onScrollChange={handleScrollChange}>
          {/* Section 1: Our Projects */}
          <div className='max-w-[900px] min-w-[900px] pl-30 md:min-w-[60vw] md:max-w-[60vw] sm:min-w-[40vw] sm:max-w-[40vw]'>
            <h1 className='text-[#e7e7dc] text-4xl md:text-3xl sm:text-2xl'>Our Projects</h1>
            <h2 className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              Introducing a New Model for Living
            </h2>
            <br />

            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              Our work goes beyond design — it&apos;s about reimagining what a home can feel like. Each project is
              shaped by a philosophy rooted in simplicity, natural flow, and emotional connection. We build spaces that
              restore, calm, and support the real lives of the people inside them.
            </p>
            <br />

            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              But more than that, our goal is to expand a model of living that&apos;s regenerative, timeless, and deeply
              human. This is slow architecture — built with care, not convention.
            </p>
            <br />
            <br />

            <h2 className='text-[#e7e7dc] font-[300] text-lg md:text-lg sm:text-lg uppercase'>THE QUARRY</h2>
            <div className='-mt-2 w-8 h-px bg-white/50'></div>
          </div>

          {/* Images 1 & 2 for Our Projects section */}
          <div className='flex flex-col gap-6 ml-[10vw]'>
            <div
              className={`relative max-w-[50vw] min-w-[400px] h-[25vh] transition-opacity duration-1000 ease-in-out ${
                visibleImages.has("image1") ? "opacity-100" : "opacity-0"
              }`}
              data-image-id='image1'
            >
              <Image src={Image1} alt='' className='w-full h-full object-cover' />
            </div>
            <div
              className={`relative max-w-[50vw] min-w-[400px] h-[25vh] transition-opacity duration-1000 ease-in-out ${
                visibleImages.has("image2") ? "opacity-100" : "opacity-0"
              }`}
              data-image-id='image2'
            >
              <Image src={Image2} alt='' className='w-full h-full object-cover' />
            </div>
          </div>

          {/* Section 2: The Quarry Details */}
          <div className='max-w-[900px] min-w-[900px] pl-30 md:min-w-[60vw] md:max-w-[60vw] sm:min-w-[40vw] sm:max-w-[40vw]'>
            <h1 className='text-[#e7e7dc] text-4xl md:text-3xl sm:text-2xl'>The Quarry</h1>
            <h2 className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              The Quarry – Where Architecture Meets Regeneration
            </h2>
            <br />
            <p className='text-[#e7e7dc] font-[300] text-lg md:text-lg sm:text-lg'>
              14–20% Fixed Return | Passivhaus-Standard | Designed to Endure
            </p>
            <br />
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              Set in the Lancashire hills, The Quarry transforms a disused industrial site into a 3,300 sq ft home that
              marries quiet luxury with environmental leadership. Built to Passivhaus standards, it offers peak energy
              efficiency, beauty, and long-term performance.
            </p>
            <br />
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              Rooted in Christopher&apos;s aesthetic and philosophical influences — from Wabi-Sabi to biophilia — the
              design brings nature inward and emotion to the forefront. Light, material, and movement are all treated as
              collaborators, not afterthoughts.
            </p>
            <br />
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              Every line is drawn with intention. Local stone, minimal interventions, and breathable textures make the
              home feel like it&apos;s always belonged.
            </p>
          </div>

          {/* Images 3 & 4 for The Quarry section */}
          <div className='flex flex-col gap-6 ml-[10vw]'>
            <div
              className={`relative max-w-[50vw] min-w-[400px] h-[25vh] transition-opacity duration-1000 ease-in-out ${
                visibleImages.has("image3") ? "opacity-100" : "opacity-0"
              }`}
              data-image-id='image3'
            >
              <Image src={Image3} alt='' className='w-full h-full object-cover' />
            </div>
            <div
              className={`relative max-w-[50vw] min-w-[400px] h-[25vh] transition-opacity duration-1000 ease-in-out ${
                visibleImages.has("image4") ? "opacity-100" : "opacity-0"
              }`}
              data-image-id='image4'
            >
              <Image src={Image4} alt='' className='w-full h-full object-cover' />
            </div>
          </div>

          {/* section 3: Investment Details */}
          <div className='max-w-[900px] min-w-[900px] pl-30 md:min-w-[60vw] md:max-w-[60vw] sm:min-w-[40vw] sm:max-w-[40vw]'>
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              As an investment, The Quarry offers a fixed return of 14–20% annually, with capital protected via a
              ring-fenced SPV and detailed development guarantees. Investors are not just backing a build — they&apos;re
              aligning with a new, grounded vision of sustainable living.
            </p>
            <br />
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              This is a home that feels like a turning point — for design, for lifestyle, and for what comes next.
            </p>

            {/* get in touch */}
            <Link href={"/contact"}>
              <h2 className='text-[#e7e7dc] font-[300] text-lg md:text-lg sm:text-lg uppercase mt-48'>Get in Touch</h2>
              <div className='-mt-2 w-8 h-px bg-white/50'></div>
            </Link>
          </div>

          {/* Images 5 & 6 for Investment Details section */}
          <div className='flex flex-col gap-6 ml-[10vw]'>
            <div
              className={`relative max-w-[50vw] min-w-[400px] h-[25vh] transition-opacity duration-1000 ease-in-out ${
                visibleImages.has("image5") ? "opacity-100" : "opacity-0"
              }`}
              data-image-id='image5'
            >
              <Image src={Image5} alt='' className='w-full h-full object-cover' />
            </div>
            <div
              className={`relative max-w-[50vw] min-w-[400px] h-[25vh] transition-opacity duration-1000 ease-in-out ${
                visibleImages.has("image6") ? "opacity-100" : "opacity-0"
              }`}
              data-image-id='image6'
            >
              <Image src={Image6} alt='' className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='min-w-[5vw]'></div>
        </HorizontalScrollContainer>

        {/* Go Back to Start Button */}
        {showScrollControls && (
          <button
            onClick={scrollToStart}
            className='fixed bottom-6 right-6 z-20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm'
            aria-label='Go back to start'
          >
            <svg
              width='40'
              height='40'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='rotate-180'
            >
              <polyline points='9,18 15,12 9,6'></polyline>
            </svg>
          </button>
        )}
      </main>
    </div>
  );
}
