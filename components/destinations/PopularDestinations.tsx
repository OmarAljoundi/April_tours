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
        return data.results.sort((a, b) => a.image?.order - b.image.order);
      },
    }
  );

  return (
    <>
      <Swiper
        dir="ltr"
        spaceBetween={30}
        className="overflow-visible-important"
        scrollbar={{
          el: ".js-popular-destination-scrollbar",
          draggable: true,
        }}
        initialSlide={4}
        modules={[Scrollbar, Navigation]}
        navigation={{
          nextEl: ".js-destination-next",
          prevEl: ".js-destination-prev",
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
              className="citiesCard -type-1 d-block rounded-4 group hover:cursor-pointer"
              key={item.id}
            >
              <div className="citiesCard__image ratio aspect-[3/4] ">
                <BlurImage
                  image={item.image.url}
                  loading="eager"
                  priority="low"
                />
              </div>
              <div className="citiesCard__content flex flex-col justify-between text-center pt-8 pb-5 px-5">
                <div className="citiesCard__bg" />
                <div className="citiesCard__top">
                  <div className="text-14 text-white fw-bold" dir="rtl">
                    {getTotalTours(item)} رحلة ضمن هذا البرنامج
                  </div>
                </div>
                <div className="citiesCard__bottom translate-y-16 group-hover:translate-y-0 transition-all">
                  <figcaption
                    className="absolute p-2 bottom-0 right-0 mx-auto w-fit  left-0  mb-16  sm:left-5 flex   justify-between  border border-white
                      bg-white/75 rounded-xl shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm"
                  >
                    <h4 className="text-sm xl:text-xl md:text-xl text-black">
                      {item.name}
                    </h4>
                  </figcaption>

                  <Button color="primary" variant="shadow">
                    عرض الرحلات
                  </Button>
                </div>
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
