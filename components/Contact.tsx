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
  <div className='flex items-center border-l-2 w-[80%] border-orange-500 pl-4 py-6 rounded-[15px]'>
    <div className='bg-orange-500 p-2 rounded-full mr-4'>
      <Image src={iconPath} alt={text} width={24} height={24} />
    </div>
    <span className='text-[22px] flex-grow font-semibold'>{text}</span>
    <Button
      variant='secondary'
      className={`${plusJakartaSans.className} bg-[#272727] text-white text-[14px] py-[25px] px-[20px] hover:bg-[#F56E0F] rounded-[50px]`}
      onClick={onClick}>
      {buttonText}
    </Button>
  </div>
);

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
            // Add user feedback here (e.g., success message)
          },
          (error) => {
            console.log("Error sending message:", error);
            // Add user feedback here (e.g., error message)
          }
        );
    }
  };

  return (
    <section
      className={`flex flex-col justify-between md:flex-row gap-8 px-12 mt-16 bg-white ${clashDisplay2.className}`}>
      <div className='w-[40%]'>
        <h1 className='text-[42px] font-bold mb-4'>
          Get in touch with our <span className='text-orange-500'>Experts</span>
        </h1>
        <p className={`mb-8 text-lg ${clashDisplay2.className}`}>
          We're glad you've got this far! We're excited to meet you and hear
          about your potential project.
        </p>
        <div className='space-y-6'>
          <ContactOption
            iconPath='/icons/callus.svg'
            text='Call Us'
            buttonText='Request Call Back'
            onClick={() => console.log("Request Call Back")}
          />
          <ContactOption
            iconPath='/icons/emailus.svg'
            text='Email Us'
            buttonText='Send Email'
            onClick={() => console.log("Send Email")}
          />
          <ContactOption
            iconPath='/icons/visitus.svg'
            text='Visit Us'
            buttonText='Open Map'
            onClick={() => console.log("Open Map")}
          />
        </div>
      </div>
      <Card className='flex flex-col w-[55%] shadow-lg rounded-[25px] p-[40px] overflow-hidden bg-[#f9f9f9] border border-[#dddddd]'>
        <h2 className={`${clashDisplay.className} text-[26px] mb-6`}>
          Drop us a <span className='text-orange-500'>message</span>
        </h2>
        <form ref={form} onSubmit={handleFormSubmit} className='space-y-6'>
          <div className='flex gap-4'>
            <Input
              type='text'
              name='user_name'
              placeholder='Name'
              className='bg-white border-transparent h-12 text-base'
              required
            />
            <Input
              type='email'
              name='user_email'
              placeholder='Email'
              className='bg-white border-transparent h-12 text-base'
              required
            />
          </div>
          <Textarea
            name='message'
            placeholder='Message'
            className='h-[240px] bg-white border-transparent text-base resize-none'
            required
          />
          <Button
            type='submit'
            className='w-full bg-orange-500 hover:bg-orange-600 text-white py-[25px] text-base rounded-[7px]'>
            Submit Your Detail
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default Contact;
