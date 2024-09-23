import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

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
    <section className='flex flex-row px-10 justify-around'>
      <div className="bg-[url('/billboard.avif')] bg-cover bg-center-left w-[500px] h-[550px] rounded-3xl"></div>
      <div>
        <div className="bg-[url('/insta_one.jpg')] bg-cover bg-center-bottom w-[700px] h-[400px] rounded-3xl"></div>

        <div
          className={`${clashDisplay_light.className} flex flex-row justify-between mt-6`}>
          <div className='flex flex-col items-center bg-slate-50 border border-slate-400 py-5  px-8 rounded-3xl shadow-lg'>
            <h3 className='text-5xl font-bold text-[#F56E0F] mb-2'>20+</h3>
            <p className='text-gray-600 text-lg'>Digital Specialists</p>
          </div>
          <div className='flex flex-col items-center bg-slate-50 border border-slate-400 py-5  px-8 rounded-3xl shadow-lg'>
            <h3 className='text-5xl font-bold text-[#F56E0F] mb-2'>1000+ </h3>
            <p className='text-gray-600 text-lg'>Complete Projects</p>
          </div>
          <div className='flex flex-col items-center bg-slate-50 border border-slate-400 py-5  px-8 rounded-3xl shadow-lg'>
            <h3 className='text-5xl font-bold text-[#F56E0F] mb-2'>5+</h3>
            <p className='text-gray-600 text-lg'>Years in Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMiddle;
