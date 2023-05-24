import PopularDestinations from "@/components/destinations/PopularDestinations";
import Hero from "@/components/hero";
import BlockGuide from "@/components/home/BlockGuide";
import Counter from "@/components/home/Counter";
import TourCategories from "@/components/home/TourCategories";
import Tours from "@/components/tours/Tours";
import { IContentResponse } from "@/models/interface/Response";
import ContentService from "@/services/ContentService";
import { AxiosResponse } from "axios";
import { Metadata } from "next";
import Link from "next/link";
import { Router } from "next/router";

async function getInfo() {
  const res =
    (await ContentService.readContent()) as AxiosResponse<IContentResponse>;
  return res.data?.content?.home;
}
export async function generateMetadata({ params }): Promise<Metadata> {
  const contet = await getInfo();
  return {
    title: contet.seoTitle,
    description: contet.seoDescription,
    keywords: contet.seoTags,
  };
}

const Home = () => {
  return (
    <div className="overflowHidden">
      <Hero />
      <section className="layout-pt-lg layout-pb-md mt-20" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-end items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title text-right sm:text-16">
                  الوجهات السياحية
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  نقدم اكثر من 100+ برنامج حول العالم
                </p>
              </div>
            </div>
          </div>

          <div className="relative pt-40 sm:pt-20 ">
            <PopularDestinations />
          </div>
        </div>
      </section>

      <section className="layout-pt-lg layout-pb-md">
        <div className="container-fluid container-xl">
          <div className="row y-gap-20 justify-center items-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title text-24 lg:text-22">
                  الرحلات الأكثر مبيعاً
                </h2>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-center items-center">
            {/* End .col */}

            <div className="col-auto">
              <div className="sectionTitle -md ">
                <h2 className="sectionTitle__title text-24 lg:text-22 ">
                  إختار المغامرة المفضلة
                </h2>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden pt-40 sm:pt-20">
            <TourCategories />
          </div>
        </div>
      </section>

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-30 flex-column-reverse flex-lg-row  justify-between items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="shadow-4">
                <div className="row border-center">
                  <Counter />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <h2 className="text-30 fw-600 text-right" dir="rtl">
                شركة إبريل تورز
              </h2>
              <p className="mt-40 lg:mt-20 text-right" dir="rtl">
                هي وكالة سفريات كاملة الخدمات في مدينة القدس تقوم بتوفير جميع
                خدمات السفر لجميع أنحاء العالم، ايضاً باقات سياحية صادرة بخدمات
                فاخرة ومستوى عالي من القيم.
              </p>

              <div className="d-flex justify-content-end mt-40 lg:mt-20">
                <Link
                  href="/" //about-us
                  className="button -md -blue-1 bg-dark-1 text-white"
                >
                  <i className="bi bi-arrow-up-left mr-15"></i> تفاصيل أكثر
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-sm layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  رفيق سفرك في رحلة لا تنسى
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
    </div>
  );
};

export default Home;
