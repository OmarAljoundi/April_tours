"use client";
import { FC } from "react";
import AccordionContent from "./ItineraryContent";
import { TourSection } from "@/types/custom";
import { Card } from "@nextui-org/react";

const Itinerary: FC<{ tourStories: TourSection[] }> = ({ tourStories }) => {
  return (
    <Card className="mt-2 p-4 rounded-sm">
      <h4 className="mb-0 text-2xl">برنامج الرحلة</h4>
      <div className="border border-dashed my-5"></div>
      <div className="relative px-2 md:px-0 ">
        <div className="accordion -map grid gap-y-5" id="itineraryContent">
          <AccordionContent tourStories={tourStories} />
        </div>
      </div>
    </Card>
  );
};

export default Itinerary;
