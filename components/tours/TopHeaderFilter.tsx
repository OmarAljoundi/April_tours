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
      <div className="row y-gap-10 items-center justify-content-sm-between justify-content-center">
        <div className="col-auto">
          <div className="text-18">
            <span className="fw-500">نتائج البحث</span>{" "}
            <span className="english-font">{total}</span>
            <span className="pe-1">رحلات</span>
          </div>
        </div>
        <div className="col-auto">
          <div className="row x-gap-20 y-gap-20 ">
            <div className="col-auto">
              <div className="row x-gap-15 y-gap-15 flex-nowrap flex-lg-wrap  hide-scroll-bar overflow-scroll">
                <DropdownSelelctBar formik={formik} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End .row */}
    </>
  );
};

export default TopHeaderFilter;
