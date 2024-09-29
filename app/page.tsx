import Discovery from "@/components/Discovery";
import FAQs from "@/components/FAQs";
import HomeAbout from "@/components/HomeAbout";
import HomeTrust from "@/components/HomeTrust";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Services />
      <HomeAbout />
      <WhyChooseUs />
      <Discovery />
      <HomeTrust />
      <FAQs />
    </div>
  );
}