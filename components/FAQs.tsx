import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Load custom fonts
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

const clashDisplay2 = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Regular.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const FAQs = () => {
  return (
    <section
      className={`${clashDisplay.className} flex flex-col pt-[80px] px-12`}>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl text-black'>Questions People Ask Us</h1>
        <h4
          className={`${clashDisplay2.className} text-[18px] mt-4 text-gray-800 text-center w-[60%]`}>
          We know your time is precious, so we’ve collected answers to some key
          questions you may have about working with us.
        </h4>
      </div>
      <div className='mt-12 flex justify-between'>
        {/* Accordion FAQ section */}
        <div className='w-[70%]'>
          <Accordion type='multiple' className='space-y-4'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-[#F56E0F] text-[18px] font-medium'>
                How long has Kulmi Digital been in business?
              </AccordionTrigger>
              <AccordionContent className='text-gray-700 text-[16px]'>
                As an agency, we’ve been delivering our expert digital marketing
                service since 2018.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger className='text-[#F56E0F] text-[18px] font-medium'>
                What services does Kulmi Digital offer?
              </AccordionTrigger>
              <AccordionContent className='text-gray-700 text-[16px]'>
                We’re an integrated digital marketing agency. Our services
                include SEO, PPC & both Organic + Paid Social Media, Content
                Marketing, Digital Strategy, and Data & Analytics. We offer
                flexible digital marketing packages for every business need.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger className='text-[#F56E0F] text-[18px] font-medium'>
                My business is located outside Kulmi's locale. Does that matter?
              </AccordionTrigger>
              <AccordionContent className='text-gray-700 text-[16px]'>
                Where your business is located doesn’t really matter when it
                comes to the work that we do. In fact, we work with clients
                across Africa and globally. We arrange regular calls and travel
                for face-to-face meetings as needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger className='text-[#F56E0F] text-[18px] font-medium'>
                How do I get started with Kulmi Digital?
              </AccordionTrigger>
              <AccordionContent className='text-gray-700 text-[16px]'>
                Getting started is simple. Get in touch via email, phone, or by
                filling out a form on our website. We'll then discuss your
                requirements and help you with a custom solution tailored to
                your needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Contact section */}
        <div className='flex flex-col space-y-4 bg-[#dddddd] py-8 rounded-[20px] w-[20%]'>
          <h1 className='text-3xl text-black text-center'>
            More <br /> Questions? <br /> Reach out to <br /> us
          </h1>
          <button className='text-[18px] text-center text-white bg-[#F56E0F] mx-auto w-[70%] p-4 rounded-[40px]'>
            Get Started
            <Image
              src="/up.png"
              alt='Download'
              width={24}
              height={24}
              className='inline-block ml-2 transition-transform duration-300'
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
