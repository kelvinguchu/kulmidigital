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

const TopDeckFooter = () => {
  return (
    <section
      className={`${clashDisplay.className} flex flex-row justify-between items-center`}>
      <div className='flex flex-col space-y-[150px]'>
        {/* Start Section */}
        <div>
          <h1 className='text-5xl text-slate-500'>Start</h1>
          <h1 className='text-5xl text-black hover:text-[#F56E0F] '>
            <Link href='/contact'>
              <span className='inline-flex items-center'>
                Here
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
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
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className='text-2xl'>Follow Us</h2>
          <div className='flex space-x-4 mt-4'>
            {/* Facebook */}
            <Link href='https://web.facebook.com/KulmiDigital' target='_blank'>
              <Image
                src='/icons/facebook.svg'
                alt='Facebook'
                width={30}
                height={30}
              />
            </Link>

            {/* Instagram */}
            <Link
              href='https://www.instagram.com/kulmidigital/'
              target='_blank'>
              <Image
                src='/icons/instagram.svg'
                alt='Instagram'
                width={30}
                height={30}
              />
            </Link>

            {/* LinkedIn */}
            <Link
              href='https://www.linkedin.com/company/kulmi-digital-agency/'
              target='_blank'>
              <Image
                src='/icons/linkedin.svg'
                alt='LinkedIn'
                width={30}
                height={30}
              />
            </Link>

            {/* X (Twitter) */}
            <Link href='https://x.com/KulmiDigital' target='_blank'>
              <Image src='/icons/x.svg' alt='X' width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="bg-[url('/images/office_layout.avif')] bg-cover bg-center w-[600px] h-[400px] rounded-3xl"></div>
    </section>
  );
};

export default TopDeckFooter;
