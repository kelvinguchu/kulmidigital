"use client";
import React from 'react'
import SlideReveal from './ui/slidereveal';
import localFont from 'next/font/local';
import TeamCard from './TeamCard';

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

interface TeamMember {
  name: string;
  title: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Roy Wati",
    title: "Senior Software Engineer | Core Banking",
    imageSrc: "/images/roy.avif",
  },
  {
    name: "Eugene Chweya",
    title: "Digital Payments System Designer",
    imageSrc: "/images/eugene.avif",
  },
  {
    name: "Francis Modi",
    title: "Media Buying Lead",
    imageSrc: "/images/francis.avif",
  },
  {
    name: "Guchu Kelvin",
    title: "Software Engineer",
    imageSrc: "/images/kelvin.avif",
  },
];

const Team = () => {
  return (
    <section className=''>
      {/* Outer div with background image */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-[url('/images/team.webp')] bg-cover bg-center flex items-end">
        {/* Background overlay */}
        <div className='absolute inset-0 bg-black/50 z-0'></div>

        {/* Text container */}
        <div className='relative z-10 bg-white/10 backdrop-blur-md border rounded-[10px] sm:rounded-[20px] px-4 sm:px-6 md:px-8 py-4 sm:py-6 w-[90%] sm:w-[85%] mb-4 sm:mb-6 md:mb-8 mx-auto'>
          <SlideReveal direction='up' duration={0.7}>
            <h1
              className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold py-2 sm:py-4 md:py-6 text-left ${clashDisplay.className} leading-tight sm:leading-[1.2]`}>
              The experts behind <span className='text-[#FF8A00]'>Kulmi's</span>{" "}
              exceptional results!
            </h1>
            <p
              className={`${clashDisplay.className} text-gray-300 font-light text-sm sm:text-base md:text-lg mt-2 sm:mt-4 leading-relaxed`}>
              We're a small team with big impact. Experts in tech infused
              digital solutions including SEO, PPC, content marketing, email and
              social. Award-winning digital experts who passionately care about
              your brand.
            </p>
          </SlideReveal>
        </div>
      </div>

      {/* Team members section */}
      <div className='w-full mt-8 px-4 sm:px-6 md:px-8 lg:px-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8'>
          {teamMembers.map((member) => (
            <div key={member.name} className='flex justify-center'>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team