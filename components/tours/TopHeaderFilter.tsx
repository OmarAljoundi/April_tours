import { FC } from "react";
import { FormikProps } from "formik";
import { HeaderSearch } from "@/models/interface/HeaderSearch";
import DropdownSelelctBar from "../common/DropdownSelelctBar";

const TopHeaderFilter: FC<{
  total: number;
  formik: FormikProps<HeaderSearch>;
}> = ({ total, formik }) => {
  return (
    <>
      <div className="flex flex-wrap y-gap-10 items-center justify-between sm:justify-center">
        <div className="text-18">
          <span className="fw-500">نتائج البحث</span>{" "}
          <span className="english-font">{total}</span>
          <span className="pe-1">رحلات</span>
        </div>
        <div className="flex justify-start x-gap-15 y-gap-15 flex-nowrap flex-lg-wrap  hide-scroll-bar overflow-scroll">
          <DropdownSelelctBar formik={formik} />
        </div>
      </div>

      {/* End .row */}
    </>
  );
};

export default TopHeaderFilter;
