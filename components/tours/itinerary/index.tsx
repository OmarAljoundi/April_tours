import { FC } from "react";
import AccordionContent from "./ItineraryContent";
import { ITourSections } from "@/models/interface/Tour";

const Itinerary: FC<{ tourStories: ITourSections[] }> = ({ tourStories }) => {
  return (
    <div className="row y-gap-30">
      <div className="col-12">
        <div className="relative">
          <div className="border-test" />
          <div className="accordion -map row y-gap-20" id="itineraryContent">
            <AccordionContent tourStories={tourStories} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
