import React from "react";
import localFont from "next/font/local";
import SlideReveal from "@/components/ui/slidereveal";

const clashDisplay = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const clashDisplay_light = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Light.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const AboutMiddle = () => {
  return (
    <section className='flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10 justify-between gap-6 lg:gap-10 py-10'>
      {/* First Image */}
      <SlideReveal direction='left' duration={0.7}>
        <div className="bg-[url('/images/billboard.avif')] bg-cover bg-center w-full lg:w-[500px] h-[350px] sm:h-[450px] lg:h-[550px] rounded-3xl"></div>
      </SlideReveal>

      <div className='flex flex-col w-full lg:w-[60%] gap-6'>
        {/* Second Image */}
        <SlideReveal direction='up' duration={0.7}>
          <div className="bg-[url('/images/insta_one.jpg')] bg-cover bg-center w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-3xl"></div>
        </SlideReveal>

        {/* Statistics Section */}
        <SlideReveal direction='up' duration={0.7}>
          <div
            className={`${clashDisplay_light.className} flex flex-col sm:flex-row justify-between gap-6 mt-6`}>
            {/* Card 1 */}
            <div className='flex flex-col items-center bg-slate-50 border border-slate-400 py-5 px-6 sm:px-8 rounded-3xl shadow-lg'>
              <h3 className='text-4xl sm:text-5xl font-bold text-[#F56E0F] mb-2'>
                20+
              </h3>
              <p className='text-gray-600 text-base sm:text-lg'>
                Digital Specialists
              </p>
            </div>

            {/* Card 2 */}
            <div className='flex flex-col items-center bg-slate-50 border border-slate-400 py-5 px-6 sm:px-8 rounded-3xl shadow-lg'>
              <h3 className='text-4xl sm:text-5xl font-bold text-[#F56E0F] mb-2'>
                1000+
              </h3>
              <p className='text-gray-600 text-base sm:text-lg'>
                Complete Projects
              </p>
            </div>

            {/* Card 3 */}
            <div className='flex flex-col items-center bg-slate-50 border border-slate-400 py-5 px-6 sm:px-8 rounded-3xl shadow-lg'>
              <h3 className='text-4xl sm:text-5xl font-bold text-[#F56E0F] mb-2'>
                5+
              </h3>
              <p className='text-gray-600 text-base sm:text-lg'>
                Years in Service
              </p>
            </div>
          </div>
        </SlideReveal>
      </div>
    </section>
  );
};

export default AboutMiddle;
