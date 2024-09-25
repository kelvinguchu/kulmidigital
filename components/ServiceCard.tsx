// components/ServiceCard.tsx
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";


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

// Reusable ServiceCard Component that only uses custom SVG icons
interface ServiceCardProps {
  iconSrc: string; // Path to the SVG icon
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className='flex flex-col text-left p-4 space-y-4'>
      {/* Render SVG Icon from public/icons folder */}
      <div className='text-[#F56E0F] mb-2'>
        <Image
          src={iconSrc}
          alt={title}
          width={50}
          height={50}
          style={{ color: "#F56E0F" }}
        />
      </div>

      {/* Title */}
      <h3
        className={`${clashDisplay.className} text-[22px] font-bold text-black `}>
        {title}
      </h3>

      {/* Description */}
      <p className={`${plusJakartaSans.className} text-gray-600 text-[16px]`}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
