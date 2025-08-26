"use client";
import { useRef } from "react";
import Header from "@/components/Header";
import ImageZoom from "@/components/shared/ImageZoom";

// components
import { HorizontalScrollContainer, HorizontalScrollContainerRef } from "@/components/shared/HorizontalScrollContainer";

// assets
import BGImage from "@/assets/bg-image.jpg";
import Logo from "@/assets/ethos/logo.png";
import Image1 from "@/assets/ethos/image1.png";
import Image2 from "@/assets/ethos/image2.jpeg";
import Image3 from "@/assets/ethos/image3.jpeg";
import Image4 from "@/assets/ethos/image4.jpeg";
import Image5 from "@/assets/ethos/image5.jpg";
import Image from "next/image";

export default function Home() {
  const scrollContainerRef = useRef<HorizontalScrollContainerRef>(null);

  const handleScrollChange = () => {
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
          alt='Background image of ethos'
          className='w-full h-full object-cover min-w-full min-h-full'
        />
      </div>

      {/* Header with Logo and Menu */}
      <Header logo={Logo} buttonClassName='text-[#D6D5C9]' />

      {/* Main Content */}
      <main className='relative z-10 container pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32'>
        <HorizontalScrollContainer ref={scrollContainerRef} onScrollChange={handleScrollChange}>
          {/* text content */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-30 w-full max-w-[900px] px-4 sm:px-6'>
            <h1 className='text-[#e7e7dc] text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight'>THE ETHOS</h1>
            <h2 className='text-[#e7e7dc] font-[300] text-lg sm:text-xl md:text-2xl lg:text-2xl leading-relaxed mt-4 sm:mt-6'>Our work is guided by feeling.</h2>

            <h3 className='text-[#e7e7dc] text-lg sm:text-xl md:text-xl lg:text-xl font-sans leading-4 mt-4 sm:mt-5'>Peace</h3>
            <p className='text-[#e7e7dc] font-sans font-light text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed'>
              The design should ground you. Light, air, and materials that calm the nervous system.
            </p>

            {/* verticle bar */}
            <div className='ml-2 mt-2 mb-2 w-px h-4 bg-white/40'></div>

            <h3 className='text-[#e7e7dc] text-lg sm:text-xl md:text-xl lg:text-[22px] font-sans leading-4'>Simplicity</h3>
            <p className='text-[#e7e7dc] font-sans font-light text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed'>
              Nothing extra. Everything necessary. Beauty found in restraint.
            </p>

            {/* verticle bar */}
            <div className='ml-2 mt-2 mb-2 w-px h-4 bg-white/40'></div>

            <h3 className='text-[#e7e7dc] text-lg sm:text-xl md:text-xl lg:text-xl font-sans leading-4'>Flow</h3>
            <p className='text-[#e7e7dc] font-sans font-light text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed'>
              From one room to the next, one breath to the next&mdash;our work moves like water.
            </p>
          </div>

          {/* image 1 - Peace & Serenity */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[4vw] lg:mt-4 w-full h-auto px-4 sm:px-6 md:px-8 my-6 sm:my-8 lg:my-0'>
            <div className='hidden lg:flex absolute bg-black/70 text-lg font-light text-white/90 w-[55%] h-[50%] px-6 py-5 lg:mr-[60px] lg:-mb-[1px] bottom-0 right-0 justify-center items-center text-right leading-relaxed z-10 rounded-tl-lg'>
              <span className='block'>
                <strong>Peace:</strong> Natural materials that ground and calm. Stone, timber, and light work together to soothe the nervous system.
              </span>
            </div>
            <ImageZoom src={Image1} alt='Peace & Serenity' className='w-full lg:h-[60vh] h-[200px] sm:h-[250px] md:h-[300px] object-cover' />
          </div>

          {/* image 2 - Simplicity & Restraint */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-4 sm:px-6 my-6 sm:my-8 lg:px-0'>
            <div className='hidden lg:flex absolute bg-black/70 text-lg font-light text-white/90 w-[55%] h-[50%] px-6 py-5 lg:mr-[60px] lg:-mb-[1px] bottom-0 right-0 justify-center items-center text-right leading-relaxed z-10 rounded-tl-lg'>
              <span className='block'>
                <strong>Simplicity:</strong> Beauty in restraint. Clean lines and minimal elements create spaces that breathe naturally.
              </span>
            </div>
            <ImageZoom
              src={Image2}
              alt='Simplicity & Restraint'
              className='w-full lg:h-[60vh] h-[200px] sm:h-[250px] md:h-[300px] object-cover'
            />
          </div>

          {/* image 3 - Flow & Movement */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-4 sm:px-6 my-6 sm:my-8 lg:px-0'>
            <div className='hidden lg:flex absolute bg-black/70 text-lg font-light text-white/90 w-[55%] h-[50%] px-6 py-5 lg:mr-[60px] lg:-mb-[1px] bottom-0 right-0 justify-center items-center text-right leading-relaxed z-10 rounded-tl-lg'>
              <span className='block'>
                <strong>Flow:</strong> Spaces that move like water. Seamless transitions between rooms create continuous, natural movement.
              </span>
            </div>
            <ImageZoom
              src={Image3}
              alt='Flow & Movement'
              className='w-full lg:h-[60vh] h-[200px] sm:h-[250px] md:h-[300px] object-cover'
            />
          </div>

          {/* image 4 - Light & Air */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-4 sm:px-6 my-6 sm:my-8 lg:px-0'>
            <div className='hidden lg:flex absolute bg-black/70 text-lg font-light text-white/90 w-[55%] h-[50%] px-6 py-5 lg:mr-[60px] lg:-mb-[1px] bottom-0 right-0 justify-center items-center text-right leading-relaxed z-10 rounded-tl-lg'>
              <span className='block'>
                <strong>Light & Air:</strong> Natural illumination creates depth and warmth. Thoughtfully placed openings optimize flow.
              </span>
            </div>
            <ImageZoom
              src={Image4}
              alt='Light & Air'
              className='w-full lg:h-[60vh] h-[200px] sm:h-[250px] md:h-[300px] object-cover'
            />
          </div>

          {/* image 5 - Materials & Texture */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-4 sm:px-6 my-6 sm:my-8 lg:px-0'>
            <div className='hidden lg:flex absolute bg-black/70 text-lg font-light text-white/90 w-[55%] h-[50%] px-6 py-5 lg:mr-[60px] lg:-mb-[1px] bottom-0 right-0 justify-center items-center text-right leading-relaxed z-10 rounded-tl-lg'>
              <span className='block'>
                <strong>Materials:</strong> Raw, honest textures that age beautifully. Imperfections become marks of character over time.
              </span>
            </div>
            <ImageZoom
              src={Image5}
              alt='Materials & Texture'
              className='w-full lg:h-[60vh] h-[200px] sm:h-[250px] md:h-[300px] object-cover'
            />
          </div>
          <div className='hidden lg:block lg:min-w-[10vw]'></div>
        </HorizontalScrollContainer>

        {/* Go Back to Start Button */}
        <button
          onClick={scrollToStart}
          className='fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm'
          aria-label='Go back to start'
        >
          <svg
            width='32'
            height='32'
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
      </main>
    </div>
  );
}
