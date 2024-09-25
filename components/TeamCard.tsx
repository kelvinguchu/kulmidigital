"use client";
import React from "react";
import Image from "next/image";
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

interface TeamCardProps {
  name: string;
  title: string;
  imageSrc: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title, imageSrc }) => {
  return (
    <div className='w-[240px] bg-white rounded-[20px] overflow-hidden border h-[390px]'>
      <div className='w-full aspect-[3/4]'>
        <Image
          src={imageSrc}
          alt={name}
          width={300}
          height={400}
          style={{
            padding: "10px",
            borderRadius: "10%",
           }}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='pl-4 pb-8 text-left'>
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
