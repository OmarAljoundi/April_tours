import { TourSection } from "@/types/custom";
import { DaysArranged } from "@/utils/Constant";
import { Badge, Card } from "@nextui-org/react";
import { FC } from "react";

const ItineraryContent: FC<{ tourStories: TourSection[] }> = ({
  tourStories,
}) => {
  return (
    <>
      {tourStories?.map((item, index) => (
        <div className="text-right" key={item.uuid} dir="rtl">
          <div className="accordion__item ">
            <div className="w-full">
              <Badge
                placement="top-left"
                content={index + 1}
                classNames={{
                  base: "w-full left-0 top-0 translate-y-0",
                  badge: "w-10 h-10 bg-secondary text-white translate-y-0",
                }}
              >
                <Card className=" shadow-card w-full t p-4 ">
                  <div className="text-22 lg:text-16 lh-15 fw-500">
                    {DaysArranged[index]}
                  </div>
                  <div className="text-20 lg:text-14 lh-15 text-light-1 mt-5 text-blue-1 fw-bold">
                    {item.title}
                  </div>
                  <p className="text-black text-xs leading-5 mt-4">
                    {item.description}
                  </p>
                </Card>
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItineraryContent;
