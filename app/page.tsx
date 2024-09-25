import HomeAbout from "@/components/HomeAbout";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Services />
      <HomeAbout />
    </div>
  );
}
