"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import SlideReveal from "@/components/ui/slidereveal";

// Import Clash Display Font
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

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-[url('/images/kulmidigital.jpeg')] bg-cover bg-center h-[100vh] w-full flex items-center justify-start">
      {/* Glassy Text Section */}
      <div className='relative bg-white/10 backdrop-blur-lg border border-white/30 rounded-[20px] px-[20px] py-[20px] w-[90%] mt-[50px] ml-4 md:w-[75%] md:py-[40px] md:px-[35px] md:mt-[100px] md:ml-8 lg:w-[55%] lg:mt-[150px] lg:ml-16 xl:w-[45%] shadow-lg'>
        <SlideReveal direction='up' duration={0.7}>
          <div>
            <h1
              className={`text-[28px] font-bold text-white mb-4 sm:text-[40px] lg:text-[50px] ${clashDisplay.className}`}>
              We&apos;re a digital agency <br /> with a{" "}
              <span className='text-[#FF8730]'>strategic focus</span>
            </h1>
            <p
              className={`text-[16px] text-white mb-6 sm:text-[18px] lg:text-[19px] ${clashDisplay.className}`}>
              With consumers spending more time online than ever before, having
              a strong digital presence is essential for businesses to succeed.
            </p>
            <button
              className='bg-[#F56E0F] text-white py-3 px-6 border border-[#F56E0F] rounded-full font-semibold flex items-center space-x-2 hover:bg-transparent hover:border-white transition duration-300 sm:py-4 sm:px-9'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              <span>Get Started</span>
              {isHovered ? (
                // Hovered SVG (Next Icon)
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'>
                  <path
                    d='M6 12H18M18 12L13 7M18 12L13 17'
                    stroke='#ffffff'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              ) : (
                // Default SVG (Up Icon)
                <svg
                  viewBox='0 0 1024 1024'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#ffffff'
                  className='w-5 h-5'>
                  <path
                    fill='#ffffff'
                    d='M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z'
                  />
                  <path
                    fill='#ffffff'
                    d='M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z'
                  />
                </svg>
              )}
            </button>
          </div>
        </SlideReveal>
      </div>
    </section>
  );
};

export default Hero;
