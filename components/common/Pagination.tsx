import { HeaderSearch } from "@/models/interface/HeaderSearch";
import { FormikProps } from "formik";
import { FC, useState } from "react";

const Pagination: FC<{
  total: number;
  formik: FormikProps<HeaderSearch>;
}> = ({ total, formik }) => {
  const handlePageClick = (pageNumber) => {
    formik.setFieldValue("pageIndex", pageNumber - 1);
    formik.submitForm();
  };

  const renderPage = (pageNumber, isActive = false) => {
    const className = `size-40 flex-center rounded-full cursor-pointer english-font ${
      isActive ? "bg-dark-1 text-white" : ""
    }`;
    return (
      <div key={pageNumber} className="col-auto">
        <div className={className} onClick={() => handlePageClick(pageNumber)}>
          {pageNumber}
        </div>
      </div>
    );
  };

  const renderPages = () => {
    const totalPages = Math.ceil(total / formik.values.pageSize);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    const pages = pageNumbers.map((pageNumber) =>
      renderPage(pageNumber, pageNumber === formik.values.pageIndex + 1)
    );
    return pages;
  };

  const isLeftDisable = () => {
    return formik.values.pageIndex == 0;
  };

  const isRightDisable = () => {
    const totalPages = Math.ceil(total / formik.values.pageSize);
    return formik.values.pageIndex + 1 == totalPages;
  };

  return (
    <div className="border-top-light mt-30 pt-30">
      <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
        <div className="col-auto md:order-1-bootstrap">
          <button
            className="button -blue-1 size-40 rounded-full border-light"
            disabled={isLeftDisable()}
            onClick={() => {
              formik.setFieldValue("pageIndex", formik.values.pageIndex - 1);
              formik.submitForm();
            }}
          >
            <i className="icon-chevron-left text-12" />
          </button>
        </div>
        <div className="col-auto order-3-bootstrap md:order-2-bootstrap ">
          <button
            className="button -blue-1 size-40 rounded-full border-light"
            disabled={isRightDisable()}
            onClick={() => {
              formik.setFieldValue("pageIndex", formik.values.pageIndex + 1);
              formik.submitForm();
            }}
          >
            <i className="icon-chevron-right text-12" />
          </button>
        </div>
        <div className="col-md-auto  order-2-bootstrap md:order-2-bootstrap">
          <div className="row x-gap-20 y-gap-20 items-center md:d-none english-font">
            {renderPages()}
          </div>

          <div className="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex ">
            {renderPages()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
