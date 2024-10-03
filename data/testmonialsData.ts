// testimonialsData.ts

export interface TestimonialData {
  id: number;
  logo: string;
  quote: string;
  author: string;
  position: string;
  company: string;
}

export const testimonials: TestimonialData[] = [
  {
    id: 1,
    logo: "/images/banana.avif",
    quote:
      "We've been consistently impressed by Kulmi Digital's expertise in digital marketing. Their strategic approach to SEO, social media management, and email marketing has yielded remarkable results for our business. With their help, we've seen significant increases in website traffic, brand recognition, and customer engagement. Their professionalism and dedication to delivering exceptional results make them an invaluable partner for any company looking to elevate their digital presence.",
    author: "Mr. Garad Nor",
    position: "President and CEO",
    company: "BananaPay LLC",
  },
  {
    id: 2,
    logo: "/images/haier.avif",
    quote:
      "Kulmi Digital has been instrumental in our online success. Their tailored social media campaigns, SEO optimization, and email marketing strategies have exceeded our expectations. We've experienced noticeable growth in followers, website traffic, and conversions since partnering with them. Their team's creativity, attention to detail, and commitment to client success are truly commendable.",
    author: "Mr. Wang",
    position: "CEO",
    company: "Haier Kenya",
  },
  {
    id: 3,
    logo: "/images/bsh.avif",
    quote:
      "Working with Kulmi Digital has been a game-changer for our company. Their strategic campaign planning not only elevated our brand but also drove significant results.",
    author: "Mr. Bashir",
    position: "CEO",
    company: "BSH CARGO",
  },
];
