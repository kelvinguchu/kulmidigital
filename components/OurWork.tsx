import React from "react";
import localFont from "next/font/local";
import Projects from "./Projects";
import SlideReveal from "@/components/ui/slidereveal";

// Import Clash Display Font
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

const OurWork = () => {
  return (
    <section>
      {/* Outer div with background image */}
      <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] bg-[url('/images/workbanner.webp')] bg-cover bg-center flex items-end">
        {/* Background overlay */}
        <div className='absolute inset-0 bg-black/50 z-0'></div>

        {/* Text container */}
        <div className='relative z-10 bg-white/10 backdrop-blur-xl border rounded-[10px] sm:rounded-[20px] px-4 sm:px-8 py-2 sm:py-4 w-[85%] sm:w-[70%] mb-4 sm:mb-8 ml-4 sm:ml-8'>
          <SlideReveal direction='up' duration={0.7}>
            <h1
              className={`text-white text-3xl sm:text-4xl md:text-5xl font-bold py-4 sm:py-6 px-2 sm:px-4 text-left ${clashDisplay.className}`}>
              Explore the impact of our work
            </h1>
          </SlideReveal>
        </div>
      </div>
      <Projects />
    </section>
  );
};

export default OurWork;
