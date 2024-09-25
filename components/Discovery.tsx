import React from "react";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

// Google Font: Plus Jakarta Sans
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

const Discovery = () => {
  // Define the MarketService component inside Discovery
  const MarketService = ({
    iconSrc,
    title,
    description,
  }: {
    iconSrc: string;
    title: string;
    description: string;
  }) => {
    return (
      <div className='flex flex-row items-start mb-6'>
        {/* Icon */}
        <Image
          src={iconSrc}
          alt={title}
          width={40}
          height={40}
          className='mr-4'
        />

        {/* Text Content */}
        <div>
          <h3 className={`${clashDisplay.className} text-[24px] font-semibold mb-2`}>
            {title}
          </h3>
          <p
            className={`${plusJakartaSans.className} text-[16px] text-gray-600`}>
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className='flex flex-row justify-between px-12 mt-[100px]'>
      <div className="bg-[url('/choose2.png')] bg-contain bg-center w-[48%] h-[500px] rounded-3xl space-x-[50px]"></div>
      <div className='w-[48%] p-6'>
        <div className={`${clashDisplay.className} text-left -mt-8 `}>
          <h1 className='text-[45px] text-[#F56E0F]'>
            Discovery <span className='text-black'>through</span> Digital
          </h1>
          <h3
            className={`${plusJakartaSans.className} text-gray-600 text-[18px] mb-6`}>
            Digital marketing is integral to running a sustainable business.
            From <b>planning your campaigns</b>, to optimizing your{" "}
            <b>digital strategy </b> and managing your social media, we{" "}
            <b>maximize your return on investment</b> so you can meet your goals
            with our digital marketing services.
          </h3>
        </div>

        <div className='border-b border-gray-200 w-[90%] my-14'></div>

        {/* MarketService component used here */}
        <div className='px-4 '>
          <MarketService
            iconSrc='/icons/strategy.svg'
            title='STRATEGY'
            description='Each campaign has its own set objectives. In this phase we look at what we are trying to achieve and match that with the right technology and creative means in which we will achieve that.'
          />
          <MarketService
            iconSrc='/icons/line-graph.svg'
            title='CAMPAIGNS'
            description='Once our objectives are clear, we bring your campaign to life. Working with a skilled team of designers, developers, and copywriters, we produce creative solutions that work for you.'
          />
          <MarketService
            iconSrc='/icons/report.svg'
            title='REPORTING'
            description='We continually monitor and analyze your digital marketing campaigns, providing reports and insights to help you continually perform and improve your digital reach with our digital marketing services.'
          />
        </div>
      </div>
    </section>
  );
};

export default Discovery;
