"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
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

interface Testimonial {
  id: number;
  logo: string;
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    logo: "/banana.avif",
    quote:
      "We've been consistently impressed by Kulmi Digital's expertise in digital marketing. Their strategic approach to SEO, social media management, and email marketing has yielded remarkable results for our business. With their help, we've seen significant increases in website traffic, brand recognition, and customer engagement. Their professionalism and dedication to delivering exceptional results make them an invaluable partner for any company looking to elevate their digital presence.",
    author: "Mr. Garad Nor",
    position: "President and CEO",
    company: "BananaPay LLC",
  },
  {
    id: 2,
    logo: "/haier.avif",
    quote:
      "Kulmi Digital has been instrumental in our online success. Their tailored social media campaigns, SEO optimization, and email marketing strategies have exceeded our expectations. We've experienced noticeable growth in followers, website traffic, and conversions since partnering with them. Their team's creativity, attention to detail, and commitment to client success are truly commendable.",
    author: "Mr. Wang",
    position: "CEO",
    company: "Haier Kenya",
  },
  {
    id: 3,
    logo: "/bsh.avif",
    quote:
      "Working with Kulmi Digital has been a game-changer for our company. Their strategic campaign planning not only elevated our brand but also drove significant results.",
    author: "Mr. Bashir",
    position: "CEO",
    company: "BSH CARGO",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className={`relative max-w-6xl mx-auto p-6 ${clashDisplay.className} font-sans`}>
      <div className='flex items-center'>
        <button
          onClick={prevTestimonial}
          className='absolute left-0 z-10 text-orange-500 hover:text-orange-600 transition-colors'
          aria-label='Previous testimonial'>
          <ChevronLeft size={40} />
        </button>
        <div className='flex items-start space-x-8 bg-white rounded-lg p-8 w-full'>
          <div className='flex-shrink-0'>
            <Image
              src={currentTestimonial.logo}
              alt={`${currentTestimonial.company} logo`}
              width={200}
              height={200}
              className='w-48 h-48 rounded-full object-cover'
            />
          </div>
          <div className='flex-grow'>
            <blockquote className='text-lg text-gray-700 mb-4 font-clash-display'>
              "{currentTestimonial.quote}"
            </blockquote>
            <div className='flex items-center justify-between'>
              <div>
                <div className='flex'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-5 h-5 text-orange-400 fill-current'
                    />
                  ))}
                </div>
                <p className='font-semibold text-gray-900 font-clash-display'>
                  {currentTestimonial.author}
                </p>
                <p className='text-orange-500 font-clash-display'>
                  {currentTestimonial.position} at {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={nextTestimonial}
          className='absolute right-0 z-10 text-orange-500 hover:text-orange-600 transition-colors'
          aria-label='Next testimonial'>
          <ChevronRight size={40} />
        </button>
      </div>
      <div className='flex justify-center mt-4 space-x-2 bg-slate-500 w-[8%] rounded-2xl py-4 px-2 mx-auto'>
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full bg-white ${
              index === currentIndex ? "bg-gray-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
