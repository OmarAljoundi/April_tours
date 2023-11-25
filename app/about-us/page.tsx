import { getContentData } from "@/lib/operations";
import AboutHeader from "./about-header";
import AboutInfo from "./about-info";
import WhyUs from "./why-us";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const response = await getContentData();
  const { description, tags, title } = response?.about?.seo || {
    title: "",
    description: "",
    tags: "",
  };
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "website",
      siteName: "April Tours",
    },
    keywords: tags,
  };
}

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
