"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import localFont from "next/font/local";
import TestimonialCarousel from "./TestimonialCarousel";

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

const logos = [
  "tawakal.png",
  "energizer.png",
  "lilacare.png",
  "haier.png",
  "omarmp.png",
  "lg.png",
  "bshcargo.png",
  "sombank.png",
  "banana.png",
  "tcl.png",
  "kcb.png",
  "eyelink.png",
];

const HomeTrust: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);

  useEffect(() => {
    if (innerRef.current) {
      setWidth(innerRef.current.scrollWidth - innerRef.current.offsetWidth);
    }
  }, []);

  useAnimationFrame(() => {
    if (carouselRef.current && width > 0) {
      xRef.current -= 1.25;
      if (xRef.current <= -width) {
        xRef.current = 0;
      }
      carouselRef.current.style.transform = `translateX(${xRef.current}px)`;
    }
  });

  return (
    <section className='flex flex-col  bg-slate-50 mt-[80px] pt-[80px] pb-[80px]'>
      <h1
        className={`${clashDisplay.className} text-5xl px-12 font-bold text-black mb-4 w-full md:w-[60%]`}>
        Trusted by <span className='text-[#F56E0F]'>500+</span> Continental &
        Global Companies
      </h1>
      <div className='overflow-hidden relative px-12' ref={innerRef}>
        <motion.div
          ref={carouselRef}
          className='flex'
          style={{ gap: "1.5rem" }}>
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className='flex items-center justify-center bg-center bg-no-repeat'
              style={{
                minWidth: "190px",
                minHeight: "120px",
                backgroundImage: `url(/logos/${logo})`,
                backgroundSize: "contain",
              }}></div>
          ))}
        </motion.div>
        <div className='pointer-events-none px-12 absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#f8fafc]'></div>
        <div className='pointer-events-none px-12 absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#f8fafc]'></div>
      </div>
      <div>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default HomeTrust;
