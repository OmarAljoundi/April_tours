import BlurImageV2 from "@/components/common/BlurImageV2";
import { TourSection } from "@/types/custom";
import { DaysArranged } from "@/utils/Constant";
import { Accordion, AccordionItem, Badge, Card } from "@nextui-org/react";
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
          className="text-right"
          key={item.uuid}
          dir="rtl"
          title={item.title}
        >
          <div className="accordion__item ">
            <div className="w-full">
              <div className="">{DaysArranged[index]}</div>
              <p className="text-black text-sm">{item.description}</p>
            </div>
            <div>
              {item.image && (
                <BlurImageV2
                  alt=""
                  src={item.image}
                  width={100}
                  height={50}
                  className="max-w-[100px] w-full"
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
