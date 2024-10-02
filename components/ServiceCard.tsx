// components/ServiceCard.tsx
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import SlideReveal from "@/components/ui/slidereveal";

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

interface ServiceCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <SlideReveal direction='up' duration={0.7}>
      <div className='flex flex-col text-left p-4 sm:p-6 space-y-6'>
        {" "}
        {/* Increased spacing between elements */}
        {/* Icon */}
        <div className='text-[#F56E0F] mb-4'>
          <Image
            src={iconSrc}
            alt={title}
            width={60} // Increased size
            height={60}
            className='sm:w-70 sm:h-70'
          />
        </div>
        {/* Title */}
        <h3
          className={`${clashDisplay.className} text-[24px] sm:text-[26px] font-bold text-black mb-2`} // Increased font size
        >
          {title}
        </h3>
        {/* Description */}
        <p
          className={`${plusJakartaSans.className} text-gray-600 text-[16px] sm:text-[18px] leading-relaxed`} // Added leading-relaxed for better line spacing
        >
          {description}
        </p>
      </div>
    </SlideReveal>
  );
};

export default ServiceCard;
