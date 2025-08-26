"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// components
import { HorizontalScrollContainer, HorizontalScrollContainerRef } from "@/components/shared/HorizontalScrollContainer";
import Header from "@/components/Header";
import ImageZoom from "@/components/shared/ImageZoom";

// assets
import Logo from "@/assets/ethos/logo.png";
import Image1 from "@/assets/projects/image1.jpeg";
import Image2 from "@/assets/projects/image2.jpeg";
import Image3 from "@/assets/projects/image3.jpeg";
import Image4 from "@/assets/projects/image4.jpeg";
import Image5 from "@/assets/projects/image5.jpeg";
import Image6 from "@/assets/projects/image6.jpeg";
import BGImage from "@/assets/projects/background.jpg";

// types
interface ScrollInfo {
  scrollPosition: number;
  maxScroll: number;
  scrollPercentage: number;
  direction: "left" | "right";
}

export default function Projects() {
  const scrollContainerRef = useRef<HorizontalScrollContainerRef>(null);

  const handleScrollChange = (info: ScrollInfo) => {
    // Scroll change handler for future use
  };

  const scrollToStart = () => {
    scrollContainerRef.current?.resetScroll();
  };

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
      <Header logo={Logo} buttonClassName='text-[#D6D5C9]' />

      {/* Main Content */}
      <main className='relative z-10 container pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32'>
        <HorizontalScrollContainer ref={scrollContainerRef} onScrollChange={handleScrollChange}>
          {/* Section 1: Our Projects */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-30 w-full max-w-[900px] px-6'>
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
          <div className='flex flex-col gap-6 lg:ml-[2vw] w-full px-6 lg:px-0 my-10 lg:my-0'>
            <ImageZoom
              src={Image1}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
            <ImageZoom
              src={Image2}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
          </div>

          {/* Section 2: The Quarry Details */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-30 w-full max-w-[900px] px-6'>
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
          <div className='flex flex-col gap-6 lg:ml-[2vw] w-full px-6 lg:px-0 my-10 lg:my-0'>
            <ImageZoom
              src={Image3}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
            <ImageZoom
              src={Image4}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
          </div>

          {/* section 3: Investment Details */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-30 w-full max-w-[900px] px-6'>
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
          <div className='flex flex-col gap-6 lg:ml-[2vw] w-full px-6 lg:px-0 my-10 lg:my-0'>
            <ImageZoom
              src={Image5}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
            <ImageZoom
              src={Image6}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
          </div>
          <div className='hidden lg:block lg:min-w-[2vw]'></div>
        </HorizontalScrollContainer>

        {/* Go Back to Start Button */}
        {/* Removed scroll controls as menu is always visible */}
      </main>
    </div>
  );
}
