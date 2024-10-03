import React from "react";
import localFont from "next/font/local";
import SlideReveal from "@/components/ui/slidereveal";

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

const AboutMiddle2 = () => {
  return (
    <section className='bg-slate-100 py-10 sm:py-16 px-4 sm:px-8 lg:px-12 mt-6 lg:mt-[80px]'>
      {/* Title */}
      <SlideReveal direction='left' duration={0.7}>
        <h2
          className={`${clashDisplay.className} text-left text-[28px] sm:text-[36px] lg:text-5xl font-bold text-black`}>
          What we <span className='text-[#F56E0F]'>do?</span>
        </h2>
      </SlideReveal>

      {/* Content Section */}
      <SlideReveal direction='up' duration={0.7}>
        <div className='flex flex-col lg:flex-row justify-between gap-6 mt-6'>
          {/* Left Column */}
          <div className='lg:w-1/2'>
            <h3
              className={`${clashDisplay.className} text-left text-[22px] sm:text-3xl lg:text-4xl font-bold text-black`}>
              At <span className='text-[#F56E0F]'>Kulmi Digital</span>, we
              aren&apos;t just another agency; we&apos;re the architects of
              digital <span className='text-[#F56E0F]'>success stories</span>.
            </h3>
          </div>

          {/* Right Column */}
          <div className='lg:w-1/2'>
            <p className='text-gray-600 text-[16px] sm:text-lg leading-relaxed'>
              Our journey is one of relentless innovation, fueled by a passion
              for transforming ideas into impactful online experiences. From
              pioneering strategies that redefine digital landscapes to crafting
              compelling narratives that captivate audiences, we thrive on
              pushing boundaries and rewriting the rules of engagement.
              <br />
              <br />
              With a commitment to excellence woven into every pixel, code, and
              campaign, we empower brands to conquer the digital realm and leave
              an indelible mark on the world. Welcome to the forefront of
              digital evolution. Welcome to Kulmi Digital.
            </p>
          </div>
        </div>
      </SlideReveal>
    </section>
  );
};

export default AboutMiddle2;
