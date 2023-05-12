"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";
import { useAppSelector } from "@/hooks/useStoreService";
import Image from "next/image";
import { ITourType } from "@/models/interface/Tour";

const TourCategories = () => {
  const types = useAppSelector(
    (o) => o.Store.TourTypesReducer?.TourTypes ?? []
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
            slidesPerView: 5,
          },
        }}
      >
        {types?.map((item: ITourType, index) => (
          <SwiperSlide key={item.id}>
            <div data-aos="fade" data-aos-delay={"100"}>
              <Link
                href={`/`} ///tours-list?types=${item.type}
                className="tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4"
              >
                <div className="tourTypeCard__content text-center pt-60 pb-24 px-30">
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.type}
                    className="m-auto"
                  />

                  <h4 className="text-dark-1 text-18 fw-500 mt-3 md:mt-30">
                    {item.type}
                  </h4>
                  <p className="text-light-1 lh-14 text-14 mt-2" dir="rtl">
                    {item.count} رحلات تبدأ من JOD {item.price}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="col-auto">
        <div className="d-flex x-gap-15 items-center justify-center mt-20">
          <div className="col-auto">
            <button className="d-flex items-center text-24 arrow-left-hover js-tour-type-prev">
              <i className="icon icon-arrow-left" />
            </button>
          </div>
          {/* End prev */}

          <div className="col-auto">
            <div className="pagination -dots text-border js-tour-type-pag" />
          </div>
          {/* End pagination */}

          <div className="col-auto">
            <button className="d-flex items-center text-24 arrow-right-hover js-tour-type-next">
              <i className="icon icon-arrow-right" />
            </button>
          </div>
          {/* End next */}
        </div>
      </div>
    </>
  );
};

export default TourCategories;
