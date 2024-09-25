// pages/Services.tsx
import React from "react";
import ServiceCard from "../components/ServiceCard";
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

// Services data with only SVG paths from public folder
const services = [
  {
    iconSrc: "/icons/flowchart.svg", // Custom SVG from public folder
    title: "Digital PR & Content",
    description:
      "We streamline your business processes with innovative implementation of digital strategies. Stay ahead with automation and data-driven insights.",
  },
  {
    iconSrc: "/icons/rocket.svg", // Custom SVG from public folder
    title: "Branding and Brand Development",
    description:
      "We help you maintain a unified voice across channels, reinforce your brand identity and resonate with your audience with intelligent creative expression.",
  },
  {
    iconSrc: "/icons/flag.svg", // Custom SVG from public folder
    title: "Social Media Management & Advertising",
    description:
      "We create and manage targeted advertising campaigns on popular social media platforms such as Facebook, Instagram, Twitter, and LinkedIn.",
  },
  {
    iconSrc: "/icons/line-up.svg", // Custom SVG from public folder
    title: "Search Engine Marketing",
    description:
      "Our SEM services include pay-per-click (PPC) advertising on search engines like Google and Bing, as well as search engine optimization.",
  },
  {
    iconSrc: "/icons/mail-open.svg", // Custom SVG from public folder
    title: "Email Marketing",
    description:
      "Our email marketing services involve crafting compelling email campaigns to nurture leads and engage existing customers.",
  },
  {
    iconSrc: "/icons/certificate.svg", // Custom SVG from public folder
    title: "Display Advertising",
    description:
      "We design and implement visually appealing display ad campaigns across various online platforms and websites.",
  },
  {
    iconSrc: "/icons/video-play.svg", // Custom SVG from public folder
    title: "Digital Content Creation",
    description:
      "We produce high quality media content that matches your distinct brand style and is customized to your business objectives. at scale. ",
  },
];

const Services: React.FC = () => {
  return (
    <section className='bg-white py-16 px-12'>
      <h1
        className={`${clashDisplay.className} w-1/2 text-4xl font-bold text-left text-black pl-4 py-12`}>
        Boost Your Business with our Strategic{" "}
        <span className='text-[#F56E0F]'>Brand</span> &{" "}
        <span className='text-[#F56E0F]'>Digital</span>{" "} Services
      </h1>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
