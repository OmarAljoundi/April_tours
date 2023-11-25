import { cn } from "@/lib/utils";
import IconProvider from "@/provider/icon-provider";
import { Tour } from "@/types/custom";
import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import { Hotel, ScrollText } from "lucide-react";
import { FC } from "react";
import { FaHotel } from "react-icons/fa";

const TourHotels: FC<{ tour: Tour }> = ({ tour }) => {
  return (
    <Accordion selectionMode="single" className="px-0">
      <AccordionItem
        disableIndicatorAnimation={true}
        indicator={({ isOpen }) => (
          <Hotel
            className={cn(
              "duration-700 transition-all ",
              isOpen ? "text-primary " : "text-secondary "
            )}
          />
        )}
        key="1"
        aria-label="Accordion 1"
        title={<h4 className="mb-0 text-2xl"> الفنادق المتوقعة </h4>}
        classNames={{ base: "shadow-medium p-4 rounded-sm" }}
      >
        <div className="border border-dashed mb-3"></div>
        <ul className="flex flex-col gap-4 ">
          {tour?.tour_hotels?.map((i) => (
            <li key={i}>
              <div className="flex items-center gap-2">
                <IconProvider>
                  <FaHotel />
                </IconProvider>

                <span className="inline-block font-primary">{i}</span>
              </div>
            </li>
          ))}
        </ul>
      </AccordionItem>
    </Accordion>
  );
};

export default TourHotels;
