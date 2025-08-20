"use client";
import Image from "next/image";

// assets
import Logo from "@/assets/logo.png";

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Background Video */}
      <div className='absolute inset-0 z-0'>
        <video autoPlay loop muted playsInline className='w-full h-full object-cover min-w-full min-h-full'>
          <source src='./media/home-background.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-black/5' />
      </div>

      {/* Header with Logo and Menu */}
      <header className='relative z-10 py-4 px-6 w-full -mt-16'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          {/* Logo */}
          <div className='relative w-80 h-80'>
            <Image src={Logo} alt='Christopher Poole Logo' className='w-full h-full object-contain' priority />
          </div>

          {/* Menu Button */}
          <button
            className='text-[#574f4d] text-lg tracking-wider uppercase hover:opacity-80 transition-opacity px-6 py-2 font-sans font-light'
            onClick={() => console.log("Menu clicked")}
          >
            Menu
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className='relative z-10 container mx-auto px-4 py-16 mt-10'>
        <div className='max-w-[600px] mx-auto text-center font-sans font-light text-4xl text-[#574f4d] leading-12'>
          <p>“He designed around how we live...</p>
          <p>we just feel so much more connected as a family now.”</p>
        </div>
      </main>
    </div>
  );
}
