import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const AboutBottom = () => {
  return (
    <section
      className={`${clashDisplay.className} flex flex-row justify-between items-center px-12`}>
      <div className='flex flex-col space-y-[150px]'>
        <div>
          <h1 className='text-5xl text-slate-500'>Start</h1>
          <h1 className='text-5xl text-black'>
            <Link href='/contact'>
              Here{" "}
              <span>
                <Image src='/up.png' alt='up' width={20} height={20} style={{color: "#F56E0F"}}/>{" "}
              </span>
            </Link>
          </h1>
        </div>
        <div>
          <h2>Follow Us</h2>
        </div>
      </div>
      <div className="bg-[url('/office_layout.avif')] bg-cover bg-center w-[600px] h-[400px] rounded-3xl"></div>
    </section>
  );
};

export default AboutBottom;
