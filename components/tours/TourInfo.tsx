"use client";
import TopBreadCrumb from "@/components/tours/TopBreadCrumb";
import SidebarRight from "@/components/tours/SidebarRight";
import Overview from "@/components/tours/Overview";
import Itinerary from "@/components/tours/itinerary";
import Tours from "@/components/tours/Tours";
import ImageSlides from "./ImageSlides";
import { Tour } from "@/types/custom";
import TourSameTypes from "./TourSameTypes";
import BasicInfo from "./BasicInfo";
import SectionTitle from "../common/section-title";

export default function TourInfo({ tour }: { tour: Tour }) {
  const data = [
    {
      title: "الرحلات السياحية",
      href: "/tour-listing",
    },
    {
      title: decodeURIComponent(tour?.name),
      current: true,
    },
  ];
  return (
    <div className="md:overflow-hidden container">
      <TopBreadCrumb breads={data} />

      <section className="pt-5">
        <div className="w-full px-2 flex flex-row items-center pb-5  justify-between ">
          <h1 className="text-2xl fw-600 text-right">{tour?.name}</h1>
        </div>
      </section>

      <section className="js-pin-container">
        <div className="grid grid-cols-12 gap-x-10 px-2 items-start">
          <div className=" col-span-4 sidebar-sticky content-center gap-y-5 hidden lg:grid">
            <div className="w-full" style={{ height: "fit-content" }}>
              <SidebarRight tour={tour} />
            </div>
            <div className="w-full" style={{ height: "fit-content" }}>
              <TourSameTypes tour={tour} />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="relative flex justify-end overflow-hidden js-section-slider w-100">
              <ImageSlides
                tourImages={tour?.images}
                mainImage={
                  tour?.images && tour?.images.length ? tour?.images[0] : ""
                }
              />
            </div>

            <BasicInfo tour={tour} />
            <Overview tour={tour} />
          </div>
        </div>
      </section>

      <section className="border-top-light mt-10 px-2">
        <h3 className="text-xl lg:text-3xl fw-500 mb-5 text-right pr-2">
          برنامج الرحلة
        </h3>
        <Itinerary tourStories={tour?.tour_sections} />
      </section>

      <section className="mt-2 overflow-hidden">
        <SectionTitle title="رحلات أخرى قد تعجبك؟" />
        <Tours />
      </section>
    </div>
  );
}
