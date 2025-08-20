"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import SideMenu from "./SideMenu";

interface HeaderProps {
  logo: StaticImageData;
  isShowMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({ logo, isShowMenu = true }) => {
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
        <div className='mx-12 flex justify-between items-center'>
          {/* Logo */}
          <div className='relative w-80 h-80'>
            <Image src={logo} alt='Christopher Poole Logo' className='w-full h-full object-contain' priority />
          </div>

          {/* Menu Button */}
          {isShowMenu && (
            <button
              className='text-[#574f4d] text-lg tracking-wider uppercase hover:opacity-80 transition-opacity px-6 py-2 font-sans font-light'
              onClick={toggleMenu}
            >
              Menu
            </button>
          )}
        </div>
      </header>

      {/* Side Menu */}
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
