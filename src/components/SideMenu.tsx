"use client";
import Link from "next/link";
import { useEffect } from "react";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/story" },
  { name: "The Ethos", href: "/ethos" },
  { name: "Future Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-90 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: "url('/media/bg-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Menu Items */}
        <nav className='h-full flex flex-col justify-center items-center'>
          <ul className='space-y-0'>
            {menuItems.map((item, index) => (
              <li key={item.name} className='relative'>
                <Link
                  href={item.href}
                  className='block py-8 px-8 text-white text-lg font-light font-sans tracking-wider uppercase hover:text-gray-300 transition-colors text-center'
                  onClick={onClose}
                >
                  {item.name}
                </Link>
                {/* Vertical divider line */}
                {index < menuItems.length - 1 && (
                  <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[1.5px] h-8 bg-white/40' />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
