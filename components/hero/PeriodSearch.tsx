import { HeaderSearch } from "@/models/interface/HeaderSearch";
import { ReactSelectStyle } from "@/styles/react-select-style";
import { periodForSearch } from "@/utils/Constant";
import { FormikProps } from "formik";
import React, { FC, useState } from "react";
import Select from "react-select";
const PeriodSearch: FC<{ formik: FormikProps<HeaderSearch> }> = ({
  formik,
}) => {
  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <Select
        placeholder="عدد الأيام"
        className="js-search js-dd-focus"
        classNamePrefix="location_selector"
        isRtl
        options={periodForSearch}
        getOptionLabel={(o) => o.label}
        getOptionValue={(o) => o.label}
        value={formik.values.period}
        onChange={(e) => formik.setFieldValue("period", e)}
        isMulti
        isSearchable
        isClearable
        noOptionsMessage={() => <h6>لايوجد نتائج لبحثك</h6>}
        styles={ReactSelectStyle}
      />
    </div>
  );
};

export default PeriodSearch;
