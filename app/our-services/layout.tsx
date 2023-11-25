import { getContentData } from "@/lib/operations";
import { Metadata } from "next";
import { FunctionComponent, ReactNode } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const response = await getContentData();
  const { description, tags, title } = response?.visa?.seo || {
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
interface LayoutOurServicesProps {
  children: ReactNode;
}

const LayoutOurServices: FunctionComponent<LayoutOurServicesProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export default LayoutOurServices;
