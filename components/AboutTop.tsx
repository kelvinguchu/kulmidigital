"use client";
import Link from "next/link";
import localFont from "next/font/local";
import { useState } from "react";

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

const AboutTop = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className='text-center py-16 px-12 bg-white'>
      <div className='flex flex-col justify-around'>
        {/* Title and Subtitle */}
        <div className='w-[75%]'>
          <h1
            className={`${clashDisplay.className} text-[40px] font-bold text-left text-black -mb-10`}>
            We're <span className='text-[#F56E0F]'>Digital Specialists</span>{" "}
            helping ambitious brands like yours{" "}
            <span className='text-[#F56E0F]'>push boundaries</span> and{" "}
            <span className='text-[#F56E0F]'>drive impact</span>
          </h1>
        </div>

        {/* Call to Action Button */}
        <div className='mb-12 text-right'>
          <Link
            href='https://drive.google.com/file/d/1l5UoJKKJodB6N16aERzhsMDzyzhp69PH/view'
            passHref>
            <span
              className={`inline-block text-[16px] font-bold py-3 px-6 rounded-full transition-all duration-300 cursor-pointer ${
                isHovered
                  ? "bg-transparent text-black border border-black"
                  : "bg-[#F56E0F] text-white border border-[#F56E0F]"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              Download our Profile
              {isHovered ? (
                // Hovered SVG (Next)
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='inline-block ml-2 w-6 h-6'>
                  <path
                    d='M6 12H18M18 12L13 7M18 12L13 17'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              ) : (
                // Default SVG (Up)
                <svg
                  viewBox='0 0 1024 1024'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='inline-block ml-2 w-6 h-6'>
                  <path d='M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z'></path>
                  <path d='M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z'></path>
                </svg>
              )}
            </span>
          </Link>
        </div>
      </div>

      {/* Presence Information */}
      <div className='flex flex-col justify-start'>
        <div className='text-left mb-12'>
          <h2
            className={`${clashDisplay.className} text-3xl font-semibold text-[#F56E0F] mb-2`}>
            Our presence:
          </h2>
          <div className='flex flex-col gap-8'>
            {/* Physical Locations */}
            <div>
              <h3
                className={`${clashDisplay.className} text-2xl font-bold text-black mb-2`}>
                Physical:
              </h3>
              <div className='flex space-x-4'>
                {[
                  { name: "Kenya", flag: "/flags/kenya.png" },
                  { name: "Somalia", flag: "/flags/somalia.png" },
                  { name: "Ethiopia", flag: "/flags/ethiopia.png" },
                  { name: "Uganda", flag: "/flags/uganda.png" },
                  { name: "Tanzania", flag: "/flags/tanzania.png" },
                ].map((location) => (
                  <div className='flex items-center' key={location.name}>
                    <img
                      src={location.flag}
                      alt={location.name}
                      width={32}
                      height={50}
                      className='rounded-full'
                    />
                    <span className='ml-2'>{location.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Remote Locations */}
            <div>
              <h3
                className={`${clashDisplay.className} text-2xl font-bold text-black mb-2`}>
                Remote:
              </h3>
              <div className='flex space-x-4'>
                {[
                  { name: "Rest of Africa", flag: "/icons/africa.svg" },
                  { name: "Global", flag: "/icons/global.svg" },
                ].map((location) => (
                  <div className='flex items-center' key={location.name}>
                    <img
                      src={location.flag}
                      alt={location.name}
                      width={32}
                      height={32}
                      className='rounded-full'
                    />
                    <span className='ml-2'>{location.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTop;
