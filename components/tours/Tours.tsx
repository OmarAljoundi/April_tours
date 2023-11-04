"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useQuery } from "react-query";
import { TourCard } from "../common/TourCard";
import { TourListLoading } from "./tourList-loading";
import { getTours } from "@/lib/operations";
import { FC } from "react";
import { useSetting } from "@/hooks/use-setting";

const Tours: FC<{ fetchProcess: "same-type" | "best-tours"; typeId?: number }> =
  ({ fetchProcess, typeId }) => {
    const best_tours_ids = useSetting((x) => x.setting?.best_tours?.tours);
    const { data: _response, isLoading } = useQuery(
      "Tours",
      async () => await getTours(),
      {
        refetchOnWindowFocus: false,
        keepPreviousData: false,
        select: (data) => {
          if (fetchProcess == "same-type") {
            return data.filter((x) => x.type_id == typeId).slice(0, 10);
          } else {
            return data.filter((x) => best_tours_ids.includes(x.id!));
          }
        },
      }
    );

    return (
      <>
        {isLoading && (
          <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3">
            <TourListLoading columns={3} />
          </div>
        )}
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
          {_response?.map((item, index) => (
            <SwiperSlide key={item.id} style={{ padding: "10px" }}>
              <div
                key={item?.id}
                data-aos={`${
                  (index + 1) % 2 == 0 ? "fade-left" : "fade-right"
                }`}
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
        <div className="w-auto mb-5">
          <div className="flex gap-x-4 items-center justify-center mt-5">
            <div className="w-auto">
              <button className="d-flex items-center text-xl arrow-right-hover js-populars-tour-prev">
                <i className="icon icon-arrow-right" />
              </button>
            </div>
            <div className="w-auto">
              <div className="pagination -dots text-border js-tour-pag_active" />
            </div>
            <div className="w-auto">
              <button className="flex items-center text-xl arrow-left-hover  js-populars-tour-next">
                <i className="icon icon-arrow-left" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Tours;
