"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import SideMenu from "./SideMenu";
import { cn } from "@/lib/utils";

interface HeaderProps {
  logo: StaticImageData;
  buttonClassName?: string;
}

const Header: React.FC<HeaderProps> = ({ logo, buttonClassName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 py-1 px-4 sm:px-6 w-full bg-transparent'>
        <div className='mx-2 sm:mx-4 md:mx-6 lg:mx-8 flex justify-between items-center h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32'>
          {/* Logo - Responsive sizing for all screen sizes */}
          <div className='relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 flex items-center'>
            <Image src={logo} alt='Christopher Poole Logo' className='w-full h-full object-contain' priority />
          </div>

          {/* Menu Button - Responsive sizing and perfect alignment */}
          <button
            className={cn(
              "text-[#574f4d] text-xs sm:text-sm md:text-base lg:text-lg tracking-wider uppercase hover:opacity-80 transition-opacity px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 font-sans font-light flex items-center",
              buttonClassName
            )}
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
};

export default Header;
