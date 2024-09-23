"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

// Import Clash Display font
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

// Define the type for the props
interface TeamCardProps {
  name: string;
  title: string;
  imageSrc: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title, imageSrc }) => {
  return (
    <div className='max-w-[250px] mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-300'>
      {/* Image with Border Radius */}
      <div className='w-full'>
        <Image
          src={imageSrc}
          alt={name}
          width={200}
          height={200}
          style={{
            borderRadius: "20%",
            padding: "10px",
          }}
          className='w-full h-auto object-cover'
        />
      </div>

      {/* Name and Title */} 
      <div className='p-4 text-left'>
        <h2 className={`${clashDisplay.className} text-xl font-bold`}>
          {name}
        </h2>
        <p className={`${clashDisplay.className} text-md text-[#F56E0F]`}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
