"use client";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Import ShadCN Sheet components
import { Menu } from "lucide-react"; // Only import the hamburger icon

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

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center z-50 bg-white md:pt-6 md:pb-[22px] md:px-[76px] px-4 py-4 border-b-[1px] border-[#F56E0F] sticky top-0'>
      {/* Left Side: Logo and Brand */}
      <div className='flex items-center'>
        <Image
          src='/logo.svg'
          alt='Logo'
          width={35}
          height={35}
          className='mr-2 w-[35px] h-[35px]'
        />
        <span
          className={`${clashDisplay.className} text-black text-[26px] sm:text-[30px] md:text-[32px] lg:text-[26px]`}
          style={{ fontWeight: 500 }}>
          Kulmi Digital
        </span>
      </div>

      {/* Right Side: Desktop Links */}
      <div
        className={`${plusJakartaSans.className} hidden md:flex font-bold space-x-6 text-[14px] text-gray-700`}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/our-work'>Our Work</Link>
        <Link href='/contact'>Contact</Link>
      </div>

      {/* Hamburger Menu: Mobile View */}
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Menu className='w-8 h-8' />
            </button>
          </SheetTrigger>
          <SheetContent side='top' className='bg-white px-6 py-4'>
            {/* Logo and Flags */}
            <div className='flex justify-between items-center mb-6'>
              {/* Left Side: Logo */}
              <div className='flex items-center'>
                <Image src='/logo.svg' alt='Logo' width={50} height={50} />
              </div>

              {/* Flags */}
              <div className='flex space-x-6 mr-12'>
                <Image
                  src='/flags/kenya.png'
                  alt='Kenya'
                  width={50}
                  height={50}
                />
                <Image
                  src='/flags/somalia.png'
                  alt='Somalia'
                  width={50}
                  height={50}
                />
                <Image
                  src='/flags/ethiopia.png'
                  alt='Ethiopia'
                  width={50}
                  height={50}
                />
                <Image
                  src='/flags/tanzania.png'
                  alt='Tanzania'
                  width={50}
                  height={50}
                />
                <Image
                  src='/flags/uganda.png'
                  alt='Uganda'
                  width={50}
                  height={50}
                />
              </div>
            </div>

            {/* Mobile Links */}
            <div className='flex flex-col items-start space-y-4'>
              <Link href='/' className='text-lg font-bold'>
                Home
              </Link>
              <Link href='/about' className='text-lg font-bold'>
                About
              </Link>
              <Link href='/our-work' className='text-lg font-bold'>
                Our Work
              </Link>
              <Link href='/contact' className='text-lg font-bold'>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
