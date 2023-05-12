import { ITourSections } from "@/models/interface/Tour";
import { DaysArranged } from "@/utils/Constant";
import { FC, useEffect, useState } from "react";

const ItineraryContent: FC<{ tourStories: ITourSections[] }> = ({
  tourStories,
}) => {
  return (
    <>
      {tourStories?.map((item, index) => (
        <div className="col-12 text-right" key={item.id} dir="rtl">
          <div className="accordion__item ">
            <div className="d-flex">
              <div
                className="accordion__icon size-40 flex-center text-blue-1 rounded-full"
                style={{ background: "#f3c614", color: "white" }}
              >
                <div className="text-14 fw-500">{index + 1}</div>
              </div>
              {/* End item number */}

              <div className="mr-20 w-100 shadow p-4">
                <div className="text-22 lh-15 fw-500">
                  {DaysArranged[index]}
                </div>
                <div className="text-20 lh-15 text-light-1 mt-5 text-blue-1 fw-bold">
                  {item.title}
                </div>
                <div
                  className={`accordion-collapse collapse ${
                    index == 0 ? "show" : "hide"
                  }`}
                  id={`item_${index + 1}`}
                  data-bs-parent="#itineraryContent"
                >
                  <div className="pt-15 pb-15">
                    <div className="text-16 lh-17">{item.description}</div>
                  </div>
                </div>
                {/* End accordion conent */}

                <button
                  className="button -md -blue-1 bg-blue-1-05 text-blue-1  d-block lh-15 text-14  fw-500 mt-20 fw-bold accordion__button "
                  data-bs-toggle="collapse"
                  data-bs-target={`#item_${index + 1}`}
                >
                  إظهار التفاصيل
                  <i className="bi bi-info-circle mr-15"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItineraryContent;
