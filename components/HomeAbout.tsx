import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import SlideReveal from "@/components/ui/slidereveal";

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
    <section className='flex flex-col px-6 py-10 bg-slate-100 sm:px-8 sm:py-12 lg:px-14 lg:py-16 mt-[60px]'>
      {/* Main Header */}
      <div className='text-left'>
        <SlideReveal direction='left' duration={0.7}>
          <h1
            className={`${clashDisplay.className} text-[32px] sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6`}>
            About <span className='text-[#F56E0F]'>Kulmi Digital</span>
          </h1>
        </SlideReveal>
        <SlideReveal direction='up' duration={0.7}>
          <p
            className={`${plusJakartaSans.className} text-gray-600 text-[18px] sm:text-[18px] lg:text-[20px] leading-relaxed`}>
            At Kulmi Digital, we understand the crucial role that a well-crafted
            online brand plays in today&apos;s digital landscape. With consumers
            spending more time online than ever before, having a strong digital
            presence is essential for businesses to succeed.
            <br />
            <br />
            That&apos;s where we come in. Our team of skilled professionals is
            dedicated to helping clients like you maximize their online impact
            through targeted ad campaigns, strategic planning, and creative
            solutions. From social media advertising to search engine marketing,
            we have the expertise and experience to drive results and growth for
            your brand.
          </p>
        </SlideReveal>
      </div>

      {/* Presence Information */}
      <div className='mt-10 sm:mt-12 flex flex-col lg:flex-row justify-between'>
        {/* Presence Information Section */}
        <div className='flex flex-col'>
          <div className='text-left mb-8 lg:mb-12'>
            <SlideReveal direction='up' duration={0.7}>
              <h2
                className={`${clashDisplay.className} text-[24px] sm:text-3xl font-semibold text-[#F56E0F] mb-4`}>
                Our presence:
              </h2>
            </SlideReveal>

            <div className='flex flex-col gap-8'>
              {/* Physical Locations */}
              <div>
                <h3
                  className={`${clashDisplay.className} text-[18px] sm:text-2xl font-bold text-black mb-2`}>
                  Physical:
                </h3>
                <SlideReveal direction='left' duration={0.7}>
                  {/* Mobile first, wrapping flags after 3 on mobile */}
                  <div className='grid grid-cols-3 gap-6 lg:flex lg:space-x-4'>
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
                          width={30} // Increased size for mobile
                          height={30}
                          className='rounded-full'
                        />
                        <span className='ml-2 text-[20px] sm:text-[18px]'>
                          {location.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </SlideReveal>
              </div>

              {/* Remote Locations */}
              <div>
                <h3
                  className={`${clashDisplay.className} text-[22px] sm:text-2xl font-bold text-black mb-2`}>
                  Remote:
                </h3>
                <SlideReveal direction='left' duration={0.7}>
                  <div className='grid grid-cols-2 gap-6 lg:flex lg:space-x-4'>
                    {[
                      { name: "Rest of Africa", flag: "/icons/africa.svg" },
                      { name: "Global", flag: "/icons/global.svg" },
                    ].map((location) => (
                      <div className='flex items-center' key={location.name}>
                        <Image
                          src={location.flag}
                          alt={location.name}
                          width={30} // Increased size for mobile
                          height={30}
                          className='rounded-full'
                        />
                        <span className='ml-2 text-[20px] sm:text-[18px]'>
                          {location.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </SlideReveal>

                {/* Learn More Link */}
                <SlideReveal direction='up' duration={0.9} delay={0.5}>
                  <div className='mt-4'>
                    <Link href='/about'>
                      <span
                        className={`${plusJakartaSans.className} inline-flex items-center border-black border-b-[1px] text-[16px] sm:text-[18px]`}>
                        Learn More
                        <Image
                          src='/icons/up.svg'
                          alt='Arrow Right'
                          width={28} // Increased size for mobile
                          height={28}
                          className='ml-2'
                        />
                      </span>
                    </Link>
                  </div>
                </SlideReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
