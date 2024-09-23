"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import localFont from "next/font/local";
import TeamCard from "./TeamCard"; // Ensure this path is correct

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

interface TeamMember {
  name: string;
  title: string;
  imageSrc: string;
}

const AboutMiddle3: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const teamMembers: TeamMember[] = [
    {
      name: "Yussuf Omar Dakane",
      title: "Managing Director",
      imageSrc: "/yussuf.avif",
    },
    {
      name: "Abdilatif Bashir",
      title: "Tech Lead",
      imageSrc: "/abdilatif.avif",
    },
    {
      name: "Magdalene Wanja",
      title: "PR and Comms Lead",
      imageSrc: "/magdalene.avif",
    },
    {
      name: "Asimba Edward",
      title: "Brand & Creative Partner",
      imageSrc: "/asimba.avif",
    },
  ];

  const handlePrev = () => {
    setStartIndex(0);
  };

  const handleNext = () => {
    setStartIndex(2);
  };

  return (
    <section className='bg-white mt-[80px] py-[80px] px-12 flex flex-col md:flex-row justify-between'>
      <div className='w-full md:w-1/2 mb-8 md:mb-0'>
        <h2
          className={`${clashDisplay.className} text-left text-5xl font-bold text-black mb-4`}>
          Our <span className='text-[#F56E0F]'>Leadership</span>
        </h2>
        <p className='text-gray-600 mb-4'>
          We are led by seasoned digital, business and tech minds with years of
          experience. We also attract and retain the best in the industry, so
          you can have complete confidence in the team looking after your
          account.
        </p>
      </div>
      <div className='w-full md:w-1/2 relative'>
        <motion.div className='flex overflow-hidden'>
          <AnimatePresence initial={false}>
            {[0, 1, 2].map((offset) => {
              const index = startIndex + offset;
              if (index >= teamMembers.length) return null;
              return (
                <motion.div
                  key={teamMembers[index].name}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: offset === 2 ? 0.5 : 1,
                    x: 0,
                    width: offset === 2 ? "33.333%" : "50%",
                  }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className='px-2'>
                  <TeamCard {...teamMembers[index]} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        {startIndex === 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleNext}
            className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#F56E0F] text-white p-2 rounded-full z-10'>
            <FaChevronRight />
          </motion.button>
        )}
        {startIndex === 2 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handlePrev}
            className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#F56E0F] text-white p-2 rounded-full z-10'>
            <FaChevronLeft />
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default AboutMiddle3;
