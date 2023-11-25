import { cn } from "@/lib/utils";
import { Tour } from "@/types/custom";
import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import { BookmarkPlus, Check, Dot, X } from "lucide-react";
import React, { FC } from "react";
const Overview: FC<{ tour: Tour }> = ({ tour }) => {
  return (
    <div className="mt-2">
      <Accordion selectionMode="single" className="px-0">
        <AccordionItem
          key="مميزات البرنامج"
          disableIndicatorAnimation={true}
          indicator={({ isOpen }) => (
            <BookmarkPlus
              className={cn(
                "duration-700 transition-all ",
                isOpen ? "text-primary " : "text-secondary "
              )}
            />
          )}
          aria-label="مميزات البرنامج"
          title={<h4 className="mb-0 text-2xl">مميزات البرنامج </h4>}
          classNames={{ base: "shadow-medium p-4 rounded-sm" }}
        >
          <div className="border border-dashed mb-3"></div>
          <h6 className="mb-4 text-lg font-bold  "> البرنامج يشمل </h6>
          <ul className="flex flex-col gap-4 mb-2">
            {tour?.tour_includes?.map((i) => (
              <li key={i.uuid}>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-green-700">
                    <Check className="las w-6 h-6 p-1 text-lg text-white" />
                  </div>
                  <div className="grid items-start">
                    <span className="font-bold ">{i.title}</span>
                    <span className="inline-block  ">
                      <div className="grid items-center flex-wrap">
                        {i.description.split(",").map((i) => (
                          <div className="flex items-center" key={i}>
                            <div>
                              <Dot className="text-green-900 w-6 h-6" />
                            </div>
                            <div>{i}</div>
                          </div>
                        ))}
                      </div>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h6 className="mb-4 text-lg font-bold mt-5"> البرنامج لايشمل </h6>
          <ul className="flex flex-col gap-4 mb-2">
            {tour?.tour_excludes?.map(({ uuid, description, title }) => (
              <li key={uuid}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-red-500/80">
                    <X className="p-1 text-white" />
                  </div>
                  <span className="inline-block ">{description}</span>
                </div>
              </li>
            ))}
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Overview;
