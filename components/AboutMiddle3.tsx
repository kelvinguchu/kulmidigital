"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import localFont from "next/font/local";
import TeamCard from "./TeamCard";
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

interface TeamMember {
  name: string;
  title: string;
  imageSrc: string;
}

const AboutMiddle3: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const teamMembers: TeamMember[] = [
    {
      name: "Yussuf Omar Dakane",
      title: "Managing Director",
      imageSrc: "/images/yussuf.avif",
    },
    {
      name: "Abdilatif Bashir",
      title: "Tech Lead",
      imageSrc: "/images/abdilatif.avif",
    },
    {
      name: "Magdalene Wanja",
      title: "PR and Comms Lead",
      imageSrc: "/images/magdalene.avif",
    },
    {
      name: "Asimba Edward",
      title: "Brand & Creative Partner",
      imageSrc: "/images/asimba.avif",
    },
  ];

  const handleNext = () => {
    if (!isAnimating && startIndex < teamMembers.length - (isMobile ? 1 : 3)) {
      setIsAnimating(true);
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isAnimating && startIndex > 0) {
      setIsAnimating(true);
      setStartIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [startIndex]);

  return (
    <section className='bg-white mt-[80px] py-[80px] px-6 md:px-12'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
        <div className='w-full md:w-[30%] mb-8 md:mb-0'>
          <SlideReveal direction='left' duration={0.7}>
            <div className='-mt-[100px]'>
              <h2
                className={`${clashDisplay.className} text-left text-5xl font-bold text-black mb-4`}>
                Our <span className='text-[#F56E0F]'>leadership</span>
              </h2>
              <p
                className={`${plusJakartaSans.className} text-gray-600 mb-6 text-[18px]`}>
                We are led by seasoned digital, business and tech minds with
                years of experience.
                <br />
                <br />
                We also attract and retain the best in the industry, so you can
                have complete confidence in the team looking after your account.
              </p>
            </div>
          </SlideReveal>

          <SlideReveal direction='up' duration={0.7}>
            <div>
              <button
                className={`${plusJakartaSans.className} inline-flex items-center px-6 py-4 border border-black text-black rounded-full hover:bg-white hover:text-[#F56E0F] hover:border-[#F56E0F] transition-colors duration-200`}>
                See full team
                <svg
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M5 12h14M12 5l7 7-7 7' />
                </svg>
              </button>
            </div>
          </SlideReveal>
        </div>
        <div className='w-full md:w-[60%] relative'>
          <SlideReveal direction='right' duration={0.7}>
            <div>
              <div
                className='relative overflow-hidden'
                style={{ height: "450px" }}>
                <AnimatePresence initial={false} custom={startIndex}>
                  {teamMembers
                    .slice(startIndex, startIndex + (isMobile ? 2 : 3))
                    .map((member, index) => (
                      <motion.div
                        key={member.name}
                        custom={index}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className='absolute top-0 h-full'
                        style={{
                          left: isMobile
                            ? index === 0
                              ? "0"
                              : "65%"
                            : `${index * 33.33}%`,
                          width: isMobile
                            ? "70%"
                            : index === 2
                            ? "32%"
                            : "33.33%",
                        }}>
                        <div className='h-full px-2'>
                          <TeamCard {...member} />
                          {((isMobile && index === 1) ||
                            (!isMobile && index === 2)) &&
                            startIndex <
                              teamMembers.length - (isMobile ? 1 : 3) && (
                              <div className='absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent to-white' />
                            )}
                          {!isMobile && index === 0 && startIndex > 0 && (
                            <div className='absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-l from-transparent to-white' />
                          )}
                        </div>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
              {startIndex > 0 && (
                <button
                  onClick={handlePrev}
                  disabled={isAnimating}
                  className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#F56E0F] text-white p-2 rounded-full z-10 disabled:opacity-50'>
                  <FaChevronLeft />
                </button>
              )}
              {startIndex < teamMembers.length - (isMobile ? 1 : 3) && (
                <button
                  onClick={handleNext}
                  disabled={isAnimating}
                  className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#F56E0F] text-white p-2 rounded-full z-10 disabled:opacity-50'>
                  <FaChevronRight />
                </button>
              )}
            </div>
          </SlideReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutMiddle3;
