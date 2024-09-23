import React from 'react'
import localFont from "next/font/local";

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
    <section className='bg-slate-100 mt-[80px] py-[80px] px-12'>
      <h2
        className={`${clashDisplay.className} text-left text-5xl font-bold text-black`}>
        What we <span className='text-[#F56E0F] '>do?</span>
      </h2>

      <div className='flex flex-row justify-between mt-6'>
        <div className='w-1/2'>
          <h3
            className={`${clashDisplay.className} text-left text-3xl font-bold text-black`}>
            At <span className='text-[#F56E0F]'>Kulmi Digital</span> , we're not
            just another agency; we're the architects of digital{" "}
            <span className='text-[#F56E0F]'>success stories</span>.
          </h3>
        </div>
        <div className='w-1/2'>
          <p className='text-gray-600 text-lg'>
            Our journey is one of relentless innovation, fueled by a passion for
            transforming ideas into impactful online experiences. From
            pioneering strategies that redefine digital landscapes to crafting
            compelling narratives that captivate audiences, we thrive on pushing
            boundaries and rewriting the rules of engagement.
            <br />
            <br />
            With a commitment to excellence woven into every pixel, code, and
            campaign, we empower brands to conquer the digital realm and leave
            an indelible mark on the world. Welcome to the forefront of digital
            evolution. Welcome to Kulmi Digital.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMiddle2