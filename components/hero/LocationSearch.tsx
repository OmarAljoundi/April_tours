import { HeaderSearch } from "@/models/interface/HeaderSearch";
import { ReactSelectStyle } from "@/styles/react-select-style";
import { countriesForSearch } from "@/utils/Constant";
import { FormikProps } from "formik";
import { FC, useState } from "react";
import Select from "react-select";
const LocationSearch: FC<{ formik: FormikProps<HeaderSearch> }> = ({
  formik,
}) => {
  return (
    <>
      <div className="searchMenu-loc pr-20 py-20 px-30 js-form-dd js-liverSearch">
        <div>
          <h4 className="text-15 fw-500 ls-2 lh-16">الوجهة</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <Select
              placeholder="إلى أين؟"
              className="js-search js-dd-focus"
              classNamePrefix="location_selector"
              name="countries"
              value={formik.values.countries}
              isRtl
              options={countriesForSearch}
              onChange={(e) => formik.setFieldValue("countries", e)}
              isSearchable
              isClearable
              styles={ReactSelectStyle}
              noOptionsMessage={() => <h6>لايوجد نتائج لبحثك</h6>}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSearch;
