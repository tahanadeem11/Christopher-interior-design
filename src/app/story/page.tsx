"use client";
import { useState, useRef } from "react";
import Header from "@/components/Header";
import Image from "next/image";

// components
import { HorizontalScrollContainer, HorizontalScrollContainerRef } from "@/components/shared/HorizontalScrollContainer";

// types
interface ScrollInfo {
  scrollPosition: number;
  maxScroll: number;
  scrollPercentage: number;
  direction: "left" | "right";
}

// assets
import BGImage from "@/assets/bg-image.jpg";
import Logo from "@/assets/ethos/logo.png";
import Image1 from "@/assets/story/image1.jpeg";
import Image2 from "@/assets/story/image2.jpg";
import Image3 from "@/assets/story/image3.jpg";
import Image4 from "@/assets/story/image4.jpg";

export default function Story() {
  const [showScrollControls, setShowScrollControls] = useState(false);
  const scrollContainerRef = useRef<HorizontalScrollContainerRef>(null);

  const handleScrollChange = (info: ScrollInfo) => {
    setShowScrollControls(info.scrollPosition > 50); // Show controls after scrolling 50px
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
          alt='Background image of ethos'
          className='w-full h-full object-cover min-w-full min-h-full'
        />
      </div>

      {/* Header with Logo and Menu */}
      <Header logo={Logo} isShowMenu={showScrollControls} buttonClassName='text-[#D6D5C9]' />

      {/* Main Content */}
      <main className='relative z-10 container -mt-8'>
        <HorizontalScrollContainer ref={scrollContainerRef} onScrollChange={handleScrollChange}>
          {/* text content */}
          <div className='max-w-[900px] min-w-[900px] pl-30 md:min-w-[60vw] md:max-w-[60vw] sm:min-w-[40vw] sm:max-w-[40vw]'>
            <h1 className='text-[#e7e7dc] text-4xl md:text-3xl sm:text-2xl'>Our Story</h1>
            <h2 className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              Design should hold you, not overwhelm you. My approach to design isn’t rooted in trends. It’s rooted in
              experience, intuition, and an ongoing relationship with stillness, light, and nature.
            </h2>
            <br />

            <h2 className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              Everything I create begins with one question: How should this space make you feel?
            </h2>
            <br />

            <h2 className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              That feeling guides every decision.
            </h2>
            <br />
            <br />

            <h2 className='text-[#e7e7dc] font-[300] text-lg md:text-lg sm:text-lg uppercase'>FUTURE PROJECTS</h2>
            <div className='-mt-2 w-8 h-px bg-white/50'></div>
          </div>

          {/* image 1 */}
          <div className='relative max-w-[50vw] min-w-[400px] h-[55vh] ml-[10vw]'>
            <Image src={Image1} alt='' className='w-full h-full object-cover' />
          </div>

          <div className='relative w-full h-[60vh] ml-[5vw]  min-w-screen flex flex-col items-center '>
            <div className='w-[58%]'>
              <Image src={Image2} alt='' className=' h-[60%] object-cover' />
              <div className='flex flex-row justify-baseline gap-10 mt-4'>
                <div className='flex flex-col'>
                  <h2 className='text-[#e7e7dc] font-[300] text-lg md:text-lg sm:text-lg uppercase'>THE ETHOS</h2>
                  <div className='-mt-2 w-8 h-px bg-white/50'></div>
                </div>
                <div className='flex flex-col'>
                  <h2 className='text-[#e7e7dc] font-[300] text-lg md:text-lg sm:text-lg uppercase'>FUTURE PROJECTS</h2>
                  <div className='-mt-2 w-8 h-px bg-white/50'></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Original Story Text Continued */}
          <div className='max-w-[900px] min-w-[900px] pl-30 md:min-w-[60vw] md:max-w-[60vw] sm:min-w-[40vw] sm:max-w-[40vw]'>
            <h1 className='text-[#e7e7dc] text-4xl md:text-3xl sm:text-2xl'>The Story</h1>
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              I didn’t come into this work through architecture school or interior design programs. I came to it through
              life. For over two decades, I worked internationally as a model. I spent years inside beautifully styled
              spaces — apartments, homes, studios — crafted for the camera.
            </p>
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              At first, it all looked impressive. But the longer I was inside these environments, the more I began to
              feel something was missing. They were visually perfect. But emotionally flat. They weren’t designed to be
              lived in. They were designed to be looked at.
            </p>
            <br />
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              That realisation sat with me for a long time. I didn’t know what to do with it — only that I was paying
              attention to things most people overlooked: the way light moved across old brick, the softness of aged
              wood, how stillness made a room feel more generous.
            </p>
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              The shift came when my partner left a high-pressure job. We both needed a reset — not just in lifestyle,
              but in environment. We began restoring properties, working directly on homes from the inside out. It
              wasn’t a business plan. It was instinct.
            </p>
          </div>

          {/* image 3 */}
          <div className='relative max-w-[50vw] min-w-[400px] h-[55vh] ml-[10vw]'>
            <Image src={Image3} alt='' className='w-full h-full object-cover' />
          </div>

          {/* section 3 */}
          <div className='max-w-[900px] min-w-[900px] pl-30 md:min-w-[60vw] md:max-w-[60vw] sm:min-w-[40vw] sm:max-w-[40vw]'>
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              I was on-site every day — sketching ideas, adapting floorplans, learning from the trades, figuring out
              what it meant to make a space feel right instead of just look right. And then something happened I didn’t
              expect: People who visited our spaces would say, &quot;I feel different in here.&quot; &quot;It’s
              calm.&quot; &quot;I don’t want to leave.&quot;
            </p>
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              That’s when I knew I had found the work I was meant to do. I wasn’t interested in building fast or
              flipping for profit. I was interested in creating homes that offered something deeper — connection,
              clarity, a sense of belonging.
            </p>
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              So I kept going. I studied what I felt drawn to — the lived-in elegance of Japanese design, the
              imperfections that make materials human, the way natural light shapes emotion. I spent time in places
              where resourcefulness is a necessity, not an aesthetic — and brought those lessons home.
            </p>
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              Today, every project I take on begins the same way: with listening. Not just to the client, but to the
              building. The surroundings. The light.
            </p>
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              Because a house isn’t just a structure. It’s a container for how people live, rest, gather, and grow. And
              when it’s done right, it holds you — not just physically, but emotionally. That’s why I do this. Not to
              decorate life. But to support it.
            </p>
          </div>

          {/* image 4 */}
          <div className='relative max-w-[50vw] min-w-[400px] h-[55vh] ml-[10vw]'>
            <Image src={Image4} alt='' className='w-full h-full object-cover' />
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
