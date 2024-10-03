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
    <section className='flex flex-col px-4 py-8 sm:px-12 mt-[50px] sm:mt-[150px]'>
      {/* Top Section with Footer Content */}
      <div>
        <TopDeckFooter />
      </div>

      {/* Bottom Footer Section */}
      <div className='flex flex-col items-center space-y-4 py-6 border-t border-gray-200 mt-8 w-full sm:flex-row sm:justify-between sm:space-y-0'>
        {/* Left Section: Logo and Links */}
        <div className='flex items-center space-x-4'>
          <Image src='/logo.svg' alt='Logo' width={26} height={26} />
          <span
            className={`${clashDisplay.className} text-black text-[20px] sm:text-[26px] font-medium`}>
            Kulmi Digital
          </span>
        </div>

        {/* Middle Section: Navigation Links */}
        <div
          className={`${plusJakartaSans.className} flex flex-wrap justify-center space-x-4 text-[14px] sm:text-[15px] text-gray-700`}>
          <Link href='/'>Home</Link>
          <span>|</span>
          <Link href='/about'>About</Link>
          <span>|</span>
          <Link href='/our-work'>Our Work</Link>
        </div>

        {/* Right Section: Copyright */}
        <div
          className={`${plusJakartaSans.className} text-center text-gray-700 text-[12px] sm:text-[14px]`}>
          Copyright © 2024 - All Right Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
