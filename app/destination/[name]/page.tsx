"use client";
import SelectDestinaitons from "@/components/common/SelectDestinations";
import { TourCard } from "@/components/common/TourCard";
import Tours from "@/components/tours/Tours";
import { TourListLoading } from "@/components/tours/tourList-loading";
import useApiService from "@/hooks/useApiService";
import { ITourResponse } from "@/models/interface/Response";
import { SearchQuery, eFilterOperator } from "@/models/interface/Search";
import { useParams, useSearchParams } from "next/navigation";
import { useQuery } from "react-query";

const Destination = () => {
  const searchParams = useSearchParams();
  const { onGetTabs } = useApiService();
  const { name } = useParams();
  const fetchTours = async () => {
    var _SQ: SearchQuery = {
      FilterByOptions: [],
      OrderByOptions: [],
      PageIndex: 0,
      PageSize: 0,
      Tab: 1,
    };
    _SQ.FilterByOptions.push({
      FilterFor: decodeURIComponent(name?.replaceAll("-", " ")),
      FilterOperator: eFilterOperator.EqualsTo,
      MemberName: "Name",
    });
    _SQ.Tab = Number(searchParams.get("ActiveTab"));

    return (await onGetTabs(_SQ)) as ITourResponse;
  };

  const {
    data: _response,
    refetch,
    isFetching,
  } = useQuery([!!name, searchParams.get("ActiveTab")], () => fetchTours(), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    enabled: searchParams.get("ActiveTab") != null,
  });

  return (
    <>
      <div className="header-margin"></div>

      <section className="section-bg pt-80 pb-80 relative z-5">
        <div className="section-bg__item col-12">
          <img
            src="/assets/img/banner/destination-banner.png"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* End .section-bg__item */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-30 fw-600 text-white">
                  جميع الرحلات ضمن برنامج{" "}
                  {decodeURIComponent(name.replaceAll("-", " "))}
                </h1>
              </div>
              {/* End text-center */}
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-center items-center">
            <div className="col-auto">
              <div className="row x-gap-20 y-gap-10 items-center">
                <div className="col-auto">
                  <div className="row x-gap-15 y-gap-15 flex-row-reverse">
                    <SelectDestinaitons />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="text-24 fw-500"></div>
                </div>
              </div>
            </div>

            <div className="border-top-light mt-30 mb-30"></div>
            <div className="row y-gap-30" id="top-list">
              {isFetching && <TourListLoading columns={6} />}
              {_response?.tours?.map((tour, index) => (
                <div className="col-12 col-lg-4 col-md-6">
                  <div
                    key={tour?.id}
                    data-aos={`${
                      (index + 1) % 2 == 0 ? "fade-left" : "fade-right"
                    }`}
                    data-aos-anchor="#top-list"
                    data-aos-delay={100 * (index + 1)}
                    data-aos-offset="0"
                    data-aos-duration="500"
                    className="shadow"
                  >
                    <TourCard tour={tour} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
