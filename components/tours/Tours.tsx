"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import toursData from "../../data/tours";
import { useQuery } from "react-query";
import { OverlayTrigger, Popover, Tooltip } from "react-bootstrap";
import useApiService from "@/hooks/useApiService";
import { SearchQuery } from "@/models/interface/Search";
import { ITourResponse } from "@/models/interface/Response";
import { TourCard } from "../common/TourCard";
import { TourListLoading } from "./tourList-loading";

const Tours = () => {
  const { onSearchTours, loading } = useApiService();

  const fetchTours = async () => {
    var _SQ: SearchQuery = {
      FilterByOptions: [],
      OrderByOptions: [],
      PageIndex: 0,
      PageSize: 6,
    };

    return (await onSearchTours(_SQ)) as ITourResponse;
  };

  const { data: _response, isLoading } = useQuery("Tours", () => fetchTours(), {
    refetchOnWindowFocus: false,
    keepPreviousData: false,
  });

  return (
    <>
      {isLoading && <TourListLoading columns={3} />}
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-populars-tour-next",
          prevEl: ".js-populars-tour-prev",
        }}
        pagination={{
          el: ".js-tour-pag_active",
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
      >
        {_response?.tours?.map((item, index) => (
          <SwiperSlide key={item.id} style={{ padding: "10px" }}>
            <div
              key={item?.id}
              data-aos={`${(index + 1) % 2 == 0 ? "fade-left" : "fade-right"}`}
              data-aos-anchor="#top-list-2"
              data-aos-delay={100 * (index + 1)}
              data-aos-offset="0"
              data-aos-duration="500"
              className="shadow"
            >
              <TourCard tour={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-populars-tour-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End arrow prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-tour-pag_active" />
        </div>
        {/* End arrow pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-populars-tour-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End arrow next */}
      </div>
    </>
  );
};

export default Tours;
