// pages/Services.tsx
import React from "react";
import ServiceCard from "../components/ServiceCard";
import localFont from "next/font/local";
import SlideReveal from "@/components/ui/slidereveal";

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
    iconSrc: "/icons/flowchart.svg",
    title: "Digital PR & Content",
    description:
      "We streamline your business processes with innovative implementation of digital strategies. Stay ahead with automation and data-driven insights.",
  },
  {
    iconSrc: "/icons/rocket.svg",
    title: "Branding and Brand Development",
    description:
      "We help you maintain a unified voice across channels, reinforce your brand identity and resonate with your audience with intelligent creative expression.",
  },
  {
    iconSrc: "/icons/flag.svg",
    title: "Social Media Management & Advertising",
    description:
      "We create and manage targeted advertising campaigns on popular social media platforms such as Facebook, Instagram, Twitter, and LinkedIn.",
  },
  {
    iconSrc: "/icons/line-up.svg",
    title: "Search Engine Marketing",
    description:
      "Our SEM services include pay-per-click (PPC) advertising on search engines like Google and Bing, as well as search engine optimization.",
  },
  {
    iconSrc: "/icons/mail-open.svg",
    title: "Email Marketing",
    description:
      "Our email marketing services involve crafting compelling email campaigns to nurture leads and engage existing customers.",
  },
  {
    iconSrc: "/icons/certificate.svg",
    title: "Display Advertising",
    description:
      "We create eye-catching display ads that capture attention and drive engagement across various online platforms and websites.",
  },
  {
    iconSrc: "/icons/video-play.svg",
    title: "Digital Content Creation",
    description:
      "We produce high quality media content that matches your distinct brand style and is customized to your business objectives at scale.",
  },
  {
    iconSrc: "/icons/media.svg",
    title: "Media Planning & Research",
    description:
      "We analyze market trends and audience insights to create effective media strategies, ensuring your content reaches the right audience.",
  },
  {
    iconSrc: "/icons/set.svg",
    title: "Data Driven Audience Segmentation",
    description:
      "We utilize advanced analytics to segment your audience effectively, allowing for tailored marketing efforts that enhance engagement.",
  },
  {
    iconSrc: "/icons/tool.svg",
    title: "Leveraging ML and AI To Deliver Precision Campaigns",
    description:
      "We integrate machine learning and artificial intelligence to optimize your campaigns, ensuring precision targeting and improved performance.",
  },
  {
    iconSrc: "/icons/bulb.svg",
    title: "Optimized Media Plans Based On Campaign Objectives",
    description:
      "We develop media plans that align with your specific campaign goals, ensuring efficient use of resources and maximum impact.",
  },
  {
    iconSrc: "/icons/growth.svg",
    title: "Tracking And Measuring Campaign Performance",
    description:
      "We provide comprehensive analytics and reporting to track your campaign performance, allowing for informed adjustments and improvements.",
  },
];


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
