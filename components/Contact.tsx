"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import emailjs from "@emailjs/browser";
import SlideReveal from "@/components/ui/slidereveal";

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

// Contact Option Component
interface ContactOptionProps {
  iconPath: string;
  text: string;
  buttonText: string;
  onClick: () => void;
}

const ContactOption: React.FC<ContactOptionProps> = ({
  iconPath,
  text,
  buttonText,
  onClick,
}) => (
  <div className='flex items-center border-l-2 w-full md:w-[80%] border-orange-500 pl-4 py-6 rounded-[15px]'>
    <div className='bg-orange-500 p-2 rounded-full mr-4'>
      <Image src={iconPath} alt={text} width={24} height={24} />
    </div>
    <span className='text-[18px] sm:text-[22px] flex-grow font-semibold'>
      {text}
    </span>
    <Button
      variant='secondary'
      className={`${plusJakartaSans.className} bg-[#272727] text-white text-[14px] py-[20px] md:py-[25px] px-[16px] md:px-[20px] hover:bg-[#F56E0F] rounded-[50px]`}
      onClick={onClick}>
      {buttonText}
    </Button>
  </div>
);

// Contact Component
const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    emailjs.init("-mNxF-9x0fBFz3_9J"); // Replace with your actual EmailJS public key
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("your_service_id", "your_template_id", form.current)
        .then(
          (result) => {
            console.log("Message Sent Successfully:", result.text);
          },
          (error) => {
            console.log("Error sending message:", error);
          }
        );
    }
  };

  return (
    <section
      className={`flex flex-col md:flex-row gap-8 px-6 sm:px-12 mt-10 sm:mt-16 bg-white ${clashDisplay2.className}`}>
      {/* Left Side: Contact Options */}
      <div className='w-full md:w-[40%]'>
        <SlideReveal direction='left' duration={0.7}>
          <h1 className='text-[28px] sm:text-[36px] md:text-[42px] font-bold mb-4'>
            Get in touch with our{" "}
            <span className='text-orange-500'>Experts</span>
          </h1>
        </SlideReveal>
        <p
          className={`mb-6 sm:mb-8 text-base sm:text-lg ${clashDisplay2.className}`}>
          We&apos;re glad you&apos;ve got this far! We&apos;re excited to meet
          you and hear about your potential project.
        </p>
        <div className='space-y-4 sm:space-y-6'>
          <SlideReveal direction='left' duration={0.7}>
            <ContactOption
              iconPath='/icons/callus.svg'
              text='Call Us'
              buttonText='Request Call Back'
              onClick={() => (window.location.href = "tel:+254725101001")}
            />
          </SlideReveal>
          <SlideReveal direction='left' duration={0.7}>
            <ContactOption
              iconPath='/icons/emailus.svg'
              text='Email Us'
              buttonText='Send Email'
              onClick={() =>
                (window.location.href = "mailto:sales@kulmi.digital")
              }
            />
          </SlideReveal>
          <SlideReveal direction='left' duration={0.7}>
            <ContactOption
              iconPath='/icons/visitus.svg'
              text='Visit Us'
              buttonText='Open Map'
              onClick={() =>
                (window.location.href =
                  "https://www.google.com/maps/place/TRV+Centre/@-1.2574872,36.8117552,15z/data=!4m6!3m5!1s0x182f17104f16e0b7:0xe61d00ec93dc2381!8m2!3d-1.2574872!4d36.8117552!16s%2Fg%2F11hcjzrvtk?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D")
              }
            />
          </SlideReveal>
        </div>
      </div>

      {/* Right Side: Form */}
      <Card className='w-full md:w-[55%] shadow-lg rounded-[20px] sm:rounded-[25px] p-[20px] sm:p-[30px] md:p-[40px] bg-[#f9f9f9] border border-[#dddddd]'>
        <SlideReveal direction='up' duration={0.7}>
          <h2
            className={`${clashDisplay.className} text-[22px] sm:text-[26px] mb-4 sm:mb-6`}>
            Drop us a <span className='text-orange-500'>message</span>
          </h2>
        </SlideReveal>
        <SlideReveal direction='up' duration={0.7}>
          <form
            ref={form}
            onSubmit={handleFormSubmit}
            className='space-y-4 sm:space-y-6'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Input
                type='text'
                name='user_name'
                placeholder='Name'
                className='bg-white border-transparent h-12 text-sm sm:text-base'
                required
              />
              <Input
                type='email'
                name='user_email'
                placeholder='Email'
                className='bg-white border-transparent h-12 text-sm sm:text-base'
                required
              />
            </div>
            <Textarea
              name='message'
              placeholder='Message'
              className='h-[180px] sm:h-[240px] bg-white border-transparent text-sm sm:text-base resize-none'
              required
            />
            <Button
              type='submit'
              className='w-full bg-orange-500 hover:bg-orange-600 text-white py-[15px] sm:py-[20px] text-sm sm:text-base rounded-[7px]'>
              Submit Your Detail
            </Button>
          </form>
        </SlideReveal>
      </Card>
    </section>
  );
};

export default Contact;
