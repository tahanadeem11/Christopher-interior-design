"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Logo from "@/assets/home/logo.png";

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const quotes = [
    {
      text: "My goal is to help people experience their homes as more than just a place to live",
      author: "— Christopher Poole"
    },
    {
      text: "He designed around how we live... we just feel so much more connected as a family now.",
      author: "— Sarah & Michael"
    },
    {
      text: "It's not just how it looks… it's how it feels.",
      author: "— Emma & James"
    },
    {
      text: "My goal is to help people experience their homes as more than just a place to live",
      author: "— Christopher Poole"
    },
    {
      text: "Initially I was just looking to convert my attic to a master bedroom… now I can't stop looking at it!",
      author: "— David & Lisa"
    },
    {
      text: "Simplicity, Balance, Natural materials, I blend these elements into every design to evoke that sense of calm",
      author: "— Christopher Poole"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Background Video */}
      <div className='absolute inset-0 z-0'>
        <video autoPlay loop muted playsInline className='w-full h-full object-cover min-w-full min-h-full'>
          <source src='./media/home-background.mp4' type='video/mp4' />
        </video>
      </div>

      {/* Header with Logo and Menu */}
      <Header logo={Logo} />

      {/* Main Content - Professional spacing and alignment */}
      <main className='relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 mt-12 sm:mt-14 md:mt-16'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Quote Container with smooth transitions */}
          <div className='min-h-[150px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-center items-center'>
            <div 
              className={`transition-all duration-1000 ease-in-out ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}
            >
              <blockquote className='font-sans font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#574f4d] leading-relaxed px-2 sm:px-4'>
                &ldquo;{quotes[currentQuoteIndex].text}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Quote Navigation Dots */}
          <div className='flex justify-center items-center space-x-2 sm:space-x-3 mt-8 sm:mt-10 md:mt-12'>
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentQuoteIndex(index);
                    setIsVisible(true);
                  }, 500);
                }}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentQuoteIndex 
                    ? 'bg-[#574f4d] scale-125' : 'bg-[#574f4d]/30 hover:bg-[#574f4d]/60'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
