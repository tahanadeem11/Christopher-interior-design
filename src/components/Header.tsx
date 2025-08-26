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
      <header className='relative z-10 py-2 sm:py-3 md:py-4 px-4 sm:px-6 w-full -mt-16'>
        <div className='mx-4 sm:mx-6 md:mx-8 lg:mx-12 flex justify-between items-center'>
          {/* Logo - Responsive sizing for all screen sizes */}
          <div className='relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 flex items-center'>
            <Image src={logo} alt='Christopher Poole Logo' className='w-full h-full object-contain' priority />
          </div>

          {/* Menu Button - Responsive sizing and perfect alignment */}
          <button
            className={cn(
              "text-[#574f4d] text-sm sm:text-base md:text-lg tracking-wider uppercase hover:opacity-80 transition-opacity px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 font-sans font-light flex items-center ml-2 sm:ml-3 md:ml-4 mt-1 sm:mt-1.5 md:mt-2",
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
