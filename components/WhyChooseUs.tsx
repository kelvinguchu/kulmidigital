import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

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

const clashDisplay2 = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Regular.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const WhyChooseUs = () => {
  // Reusable component for H3 with icon
  const H3WithIcon = ({
    iconSrc,
    altText,
    text,
  }: {
    iconSrc: string;
    altText: string;
    text: string;
  }) => {
    return (
      <h3 className='flex items-center text-[18px] text-gray-600 mb-4'>
        {/* Image (Icon) */}
        <Image
          src={iconSrc}
          alt={altText}
          width={20}
          height={20}
          className='mr-2'
        />
        {/* Text */}
        {text}
      </h3>
    );
  };

  return (
    <section className='flex flex-row px-12 justify-between mt-[100px]'>
      <div className='w-[48%] p-6'>
        <div className={`${clashDisplay.className} text-left`}>
          <h1 className='text-[45px] mb-6'>So why us?</h1>
          <h3
            className={`${clashDisplay2.className} text-gray-600 text-[18px] mb-6`}>
            We founded Kulmi Digital with a focus on making brands succeed
            online. We not only work with big, national brands but also small to
            medium-sized businesses, and we love it!
          </h3>
        </div>

        <div className={`${clashDisplay.className}`}>
                  <h2 className='text-2xl mb-4 text-[#F56E0F]'>Our promise</h2>
                  <div className="border-b border-gray-200 w-[90%] mb-4"></div>
          <div className={`${clashDisplay2.className} space-y-3`}>
            {/* Reusable H3WithIcon Component Instances */}
            <H3WithIcon
              iconSrc='/icons/star.svg'
              altText='star icon'
              text='Your business will never be a second thought.'
            />
            <H3WithIcon
              iconSrc='/icons/star.svg'
              altText='star icon'
              text='Your brand will always stay relevant and competitive.'
            />
            <H3WithIcon
              iconSrc='/icons/star.svg'
              altText='star icon'
              text='You will better navigate the fast-paced digital world.'
            />
          </div>
        </div>
      </div>
      <div className="bg-[url('/choose.png')] bg-contain bg-center w-[48%] h-[500px] rounded-3xl"></div>
    </section>
  );
};

export default WhyChooseUs;
