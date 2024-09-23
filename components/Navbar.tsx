import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

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

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-white py-4 px-8 border-b-[1px] border-[#F56E0F] sticky top-0'>
      {/* Left Side: Logo and Brand */}
      <div className='flex items-center'>
        <Image
          src='/logo.svg'
          alt='Logo'
          width={26}
          height={26}
          className='mr-2'
        />
        <span
          className={`${clashDisplay.className} text-black text-[26px]`}
          style={{ fontWeight: 500 }}>
          Kulmi Digital
        </span>
      </div>

      {/* Right Side: Links */}
      <div className='space-x-6 font-jakartaSans text-gray-700'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/our-work'>Our Work</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
