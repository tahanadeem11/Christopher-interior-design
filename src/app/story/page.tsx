"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import Header from "@/components/Header";
import ImageZoom from "@/components/shared/ImageZoom";

// components
import { HorizontalScrollContainer, HorizontalScrollContainerRef } from "@/components/shared/HorizontalScrollContainer";

// assets
import BGImage from "@/assets/bg-image.jpg";
import Logo from "@/assets/ethos/logo.png";
import Image1 from "@/assets/story/image1.jpeg";
import Image2 from "@/assets/story/image2.jpg";
import Image3 from "@/assets/story/image3.jpg";
import Image4 from "@/assets/story/image4.jpg";

// types
interface ScrollInfo {
  scrollPosition: number;
  maxScroll: number;
  scrollPercentage: number;
  direction: "left" | "right";
}

export default function Story() {
  const scrollContainerRef = useRef<HorizontalScrollContainerRef>(null);

  const handleScrollChange = () => {
    // Scroll change handler for future use
  };

  return (
    <div className='relative min-h-screen lg:h-screen overflow-hidden'>
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
      <main className='relative z-10 lg:h-full lg:flex lg:items-center pt-20 sm:pt-24 md:pt-28 lg:pt-0'>
        <HorizontalScrollContainer ref={scrollContainerRef} onScrollChange={handleScrollChange}>
          {/* text content */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-30 w-full max-w-[900px] px-6'>
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

            <Link href='/projects'>
              <h2 className='text-[#e7e7dc] font-[300] text-lg md:text-lg sm:text-lg uppercase'>FUTURE PROJECTS</h2>
              <div className='-mt-2 w-8 h-px bg-white/50'></div>
            </Link>
          </div>

          {/* image 1 */}
          <ImageZoom
            src={Image1}
            alt=''
            className='w-full h-full object-cover'
            containerClassName='relative lg:max-w-[50vw] lg:min-w-[400px] h-[45vh] md:h-[55vh] lg:h-[60vh] lg:ml-[5vw] w-full px-6 my-10 lg:my-0'
          />

          {/* Video Section */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-4 sm:px-6 my-6 sm:my-8 lg:px-0'>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className='w-full lg:h-[60vh] h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg'
            >
              <source src='./media/home-background.mp4' type='video/mp4' />
            </video>
            
            <div className='flex flex-row justify-start gap-4 lg:gap-10 lg:mt-4 mt-8'>
              <div className='flex flex-col'>
                <Link href='/ethos'>
                  <h2 className='text-[#e7e7dc] font-[300] text-lg md:text-lg sm:text-lg uppercase'>THE ETHOS</h2>
                  <div className='-mt-2 w-8 h-px bg-white/50'></div>
                </Link>
              </div>
              <div className='flex flex-col'>
                <Link href='/projects'>
                  <h2 className='text-[#e7e7dc] font-[300] text-lg md:text-lg sm:text-lg uppercase'>
                    FUTURE PROJECTS
                  </h2>
                  <div className='-mt-2 w-8 h-px bg-white/50'></div>
                </Link>
              </div>
            </div>
          </div>

          <div className='relative lg:w-auto w-full h-auto lg:ml-0 flex flex-col items-center px-6 my-10 lg:my-0 lg:px-0 lg:min-w-[60vw]'>
            <div className='lg:w-full w-full flex justify-center'>
              <div>
                <ImageZoom
                  src={Image2}
                  alt=''
                  className='w-full lg:h-full h-auto object-cover'
                  containerClassName='relative w-full lg:w-[50vw] lg:h-[55vh]'
                />
                <div className='flex flex-row justify-start gap-4 lg:gap-10 lg:mt-4 mt-8'>
                  <div className='flex flex-col'>
                    <Link href='/ethos'>
                      <h2 className='text-[#e7e7dc] font-[300] text-lg md:text-lg sm:text-lg uppercase'>THE ETHOS</h2>
                      <div className='-mt-2 w-8 h-px bg-white/50'></div>
                    </Link>
                  </div>
                  <div className='flex flex-col'>
                    <Link href='/projects'>
                      <h2 className='text-[#e7e7dc] font-[300] text-lg md:text-lg sm:text-lg uppercase'>
                        FUTURE PROJECTS
                      </h2>
                      <div className='-mt-2 w-8 h-px bg-white/50'></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Original Story Text Continued */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-30 w-full max-w-[900px] px-6'>
            <h1 className='text-[#e7e7dc] text-4xl md:text-3xl sm:text-2xl'>The Story</h1>
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              I didn’t come into this work through architecture school or interior design programs. I came to it through
              life. For over two decades, I worked internationally as a model. I spent years inside beautifully styled
              spaces — apartments, homes, studios — crafted for the camera.
            </p>
            <br />
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
          </div>

          {/* image 3 */}
          <ImageZoom
            src={Image3}
            alt=''
            className='w-full lg:h-full h-auto object-cover'
            containerClassName='relative lg:max-w-[50vw] lg:min-w-[400px] lg:h-[60vh] lg:ml-[2vw] w-full h-auto px-6 my-10 lg:my-0'
          />

          {/* section 3 */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-30 w-full max-w-[900px] px-6'>
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              The shift came when my partner left a high-pressure job. We both needed a reset — not just in lifestyle,
              but in environment. We began restoring properties, working directly on homes from the inside out. It
              wasn’t a business plan. It was instinct.
            </p>
            <br />
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              I was on-site every day — sketching ideas, adapting floorplans, learning from the trades, figuring out
              what it meant to make a space feel right instead of just look right. And then something happened I didn’t
              expect: People who visited our spaces would say, &quot;I feel different in here.&quot; &quot;It’s
              calm.&quot; &quot;I don’t want to leave.&quot;
            </p>
            <br />
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              That’s when I knew I had found the work I was meant to do. I wasn’t interested in building fast or
              flipping for profit. I was interested in creating homes that offered something deeper — connection,
              clarity, a sense of belonging.
            </p>
          </div>

          {/* image 4 */}
          <ImageZoom
            src={Image4}
            alt=''
            className='w-full lg:h-full h-auto object-cover'
            containerClassName='relative lg:max-w-[50vw] lg:min-w-[400px] lg:h-[60vh] lg:ml-[2vw] w-full h-auto px-6 my-10 lg:my-0'
          />

          {/* section 5 */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-30 w-full max-w-[900px] px-6'>
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              So I kept going. I studied what I felt drawn to — the lived-in elegance of Japanese design, the
              imperfections that make materials human, the way natural light shapes emotion. I spent time in places
              where resourcefulness is a necessity, not an aesthetic — and brought those lessons home.
            </p>
            <br />
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              Today, every project I take on begins the same way: with listening. Not just to the client, but to the
              building. The surroundings. The light.
            </p>
            <br />
            <p className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>
              Because a house isn’t just a structure. It’s a container for how people live, rest, gather, and grow. And
              when it’s done right, it holds you — not just physically, but emotionally. That’s why I do this. Not to
              decorate life. But to support it.
            </p>
          </div>

          {/* image 5 */}
          <ImageZoom
            src={Image2}
            alt=''
            className='w-full lg:h-full h-auto object-cover'
            containerClassName='relative lg:max-w-[50vw] lg:min-w-[400px] lg:h-[60vh] lg:ml-[2vw] w-full h-auto px-6 my-10 lg:my-0'
          />
        </HorizontalScrollContainer>

        {/* Go Back to Start Button */}
        {/* Removed scroll controls as menu is always visible */}
      </main>
    </div>
  );
}
