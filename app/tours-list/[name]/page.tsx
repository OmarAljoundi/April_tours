"use client";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ImageGallery from "react-image-gallery";
import { TelegramShareButton } from "react-share";
import useApiService from "@/hooks/useApiService";
import { useParams } from "next/navigation";
import { SearchQuery, eFilterOperator } from "@/models/interface/Search";
import { ITourResponse } from "@/models/interface/Response";
import { BuildBreadCrumb } from "@/utils/BreadCrumnHelper";
import TopBreadCrumb from "@/components/tours/TopBreadCrumb";
import StickyBox from "react-sticky-box";
import SidebarRight from "@/components/tours/SidebarRight";
import Overview from "@/components/tours/Overview";
import Itinerary from "@/components/tours/itinerary";
import Link from "next/link";
import Tours from "@/components/tours/Tours";
const Tour = () => {
  const { name } = useParams();
  const { onSearchTours, loading } = useApiService();

  const fetchTour = async () => {
    var _SQ: SearchQuery = {
      FilterByOptions: [],
      OrderByOptions: [],
      PageIndex: 0,
      PageSize: 0,
    };
    var decoded_name = decodeURIComponent(name);
    _SQ.FilterByOptions.push({
      FilterFor: decoded_name?.replaceAll("-", " "),
      FilterOperator: eFilterOperator.EqualsTo,
      MemberName: "Name",
    });

    return (await onSearchTours(_SQ)) as ITourResponse;
  };

  const { data: _response, isLoading } = useQuery(
    "Single-Tour",
    () => fetchTour(),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: false,
      enabled: !!name,
    }
  );

  return (
    <>
      <div className="header-margin"></div>
      {loading || isLoading ? (
        <div className="container-fluid padding-top-large-loading">
          <div style={{ margin: "330px auto" }}>
            <span className="loader"></span>
          </div>
        </div>
      ) : (
        <>
          <TopBreadCrumb
            breadCrumbList={BuildBreadCrumb(decodeURIComponent(name))}
          />
          {/* End top breadcrumb */}

          <section className="pt-40">
            <div className="container">
              <div className="row y-gap-20 items-end justify-content-lg-between justify-content-center">
                <div className="col-auto">
                  <div className="row justify-center flex-col">
                    <div className="title text-18 text-center">
                      شاركها مع أحبابك
                    </div>
                    <div className="row x-gap-0 y-gap-10 justify-center">
                      <div className="col-auto">
                        <TelegramShareButton
                          title="Telegram Share"
                          url=""
                          children
                        />
                      </div>
                      {/* <div className="col-auto">
                    <Whatsapp
                      solidcircle
                      small
                      link={window.location.href}
                      style={styles}
                    />
                  </div>
                  <div className="col-auto">
                    <Facebook
                      solidcircle
                      small
                      link={window.location.href}
                      style={styles}
                    />
                  </div>
                  <div className="col-auto">
                    <Twitter
                      solidcircle
                      small
                      link={window.location.href}
                      style={styles}
                    />
                  </div>
                  <div className="col-auto">
                    <Linkedin
                      solidcircle
                      small
                      link={window.location.href}
                      style={styles}
                    />
                  </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <h1 className="text-30 fw-600 text-right lg:text-center">
                    {_response?.tour?.name}
                  </h1>
                  <div className="row x-gap-20 y-gap-20 items-center pt-10 justify-content-end">
                    <div className="col-auto">
                      <div className="row x-gap-30 items-center justify-center">
                        <div className="col-auto">
                          <div className="d-flex items-center lh-14 justify-content-end ">
                            <div className="text-14 text-light-1 text-right">
                              أيام +{_response?.tour?.numberOfDays}
                            </div>
                            <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                            <div className="text-14 text-light-1">
                              {_response?.tour?.tourType?.type}
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="d-flex x-gap-5 items-center ">
                            <div className="text-15 text-light-1">
                              {_response?.tour?.tourCountries
                                ?.map((o) => o.label)
                                .join(" | ")}
                            </div>
                            <i className="icon-placeholder text-16 text-light-1 ml-5"></i>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="d-flex x-gap-5 items-center">
                            <div className="text-15 text-light-1">
                              <span className="english-font">
                                {_response?.tour?.price} JOD
                              </span>{" "}
                              إبتداء من
                            </div>
                            <i className="bi bi-cash text-16 text-light-1 ml-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-40 js-pin-container">
            <div className="container">
              <div className="row y-gap-30">
                <StickyBox
                  className="col-lg-4 d-block lg:d-none sidebar-sticky"
                  style={{ height: "fit-content" }}
                  offsetTop={100}
                >
                  <SidebarRight tour={_response?.tour} />
                </StickyBox>
                <div className="col-lg-8">
                  <div className="relative d-flex justify-end overflow-hidden js-section-slider">
                    <img src={_response?.tour?.imageUrl} />
                  </div>
                  {/* End relative */}

                  {/* slider gallery */}

                  {/* <h3 className="text-36 fw-500 mt-40 text-right">مزايا الرحلة</h3>
              <TourSnapShot /> */}
                  {/* End toursnapshot */}
                  <div className="border-top-light mt-40 mb-40"></div>

                  <Overview tour={_response?.tour} />
                </div>
              </div>
            </div>
          </section>
          {/* End single page content */}

          <section className="border-top-light mt-40 pt-40">
            <div className="container">
              <h3 className="text-36 fw-500 mb-20 text-right underline">
                برنامج الرحلة
              </h3>
              <Itinerary tourStories={_response?.tour?.tourSections} />
            </div>
          </section>
          {/* End Itinerary */}

          {/* <section className="mt-40 mb-40">
        <div className="container ">
          <div className="pt-40 border-top-light">
            <h3 className="text-36 fw-500 mb-20 text-right underline">
              الأسئلة الشائعة
            </h3>
            <div
              className="accordion -simple row y-gap-20 js-accordion"
              id="Faq1"
            >
              <Faq />
            </div>
          </div>
        </div>
      </section> */}
          <section className="layout-pt-lg layout-pb-md">
            <div className="container">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <Link
                    href="/tours-list?onsale=on"
                    className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                  >
                    <div className="bi bi-arrow-up-left mr-15" /> عرض المزيد
                  </Link>
                </div>
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">
                      الرحلات الأكثر مبيعاً
                    </h2>
                  </div>
                </div>
                {/* End .col */}

                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                <Tours />
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
        </>
      )}
    </>
  );
};

export default Tour;
