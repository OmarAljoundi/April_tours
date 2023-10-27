import { HeaderSearch } from "@/models/interface/HeaderSearch";
import LocationSearch from "./LocationSearch";
import { FormikProps, useFormik } from "formik";
import { FC, useEffect } from "react";
import PeriodSearch from "./PeriodSearch";

const MainFilterSearchBox: FC<{ formik: FormikProps<HeaderSearch> }> = ({
  formik,
}) => {
  return (
    <>
      <div
        className="mainSearch bg-white pt-5 pb-20 rounded-4 shadow-1 mt-35"
        data-aos="fade-up"
        data-aos-delay="200"
        dir="rtl"
      >
        <div className="button-grid items-center">
          <LocationSearch formik={formik} />
          {/* End Location */}

          <div className="searchMenu-date  pr-20 py-20 px-30  js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">مدة الرحلة</h4>
              <PeriodSearch formik={formik} />
            </div>
          </div>

          <div className="button-item px-30">
            <button
              className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white"
              onClick={() => formik.handleSubmit()}
              type="button"
            >
              <span className="text-22">إبحث</span>
              <i className="icon-search text-20 mr-10" />
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
      {/* End .mainSearch */}
    </>
  );
};

export default MainFilterSearchBox;
