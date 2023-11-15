import BlurImageV2 from "@/components/common/BlurImageV2";
import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface ServiceCardProps {
  data: { image: string; title: string; description: string };
}

const ServiceCard: FunctionComponent<ServiceCardProps> = ({ data }) => {
  const { description, image, title } = data;
  return (
    <div className="grid space-y-2 content-baseline justify-items-center items-center justify-center shadow-medium p-4 rounded-medium h-full">
      <BlurImageV2
        src={image}
        alt={title}
        width={300}
        height={150}
        quality={100}
        fetchPriority="high"
        className="max-w-[50px]"
        loading="eager"
      />
      <h1 className="text-xl  text-black font-bold text-right">{title}</h1>
      <p className="whitespace-pre-line text-sm lg:text-base text-center px-2 mx-auto ">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
