import BlurImageV2 from "@/components/common/BlurImageV2";
import { TourSection } from "@/types/custom";
import { DaysArranged } from "@/utils/Constant";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Badge,
  Card,
  Chip,
} from "@nextui-org/react";
import { FC } from "react";

const ItineraryContent: FC<{ tourStories: TourSection[] }> = ({
  tourStories,
}) => {
  return (
    <Accordion variant="splitted" selectionMode="multiple">
      {tourStories?.map((item, index) => (
        <AccordionItem
          classNames={{
            title: "text-right",
          }}
          startContent={
            <Chip color="secondary" className="text-white" radius="lg">
              {(index + 1).toString()}
            </Chip>
          }
          className="text-right"
          key={item.uuid}
          dir="rtl"
          title={DaysArranged[index]}
        >
          <div className="accordion__item flex justify-between overflow-hidden">
            <div className="w-full">
              <div className="text-bold">{item.title}</div>
              <p className="text-black text-sm mt-4">{item.description}</p>
            </div>
            <div>
              {item.image && (
                <BlurImageV2
                  alt=""
                  loading="eager"
                  priority={true}
                  src={item.image}
                  width={600}
                  height={300}
                  className="max-w-[300px] w-full rounded-md"
                />
              )}
            </div>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ItineraryContent;
