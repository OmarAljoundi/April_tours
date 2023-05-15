"use client";
import { HeaderSearch } from "@/models/interface/HeaderSearch";
import MainFilterSearchBox from "./MainFilterSearchBox";
import { useFormik } from "formik";
import { BlurImage } from "../common/BlurImage";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
export const dynamic = "force-dynamic";

const Hero = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as any);
      params.set(name, value);

      return `${params.toString()}&`;
    },
    [searchParams]
  );
  const getInitHeaderSearch = () => {
    var initHeader: HeaderSearch = {};
    return initHeader;
  };
  const handleFormSubmit = async () => {
    const { period, countries, types } = formik.values;
    var path = "";
    if (period && period.length > 0) {
      path += createQueryString(
        "durations",
        formik.values.period.map((o) => o.label).join(",")
      );
    } else {
      //searchParams.delete("durations");
    }

    if (countries && countries.length > 0) {
      path += createQueryString(
        "countries",
        formik.values.countries.map((o) => o.label).join(",")
      );
    } else {
      // searchParams.delete("countries");
    }

    router.push(("/tours-list" + "?" + path) as any);
    //navigateSearch("/tours-list", searchParams);
  };
  const formik = useFormik({
    onSubmit: handleFormSubmit,
    initialValues: getInitHeaderSearch(),
    enableReinitialize: true,
  });
  return (
    <section className="masthead -type-10">
      <div className="container-1500">
        <div className="row">
          <div className="col-lg-auto">
            <div className="masthead__content text-right">
              <h1
                className="text-30 lg:text-20 sm:text-25"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                اكتشف المغامرات الجديدة{" "}
              </h1>
              <p
                className="mt-5 text-15 lg:text-15 sm:text-15"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ color: "black" }}
              >
                استكشف أجمل الوجهات السياحية في العالم وعش تجربة لا تُنسى. احجز
                رحلتك الآن واستعد للمغامرة{" "}
              </p>
              <div data-aos="fade-up" data-aos-delay="300">
                <MainFilterSearchBox formik={formik} />
                {/* End filter content */}
              </div>
            </div>
          </div>
        </div>

        <div
          className="masthead__image"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="row y-gap-30 flex-nowrap">
            <div className="col-auto">
              <BlurImage
                image="/assets/img/hero/1.jpg"
                width={560}
                height={560}
                customClass="rounded-lg"
              />
            </div>
            {/* End col-auto */}

            <div className="col-auto">
              <BlurImage
                image="/assets/img/hero/2.jpg"
                customClass="rounded-lg"
                width={290}
                height={560}
              />
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End .masthead__image */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default Hero;
