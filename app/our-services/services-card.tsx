import BlurImageV2 from "@/components/common/BlurImageV2";
import { FunctionComponent } from "react";

interface ServiceCardProps {
  data: { image: string; title: string; description: string };
}

const ServiceCard: FunctionComponent<ServiceCardProps> = ({ data }) => {
  const { description, image, title } = data;
  return (
    <div className="grid space-y-2 justify-items-center items-center justify-center">
      <BlurImageV2
        src={image}
        alt={title}
        width={300}
        height={150}
        quality={80}
        fetchPriority="high"
        className="max-w-[100px]"
        loading="eager"
      />
      <h1 className="text-xl font-bold text-primary">{title}</h1>
      <p className="whitespace-pre-line text-sm lg:text-base text-center max-w-[70%] mx-auto">
        {" "}
        {description}{" "}
      </p>
    </div>
  );
};

export default ServiceCard;
