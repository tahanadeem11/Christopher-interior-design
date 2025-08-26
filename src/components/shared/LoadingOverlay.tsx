"use client";

import React from "react";
import Image from "next/image";
import BGImage from "@/assets/bg-image.jpg";
import StoryLogo from "@/assets/ethos/logo.png";

type LoadingOverlayProps = {
  visible?: boolean;
  message?: string;
  fadeOut?: boolean;
};

export default function LoadingOverlay({ visible = true, message = "Loading", fadeOut = false }: LoadingOverlayProps) {
  if (!visible) return null;
  return (
    <div
      className={
        "fixed inset-0 z-[11000] transition-all duration-2000 ease-in-out bg-[#1A403B]" +
        (fadeOut ? "opacity-0 pointer-events-none" : "opacity-100")
      }
    >
      {/* background image from Story page */}
      <div className='absolute inset-0 -z-10'>
        <Image src={BGImage} alt='Background' fill className='object-cover' priority />
      </div>

      {/* centered logo only with smooth fade, calm effects, and gentle shake */}
      <div className='relative h-full w-full flex flex-col items-center justify-center text-[#e7e7dc]'>
        <div 
          className={`w-[220px] md:w-[280px] transition-all duration-2000 ease-in-out ${
            fadeOut ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}
        >
          <Image 
            src={StoryLogo} 
            alt='Christopher Poole' 
            className={`w-full h-auto object-contain transition-all duration-2000 ease-in-out hover:scale-110 ${
              !fadeOut ? 'animate-pulse' : ''
            }`}
            priority 
          />
        </div>
      </div>
    </div>
  );
}
