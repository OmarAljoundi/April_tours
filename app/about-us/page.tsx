import AboutUs from "@/components/about/AboutUs";
import { BlurImage } from "@/components/common/BlurImage";
import AboutHeader from "./about-header";
import AboutInfo from "./about-info";
import WhyUs from "./why-us";

export default function Page() {
  return (
    <div>
      <AboutHeader />
      <div className="container">
        <AboutInfo />
        <WhyUs />
      </div>
    </div>
  );
}
