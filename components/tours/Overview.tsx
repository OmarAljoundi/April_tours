import { ITour } from "@/models/interface/Tour";
import React, { FC } from "react";
const Overview: FC<{ tour: ITour }> = ({ tour }) => {
  return (
    <>
      {tour?.additionalInfo && (
        <div className="row x-gap-40 y-gap-40">
          <div className="col-12">
            <h3 className="text-36 fw-500 text-right">
              معلومات عامة عن الرحلة
            </h3>

            <p className="text-dark-1 text-15 mt-20">{tour?.additionalInfo}</p>
          </div>
        </div>
      )}

      <div className={` ${tour?.additionalInfo ? "border-top-light" : ""}`}>
        <div className="row x-gap-40 y-gap-40 ">
          <div className="col-12">
            <h3 className="text-36 fw-500 text-right">البرنامج يشمل التالي</h3>

            <div className="row x-gap-40 y-gap-40 pt-20">
              <div className="col-md-6 border-right-light">
                {tour?.tourExcludes.map((i) => (
                  <div className="text-dark-1 text-18 text-right d-flex justify-content-end">
                    <span dir="rtl">
                      {i.title} <br />
                      <small className="text-blue-1 text-14">
                        ( {i.details.split(",").join(" ، ")} )
                      </small>
                    </span>
                    <i className="icon-close text-red-2 text-10 ml-10 mt-10 fw-bold"></i>
                  </div>
                ))}
              </div>
              <div className="col-md-6 ">
                {tour?.tourIncludes.map((i) => (
                  <div className="text-dark-1 text-18 text-right d-flex justify-content-end">
                    <span dir="rtl">
                      {i.title} <br />
                      <small className="text-blue-1 text-14">
                        ( {i.details.split(",").join(" ، ")} )
                      </small>
                    </span>
                    <i className="icon-check text-10 ml-10 mt-10 text-green-2 fw-bold"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
