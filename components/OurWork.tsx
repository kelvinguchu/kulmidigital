import React from "react";
import localFont from "next/font/local";

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
      <div className="relative w-full h-[50vh] bg-[url('/images/workbanner.webp')] bg-cover bg-center flex items-end">
        {/* Background overlay */}
        <div className='absolute inset-0 bg-black/50 z-0'></div>

        {/* Text container */}
        <div className='relative z-10 bg-white/10 backdrop-blur-xl border rounded-[20px] px-8 py-4 w-[70%] mb-8 ml-8'>
          <h1
            className={`text-white text-5xl font-bold py-8 px-4 text-left ${clashDisplay.className}`}>
            Explore the impact of our work
          </h1>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
