"use client";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Background Video */}
      <div className='absolute inset-0 z-0'>
        <video autoPlay loop muted playsInline className='w-full h-full object-cover min-w-full min-h-full'>
          <source src='./media/home-background.mp4' type='video/mp4' />
        </video>
      </div>

      {/* Header with Logo and Menu */}
      <Header />

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
