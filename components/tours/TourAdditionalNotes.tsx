"use client";
import { cn } from "@/lib/utils";
import { Tour } from "@/types/custom";
import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import { Check, Dot, ScrollText, X } from "lucide-react";
import { FunctionComponent } from "react";

interface TourAdditionalNotesProps {
  tour: Tour;
}

const TourAdditionalNotes: FunctionComponent<TourAdditionalNotesProps> = ({
  tour,
}) => {
  return (
    <Accordion selectionMode="single" className="px-0">
      <AccordionItem
        disableIndicatorAnimation={true}
        indicator={({ isOpen }) => (
          <ScrollText
            className={cn(
              "duration-700 transition-all ",
              isOpen ? "text-primary " : "text-secondary "
            )}
          />
        )}
        key="ملاحظات"
        aria-label="ملاحظات"
        title={<h4 className="mb-0 text-2xl">ملاحظات </h4>}
        classNames={{ base: "shadow-medium p-4 rounded-sm" }}
      >
        <div className="border border-dashed mb-3"></div>
        <ul className="flex flex-col gap-4 mb-2">
          {tour?.additional_service?.map((i) => (
            <li key={i.uuid}>
              <div className="flex items-start gap-4">
                <div className="grid items-start">
                  <span className="inline-block">
                    <div className="grid items-center flex-wrap">
                      <div className="flex items-center">
                        <div>
                          <Dot className="text-green-900 w-6 h-6" />
                        </div>
                        <div>{i.description}</div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </AccordionItem>
    </Accordion>
  );
};

export default TourAdditionalNotes;
