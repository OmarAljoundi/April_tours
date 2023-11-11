"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Scrollbar } from "swiper";
import { useQuery } from "react-query";
import Link from "next/link";
import { BlurImage } from "../common/BlurImage";
import { getDestination } from "@/lib/operations";
import { Location } from "@/types/custom";
import { Button, Card, Skeleton } from "@nextui-org/react";
import BlurImageV2 from "../common/BlurImageV2";

export function getTotalTours(location: Location) {
  var total = 0;

  location.location_attributes?.map((x) => {
    total += x.location_tours?.length ?? 0;
  });
  return total;
}
const PopularDestinations = () => {
  const { data: _response, isLoading } = useQuery(
    "Popular Destination",
    async () => await getDestination(),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      select: (data) => {
        return data.results
          .filter((x) => x.is_active)
          .sort((a, b) => a.image?.order - b.image.order);
      },
    }
  );

  return (
    <>
      <Swiper
        spaceBetween={30}
        className="overflow-visible-important"
        scrollbar={{
          el: ".js-popular-destination-scrollbar",
          draggable: true,
        }}
        initialSlide={4}
        modules={[Scrollbar, Navigation]}
        navigation={{
          nextEl: ".js-destination-prev",
          prevEl: ".js-destination-next",
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {isLoading &&
          Array.from(new Array(9)).map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="w-full space-y-5 p-4" radius="lg" key={index}>
                <Skeleton className="rounded-lg ">
                  <div className="aspect-[3/4] rounded-lg bg-default-300"></div>
                </Skeleton>
              </Card>
            </SwiperSlide>
          ))}

        {_response?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/tour-listing/${item.slug}`}
              className="citiesCard -type-1 d-block  group hover:cursor-pointer"
              key={item.id}
            >
              <div
                className="citiesCard__image ratio aspect-[3/4] h-full w-full before:w-full  
                   before:absolute before:h-full before:bottom-0 before:left-0 before:bg-gradient-to-t 
                 before:from-black/75 before:z-10  
                  before:to-black/10"
              >
                <BlurImageV2
                  src={item?.image?.url || ""}
                  loading="eager"
                  alt=""
                  fill
                  className="object-cover rounded-none"
                />
                <figcaption
                  className="absolute z-20  justify-center items-center   p-3 bottom-0 left-0 right-0 mx-auto  rounded-none  flex  text-white    
                    sm:py-4 sm:px-6"
                >
                  <div className="text-center">
                    <h1 className="text-base text-white ">{item.name}</h1>
                    <p className="text-base mt-2 text-white ">
                      {getTotalTours(item)} رحلة ضمن البرنامج
                    </p>
                  </div>
                </figcaption>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <button
          className="section-slider-nav  -prev flex justify-center items-center button -blue-1  
         shadow-1 w-10 h-10 rounded-full sm:d-none js-destination-prev bg-secondary text-white"
        >
          <i className="icon icon-chevron-left  text-sm" />
        </button>
        <button
          className="section-slider-nav -next flex justify-center items-center button -blue-1
         shadow-1 w-10 h-10 rounded-full sm:d-none js-destination-next bg-secondary text-white"
        >
          <i className="icon icon-chevron-right text-sm" />
        </button>
        <div className="slider-scrollbar bg-light-2 mt-2  js-popular-destination-scrollbar" />
      </div>
    </>
  );
};

export default PopularDestinations;
