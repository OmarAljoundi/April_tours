import AboutUs from "@/components/about/AboutUs";
import { BlurImage } from "@/components/common/BlurImage";
import AboutHeader from "./about-header";
import AboutInfo from "./about-info";
import WhyUs from "./why-us";

export default function Page() {
  return (
    <div>
      <AboutHeader />
      <div className="container px-6 lg:px-14 xl:px-32 2xl:px-2 space-y-14">
        <AboutInfo />
        <WhyUs />
      </div>
    </div>
  );
}
