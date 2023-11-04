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
import TourHotels from "./TourHotels";

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

      <section className="pt-5 border-t">
        <div className="w-full  flex flex-row items-center pb-5  justify-between ">
          <h1 className="text-2xl fw-600 text-right">{tour?.name}</h1>
        </div>
      </section>

      <div className="grid grid-cols-12 lg:gap-x-10  items-start">
        <div className="col-span-4 sidebar-sticky content-center gap-y-5 hidden lg:grid">
          <div className="w-full" style={{ height: "fit-content" }}>
            <SidebarRight tour={tour} />
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
        </div>
      </div>
      <div className="flex flex-col-reverse">
        <Overview tour={tour} />
        <section className="border-top-light mt-10">
          <Itinerary tourStories={tour?.tour_sections} />
        </section>
      </div>

      {tour?.tour_hotels && tour?.tour_hotels.length > 0 && (
        <section className="border-top-light mt-10">
          <TourHotels tour={tour} />
        </section>
      )}

      <section className="mt-2 overflow-hidden">
        <SectionTitle title="رحلات أخرى قد تعجبك؟" />
        <Tours fetchProcess="same-type" typeId={tour.type_id} />
      </section>
    </div>
  );
}
