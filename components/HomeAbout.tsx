import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
});

// Use Clash Display Font
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

const HomeAbout = () => {
  return (
    <section className='flex flex-col items-left px-14 bg-slate-100 mt-[60px] pt-[80px] pb-[40px'>
      <div>
        <h1
          className={`${clashDisplay.className} text-5xl font-bold text-black mb-6`}>
          About <span className='text-[#F56E0F]'>Kulmi Digital</span>
        </h1>
        <p className={`${plusJakartaSans.className} text-gray-600 text-[18px]`}>
          At Kulmi Digital, we understand the crucial role that a well crafted
          online brand plays in today's digital landscape. With consumers
          spending more time online than ever before, having a strong digital
          presence is essential for businesses to succeed.
          <br />
          <br />
          That's where we come in. Our team of skilled professionals is
          dedicated to helping clients like you maximize their online impact
          through targeted ad campaigns, strategic planning, and creative
          solutions. From social media advertising to search engine marketing,
          we have the expertise and experience to drive results and growth for
          your brand.
        </p>
      </div>

      <div className='flex flex-row justify-between items-center mt-12'>
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
                      <Image
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
                      <Image
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
                <div className="mt-4">
                  <Link href='/about'>
                    <span
                      className={`${plusJakartaSans.className} inline-flex items-center border-black border-b-[1px] text-[14px]`}>
                      Learn More
                      <Image
                        src='/icons/up.svg'
                        alt='Arrow Right'
                        width={24}
                        height={24}
                        className='ml-2'
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
