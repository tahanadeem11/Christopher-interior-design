"use client";
import Header from "@/components/Header";
import Image from "next/image";

// components
import { HorizontalScrollContainer } from "@/components/shared/HorizontalScrollContainer";

// assets
import BGImage from "@/assets/bg-image.jpg";
import Logo from "@/assets/ethos/logo.png";
import Image1 from "@/assets/ethos/image1.png";
import Image2 from "@/assets/ethos/image2.jpeg";
import Image3 from "@/assets/ethos/image3.jpeg";
import Image4 from "@/assets/ethos/image4.jpeg";
import Image5 from "@/assets/ethos/image5.jpg";

export default function Home() {
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
      <Header logo={Logo} isShowMenu={false} />

      {/* Main Content */}
      <main className='relative z-10 container -mt-4'>
        <HorizontalScrollContainer>
          {/* text content */}
          <div className='max-w-[900px] min-w-[900px] pl-30 md:min-w-[80vw] md:max-w-[80vw] sm:min-w-[70vw] sm:max-w-[70vw]'>
            <h1 className='text-[#e7e7dc] text-4xl md:text-3xl sm:text-2xl'>THE ETHOS</h1>
            <h2 className='text-[#e7e7dc] font-[300] text-2xl md:text-xl sm:text-lg'>Our work is guided by feeling.</h2>

            <h3 className='text-[#e7e7dc] text-xl md:text-lg font-sans leading-4 mt-14'>Peace</h3>
            <p className='text-[#e7e7dc] font-sans font-light text-[22px] md:text-[18px] sm:text-[16px]'>
              The design should ground you. Light, air, and materials that calm the nervous system.
            </p>

            {/* verticle bar */}
            <div className='ml-2 mt-2 mb-6 w-px h-8 bg-white/40'></div>

            <h3 className='text-[#e7e7dc] text-[22px] md:text-[20px] font-sans leading-4'>Simplicity</h3>
            <p className='text-[#e7e7dc] font-sans font-light text-[22px] md:text-[18px] sm:text-[16px]'>
              Nothing extra. Everything necessary. Beauty found in restraint.
            </p>

            {/* verticle bar */}
            <div className='ml-2 mt-2 mb-6 w-px h-8 bg-white/40'></div>

            <h3 className='text-[#e7e7dc] text-[22px] md:text-[20px] font-sans leading-4'>Flow</h3>
            <p className='text-[#e7e7dc] font-sans font-light text-[22px] md:text-[18px] sm:text-[16px]'>
              From one room to the next, one breath to the next—our work moves like water.
            </p>
          </div>

          {/* image 1 */}
          <div className='relative max-w-[50vw] min-w-[850px] h-[60vh] ml-[10vw]'>
            <div className='absolute bg-black/70 text-xl font-light text-white/80 w-[55%] h-[50%] px-6 py-5 bottom-0 right-0 flex justify-center items-center text-right leading-relaxed'>
              <span className='block'>
                The stone sink rests on a reclaimed timber surface, its raw form echoing in imperfection. A steel-framed
                mirror adds structure, while the lighting — placed at face level — was carefully considered to avoid
                harsh overhead shadows.
              </span>
            </div>
            <Image src={Image1} alt='' className='w-full h-full object-cover' />
          </div>

          {/* image 2 */}
          <div className='relative w-full h-[60vh] ml-[5vw] min-w-[850px]'>
            <Image src={Image2} alt='' className='w-full h-full object-cover' />
          </div>

          {/* image 3 */}
          <div className='relative w-full h-[60vh] ml-[5vw] min-w-[850px]'>
            <Image src={Image3} alt='' className='w-full h-full object-cover' />
          </div>

          {/* image 4 */}
          <div className='relative w-full h-[60vh] ml-[5vw] min-w-[850px]'>
            <Image src={Image4} alt='' className='w-full h-full object-cover' />
          </div>

          {/* image 5 */}
          <div className='relative w-full h-[60vh] ml-[5vw] min-w-[850px]'>
            <Image src={Image5} alt='' className='w-full h-full object-cover' />
          </div>
          <div className='min-w-[30vw]'></div>
        </HorizontalScrollContainer>
      </main>
    </div>
  );
}
