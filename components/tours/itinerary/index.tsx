import { FC } from "react";
import AccordionContent from "./ItineraryContent";
import { TourSection } from "@/types/custom";

const Itinerary: FC<{ tourStories: TourSection[] }> = ({ tourStories }) => {
  return (
    <div className="relative px-2 md:px-0 ">
      <div className="accordion -map grid gap-y-5" id="itineraryContent">
        <AccordionContent tourStories={tourStories} />
      </div>
    </div>
  );
};

export default Itinerary;
