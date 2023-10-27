"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useQuery } from "react-query";
import { getTourTypes } from "@/lib/operations";
import Link from "next/link";
import Image from "next/image";

const TourCategories = () => {
  const { data, isLoading } = useQuery(
    "Types",
    async () => await getTourTypes(),
    { refetchInterval: false, refetchOnWindowFocus: false }
  );
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-tour-type-next",
          prevEl: ".js-tour-type-prev",
        }}
        pagination={{
          el: ".js-tour-type-pag",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {data?.results?.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div data-aos="fade" data-aos-delay={"100"}>
              <Link
                scroll={false}
                href={`/tour-listing?type=${item.name}`}
                className="tourTypeCard -type-1 block  bg-primary/10 rounded-sm"
              >
                <div className="tourTypeCard__content text-center pt-14 pb-6 px-7">
                  <Image
                    loading="lazy"
                    src={item.image}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="m-auto"
                  />

                  <h4 className="text-black  text-lg mt-3 ">{item.name}</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-auto">
        <div className="flex gap-x-4 items-center justify-center mt-5">
          <div className="w-auto">
            <button className="flex items-center text-xl arrow-right-hover js-tour-type-prev">
              <i className="icon icon-arrow-right" />
            </button>
          </div>
          <div className="w-auto">
            <div className="pagination -dots text-border js-tour-type-pag" />
          </div>
          <div className="w-auto">
            <button className="flex items-center text-xl arrow-left-hover  js-tour-type-next">
              <i className="icon icon-arrow-left" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourCategories;
