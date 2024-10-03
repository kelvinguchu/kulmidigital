import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SlideReveal from "@/components/ui/slidereveal";

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

const TopDeckFooter = () => {
  return (
    <section
      className={`${clashDisplay.className} flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 px-0 sm:px-6 lg:px-12 py-2`}>
      {/* Left Section: Start and Follow Us */}
      <div className='flex flex-col space-y-8 lg:space-y-[150px] w-full lg:w-auto'>
        {/* Start Section */}
        <div>
          <SlideReveal direction='left' duration={0.7}>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-slate-500'>
              Start
            </h1>
          </SlideReveal>
          <SlideReveal direction='left' duration={0.9}>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-black hover:text-[#F56E0F]'>
              <Link href='/contact'>
                <span className='inline-flex items-center'>
                  Here
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='30'
                    viewBox='0 0 48 48'
                    fill='none'
                    className='ml-2 transition-colors duration-300'
                    stroke='currentColor'
                    strokeWidth='4'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path d='M16 32L33 15' />
                    <path d='M15 15H33V33' />
                  </svg>
                </span>
              </Link>
            </h1>
          </SlideReveal>
        </div>

        {/* Follow Us Section */}
        <SlideReveal direction='up' duration={0.7}>
          <div>
            <h2 className='text-xl sm:text-2xl'>Follow Us</h2>
            <div className='flex space-x-4 mt-4'>
              {/* Facebook */}
              <Link
                href='https://web.facebook.com/KulmiDigital'
                target='_blank'>
                <Image
                  src='/icons/facebook.svg'
                  alt='Facebook'
                  width={24}
                  height={24}
                  className='sm:w-[30px] sm:h-[30px]'
                />
              </Link>

              {/* Instagram */}
              <Link
                href='https://www.instagram.com/kulmidigital/'
                target='_blank'>
                <Image
                  src='/icons/instagram.svg'
                  alt='Instagram'
                  width={24}
                  height={24}
                  className='sm:w-[30px] sm:h-[30px]'
                />
              </Link>

              {/* LinkedIn */}
              <Link
                href='https://www.linkedin.com/company/kulmi-digital-agency/'
                target='_blank'>
                <Image
                  src='/icons/linkedin.svg'
                  alt='LinkedIn'
                  width={24}
                  height={24}
                  className='sm:w-[30px] sm:h-[30px]'
                />
              </Link>

              {/* X (Twitter) */}
              <Link href='https://x.com/KulmiDigital' target='_blank'>
                <Image
                  src='/icons/x.svg'
                  alt='X'
                  width={24}
                  height={24}
                  className='sm:w-[30px] sm:h-[30px]'
                />
              </Link>
            </div>
          </div>
        </SlideReveal>
      </div>

      {/* Right Section: Image */}
      <SlideReveal direction='right' duration={0.7}>
        <div className="bg-[url('/images/office_layout.avif')] bg-cover bg-center w-full h-[400px] sm:h-[300px] lg:w-[600px] lg:h-[400px] rounded-3xl"></div>
      </SlideReveal>
    </section>
  );
};

export default TopDeckFooter;
