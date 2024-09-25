import Discovery from "@/components/Discovery";
import HomeAbout from "@/components/HomeAbout";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Services />
      <HomeAbout />
      <WhyChooseUs />
      <Discovery />
    </div>
  );
}
