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
        "fixed inset-0 z-[11000] transition-opacity duration-500 bg-[#1A403B]" +
        (fadeOut ? "opacity-0 pointer-events-none" : "opacity-100")
      }
    >
      {/* background image from Story page */}
      <div className='absolute inset-0 -z-10'>
        <Image src={BGImage} alt='Background' fill className='object-cover' priority />
      </div>

      {/* centered logo and dots */}
      <div className='relative h-full w-full flex flex-col items-center justify-center gap-4 text-[#e7e7dc]'>
        <div className='w-[220px] md:w-[280px]'>
          <Image src={StoryLogo} alt='Christopher Poole' className='w-full h-auto object-contain' priority />
        </div>
        <div className='flex items-center gap-2' aria-hidden>
          <span className='sr-only'>{message}…</span>
          <div className='w-2 h-2 rounded-full bg-[#e7e7dc] animate-bounce [animation-delay:0ms]' />
          <div className='w-2 h-2 rounded-full bg-[#e7e7dc] animate-bounce [animation-delay:150ms]' />
          <div className='w-2 h-2 rounded-full bg-[#e7e7dc] animate-bounce [animation-delay:300ms]' />
        </div>
      </div>
    </div>
  );
}
