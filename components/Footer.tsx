import React from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import TopDeckFooter from "./TopDeckFooter";

// Font imports
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
});

const clashDisplay = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

// Footer Component
const Footer = () => {
  return (
    <section className='flex flex-col px-12 mt-[150px] bottom-0'>
      {/* Top Section with Footer Content */}
      <div>
        <TopDeckFooter />
      </div>

      {/* Bottom Footer Section */}
      <div className='flex justify-between items-center py-6 border-t border-gray-200 mt-8 w-full'>
        {/* Left Section: Logo and Links */}
        <div className='flex items-center space-x-6'>
          <Image src='/logo.svg' alt='Logo' width={26} height={26} />
          <span
            className={`${clashDisplay.className} text-black text-[26px] font-medium`}>
            Kulmi Digital
          </span>
        </div>

        {/* Middle Section: Navigation Links */}
        <div
          className={`${plusJakartaSans.className} flex space-x-6 text-[15px] text-gray-700`}>
          <Link href='/'>Home</Link>
          <span>|</span>
          <Link href='/about'>About</Link>
          <span>|</span>
          <Link href='/our-work'>Our Work</Link>
          <span>|</span>
          <Link href='/contact'>Contact</Link>
        </div>

        {/* Right Section: Copyright */}
        <div
          className={`${plusJakartaSans.className} text-gray-700 text-[14px]`}>
          Copyright © 2024 - All Right Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
