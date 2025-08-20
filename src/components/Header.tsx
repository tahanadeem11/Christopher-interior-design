"use client";
import { useState } from "react";
import Image from "next/image";
import SideMenu from "./SideMenu";

// assets
import Logo from "@/assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className='relative z-10 py-4 px-6 w-full -mt-16'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          {/* Logo */}
          <div className='relative w-80 h-80'>
            <Image src={Logo} alt='Christopher Poole Logo' className='w-full h-full object-contain' priority />
          </div>

          {/* Menu Button */}
          <button
            className='text-[#574f4d] text-lg tracking-wider uppercase hover:opacity-80 transition-opacity px-6 py-2 font-sans font-light'
            onClick={toggleMenu}
          >
            Menu
          </button>
        </div>
      </header>

      {/* Side Menu */}
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
