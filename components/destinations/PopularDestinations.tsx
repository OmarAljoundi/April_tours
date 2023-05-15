"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Scrollbar } from "swiper";
//import useApiService from "hooks/useApiService";
import { useQuery } from "react-query";
import { Order, SearchQuery, eFilterOperator } from "@/models/interface/Search";
import { ILocationResponse } from "@/models/interface/Response";
import Link from "next/link";
import Image from "next/image";
import useApiService from "@/hooks/useApiService";
import { BlurImage } from "../common/BlurImage";

const PopularDestinations = () => {
  const { onGetLocations, loading } = useApiService();

  const fetchLocations = async () => {
    var _SQ: SearchQuery = {
      FilterByOptions: [],
      OrderByOptions: [],
      PageIndex: 0,
      PageSize: 0,
    };
    _SQ.OrderByOptions.push({
      MemberName: "SortOrder",
      SortOrder: Order.ASC,
    });

    _SQ.FilterByOptions.push({
      FilterFor: true,
      FilterOperator: eFilterOperator.EqualsTo,
      MemberName: "Active",
    });

    return (await onGetLocations(_SQ)) as ILocationResponse;
  };

  const { data: _response } = useQuery(
    "Popular Destination",
    () => fetchLocations(),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return (
    <>
      <Swiper
        spaceBetween={30}
        className="overflow-visible"
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
        {_response?.locations?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/destination/${item.name.replaceAll(" ", "-")}`}
              className="citiesCard -type-1 d-block rounded-4"
              key={item.id}
            >
              <div className="citiesCard__image ratio ratio-3:4">
                <BlurImage image={item.imageUrl} />
              </div>
              <div className="citiesCard__content d-flex flex-column justify-between text-center pt-30 pb-20 px-20">
                <div className="citiesCard__bg" />
                <div className="citiesCard__top">
                  <div className="text-14 text-white fw-bold" dir="rtl">
                    {item.totalTours} رحلة ضمن هذا البرنامج
                  </div>
                </div>
                <div className="citiesCard__bottom">
                  <h4 className="text-26 md:text-20 lh-13 text-white mb-20">
                    {item.name}
                  </h4>
                  <button className="button col-12 h-60 -blue-1 bg-white text-dark-1">
                    عرض الرحلات
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <button className="section-slider-nav  -prev flex-center button -blue-1  shadow-1 size-40 rounded-full sm:d-none js-destination-prev bg-yellow text-white">
          <i className="icon icon-chevron-left text-12" />
        </button>
        <button className="section-slider-nav -next flex-center button -blue-1 shadow-1 size-40 rounded-full sm:d-none js-destination-next bg-yellow text-white">
          <i className="icon icon-chevron-right text-12" />
        </button>
        <div className="slider-scrollbar bg-light-2 mt-40  js-popular-destination-scrollbar" />
      </div>
    </>
  );
};

export default PopularDestinations;
