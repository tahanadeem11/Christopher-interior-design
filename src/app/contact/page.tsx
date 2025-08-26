"use client";
import Header from "@/components/Header";
import Logo from "@/assets/home/logo.png";
import { useEffect, useState, useActionState } from "react";
import Image from "next/image";
import BGImage from "@/assets/home/bg.png";

import InstaIcon from "@/assets/contacts/CP insta icon.png";
import PinterestIcon from "@/assets/contacts/CP pinterest icon.png";
import ImageZoom from "@/components/shared/ImageZoom";
import { sendContactEmail } from "./actions";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [state, formAction, isPending] = useActionState(sendContactEmail, {
    ok: null,
    message: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // reset the form on successful send
  useEffect(() => {
    if (state.ok) setFormData({ name: "", email: "", message: "" });
  }, [state.ok]);

  return (
    <div className='relative min-h-screen overflow-y-auto'>
      {/* Background: static image base, video overlay only on md+ to save bandwidth */}
      <div className='absolute inset-0 z-0'>
        <Image src={BGImage} alt='Background' fill className='object-cover' priority />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload='none'
          poster='./media/video-poster.png'
          aria-hidden='true'
          className='hidden md:block w-full h-full object-cover min-w-full min-h-full'
        >
          <source src='./media/home-background.mp4' type='video/mp4' />
        </video>
      </div>

      {/* Header with Logo and Menu */}
      <Header logo={Logo} />

      {/* Main Content */}
      <main className='relative z-10 container mx-auto px-4 py-16 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            {/* Left Side - Contact Info */}
            <div className='space-y-8'>
              <div className='font-sans font-light text-2xl text-[#574f4d] leading-relaxed'>
                <p>Please get in touch by completing the</p>
                <p>form or emailing:</p>
                <p className='mt-4'>
                  <a href='mailto:christopher@christopherpoole.design' className='hover:opacity-80 transition-opacity'>
                    christopher@christopherpoole.design
                  </a>
                </p>
              </div>

              {/* Social Icons */}
              <div className='flex space-x-6 mt-24'>
                {/* Instagram Icon */}
                <a
                  href='#'
                  className='w-8 h-8 text-[#574f4d] hover:opacity-80 transition-opacity rounded-full overflow-clip'
                  aria-label='Instagram'
                >
                  <ImageZoom src={InstaIcon} alt='Instagram' className='w-full h-full' />
                </a>

                {/* Pinterest Icon */}
                <a
                  href='#'
                  className='w-8 h-8 text-[#574f4d] hover:opacity-80 transition-opacity rounded-full overflow-clip'
                  aria-label='Pinterest'
                >
                  <ImageZoom src={PinterestIcon} alt='Pinterest' className='w-full h-full' />
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className='bg-white/10 backdrop-blur-sm p-8 -mt-8'>
              <form action={formAction} className='space-y-6'>
                <div className='relative'>
                  <label htmlFor='name' className='block text-[#574f4d] text-sm font-medium mb-2 font-sans uppercase'>
                    Name
                  </label>
                  <div className='relative'>
                    <div className='absolute left-0 top-0 bottom-0 w-px bg-[#574f4d]'></div>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full pl-6 pr-4 ml-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-[#574f4d] focus:outline-none focus:ring-2 focus:ring-[#574f4d]/50 focus:border-transparent'
                    />
                  </div>
                </div>

                <div className='relative'>
                  <label htmlFor='email' className='block text-[#574f4d] text-sm font-medium mb-2 font-sans uppercase'>
                    Email
                  </label>
                  <div className='relative'>
                    <div className='absolute left-0 top-0 bottom-0 w-px bg-[#574f4d]'></div>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full pl-6 pr-4 ml-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-[#574f4d] focus:outline-none focus:ring-2 focus:ring-[#574f4d]/50 focus:border-transparent'
                    />
                  </div>
                </div>

                <div className='relative'>
                  <label
                    htmlFor='message'
                    className='block text-[#574f4d] text-sm font-medium mb-2 font-sans uppercase'
                  >
                    Message
                  </label>
                  <div className='relative'>
                    <div className='absolute left-0 top-0 bottom-0 w-px bg-[#574f4d]'></div>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className='w-full pl-6 pr-4 ml-3 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-[#574f4d] focus:outline-none focus:ring-2 focus:ring-[#574f4d]/50 focus:border-transparent resize-none'
                    />
                  </div>
                </div>

                {state.message && (
                  <p
                    className={`${state.ok ? "text-green-600" : "text-red-600"} text-sm`}
                    role='status'
                    aria-live='polite'
                  >
                    {state.message}
                  </p>
                )}

                {/* Submit Button with Chevron Forward Icon */}
                <div className='flex justify-end'>
                  <button
                    type='submit'
                    disabled={isPending}
                    aria-busy={isPending}
                    className='flex items-center justify-center w-12 h-12 bg-[#574f4d] text-white rounded-full hover:bg-[#574f4d]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#574f4d]/50 disabled:opacity-50 disabled:cursor-not-allowed'
                    aria-label='Submit form'
                  >
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='w-6 h-6'
                    >
                      <polyline points='9,18 15,12 9,6'></polyline>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
