"use client";
import { BuildBreadCrumb } from "@/utils/BreadCrumnHelper";
import TopBreadCrumb from "@/components/tours/TopBreadCrumb";
import StickyBox from "react-sticky-box";
import SidebarRight from "@/components/tours/SidebarRight";
import Overview from "@/components/tours/Overview";
import Itinerary from "@/components/tours/itinerary";
import Tours from "@/components/tours/Tours";
import { GenerateShareMessage } from "@/utils/GenerateShareMessage";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
import ImageSlides from "./ImageSlides";

export default function TourInfo({ tour }) {
  return (
    <div className="md:overflowHidden">
      <div className="header-margin"></div>
      <>
        <TopBreadCrumb
          breadCrumbList={BuildBreadCrumb(decodeURIComponent(tour?.name))}
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
                  <div className="row x-gap-10 y-gap-10 justify-center mt-5">
                    <div className="col-3">
                      <WhatsappShareButton
                        url={decodeURIComponent(window.location.href)}
                        content={GenerateShareMessage()}
                      >
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                    </div>
                    <div className="col-3">
                      <FacebookShareButton
                        url={decodeURIComponent(window.location.href)}
                        quote={GenerateShareMessage()}
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                    </div>
                    <div className="col-3">
                      <TwitterShareButton
                        url={decodeURIComponent(window.location.href)}
                        content={GenerateShareMessage()}
                      >
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                    </div>
                    <div className="col-3">
                      <LinkedinShareButton
                        url={decodeURIComponent(window.location.href)}
                        content={GenerateShareMessage()}
                      >
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <h1 className="text-30 fw-600 md:text-center lg:text-right ">
                  {tour?.name}
                </h1>
                <div className="row x-gap-20 y-gap-20 items-center pt-10 justify-content-end">
                  <div className="col-auto">
                    <div className="row x-gap-30 items-center justify-center">
                      <div className="col-auto">
                        <div className="d-flex items-center lh-14 justify-content-end ">
                          <div className="text-14 text-light-1 text-right">
                            أيام +{tour?.numberOfDays}
                          </div>
                          <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                          <div className="text-14 text-light-1">
                            {tour?.tourType?.type}
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="d-flex x-gap-5 items-center ">
                          <div className="text-15 text-light-1">
                            {tour?.tourCountries
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
                              {tour?.price} JOD
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
                <SidebarRight tour={tour} />
              </StickyBox>
              <div className="col-lg-8">
                <div className="relative d-flex justify-end overflow-hidden js-section-slider w-100">
                  <ImageSlides
                    tourImages={tour?.tourImages}
                    mainImage={tour?.imageUrl}
                  />
                </div>

                {/* <h3 className="text-36 fw-500 mt-40 text-right">مزايا الرحلة</h3>
              <TourSnapShot /> */}
                {/* End toursnapshot */}
                <div className="border-top-light mt-40 mb-40"></div>

                <Overview tour={tour} />
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
            <Itinerary tourStories={tour?.tourSections} />
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
          <div className="container-fluid container-xl">
            <div className="row y-gap-20 justify-center items-center">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title text-24 lg:text-22">
                    رحلات أخرى قد تعجبك؟
                  </h2>
                </div>
              </div>
            </div>

            <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
              <Tours />
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
