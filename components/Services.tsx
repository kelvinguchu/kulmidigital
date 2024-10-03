// pages/Services.tsx
import React from "react";
import ServiceCard from "../components/ServiceCard";
import localFont from "next/font/local";
import SlideReveal from "@/components/ui/slidereveal";
import { services } from "@/data/servicesData"; // Update the import statement

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

const Services: React.FC = () => {
  return (
    <section className='bg-white py-8 px-4 sm:py-16 sm:px-6 md:px-12'>
      <SlideReveal direction='left' duration={0.7}>
        <h1
          className={`${clashDisplay.className} text-[28px] md:w-[60%] sm:text-[36px] md:text-[45px] font-bold text-left text-black pl-2 sm:pl-4 py-8 sm:py-12`}>
          Boost Your Business with our Strategic{" "}
          <span className='text-[#F56E0F]'>Brand</span> &{" "}
          <span className='text-[#F56E0F]'>Digital</span> Services
        </h1>
      </SlideReveal>
      <div className='max-w-7xl mx-auto'>
        {/* Grid is default for mobile */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              iconSrc={service.iconSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
