import { HeaderSearch } from "@/models/interface/HeaderSearch";
import {
  PriceRangeForSearch,
  countriesForSearch,
  periodForSearch,
} from "@/utils/Constant";
import { FormikProps, isString } from "formik";
import { FC, useRef, useState } from "react";

const DropdownSelelctBar: FC<{ formik: FormikProps<HeaderSearch> }> = ({
  formik,
}) => {
  const countriesRef = useRef(null);
  const durationRef = useRef(null);
  const typesRef = useRef(null);
  const priceRef = useRef(null);
  return (
    <>
      <div className="col-auto">
        <div
          className="d-flex items-center px-15 py-5 lh-16 text-14 rounded-2 border-light"
          style={{ cursor: "pointer" }}
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
          data-bs-offset="0,10"
        >
          <i className="icon icon-chevron-sm-down text-7 mr-10" />

          <span className="english-font">
            {formik.values?.price?.label ?? (
              <span style={{ fontFamily: "var(--font-primary)" }}>السعر</span>
            )}
          </span>
        </div>
        {/* End dropdown__button */}

        <div className="toggle-element -dropdown js-click-dropdown dropdown-menu dropRating">
          <div className="text-15 y-gap-15 js-dropdown-list">
            {PriceRangeForSearch.map((item, index) => (
              <div key={index}>
                <button
                  className={`${
                    item === formik.values.price ? "text-blue-1 " : ""
                  }d-block js-dropdown-link english-font`}
                  onClick={() => {
                    formik.setFieldValue("price", item);
                    formik.setFieldValue("pageIndex", 0);
                    formik.submitForm();
                  }}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end of price dropdown */}

      {/* start of tour types dropdown */}
      <div className="col-auto">
        <div>
          <button
            className="d-flex items-center px-15 py-5 lh-16 text-14 rounded-2 border-light"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
            data-bs-offset="0,10"
          >
            <i className="icon icon-chevron-sm-down text-7 mr-15" />
            {formik.values.types && formik.values.types.length > 0 ? (
              <div className="d-flex" style={{ columnGap: "3px" }}>
                {formik.values.types?.map((i, index) => (
                  <button
                    className="mainSearch__submit button -dark-1  bg-blue-1 text-white"
                    type="button"
                    style={{
                      height: "23px",
                      padding: "0 15px",
                    }}
                    key={index}
                    onClick={() => {
                      var updated = formik.values.types.filter((x) => x !== i);
                      try {
                        typesRef.current.classList.remove("show");
                      } catch (x) {}
                      formik.setFieldValue("types", updated);
                      formik.submitForm();
                    }}
                  >
                    <i className="bx bx-x text-14 mr-10"></i>
                    <span className="text-10">{i}</span>
                  </button>
                ))}
              </div>
            ) : (
              <span style={{ fontFamily: "var(--font-primary)" }}>
                نوع الرحلة
              </span>
            )}
          </button>
          {/* End dropdown__button */}

          <div className="dropRating dropdown-menu" ref={typesRef}>
            <div className="px-20 py-20 rounded-4 bg-white border-light">
              <h5 className="text-15 fw-500 mb-15 text-right">نوع الرحلة</h5>
              {/* <div className="sidebar-checkbox">
                {tour_types.map((item) => (
                  <div
                    key={item.type}
                    className="row y-gap-10 items-center justify-between"
                  >
                    <div className="col-auto">
                      <div className="text-15 text-light-1 english-font">
                        {item.count}
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="form-checkbox d-flex items-center">
                        <div className="text-15 mr-10">{item.type}</div>

                        <input
                          type="checkbox"
                          name={item.type}
                          checked={formik.values.types?.includes(item.type)}
                          onChange={(e) => {
                            const { checked, name } = e.target;
                            var in_ = tour_types.find((x) => x.type == name);

                            var original = formik.values.types ?? [];
                            if (checked) {
                              original.push(in_.type);
                            } else {
                              original = original.filter(
                                (value) => value !== in_.type
                              );
                            }

                            formik.setFieldValue("types", original);
                            formik.setFieldValue("pageIndex", 0);
                            formik.submitForm();
                          }}
                        />
                        <div className="form-checkbox__mark">
                          <div className="form-checkbox__icon icon-check" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
          {/* End dropdown-menu */}
        </div>
        {/* End relative */}
      </div>
      {/* end of tour types dropdown */}

      <div className="col-auto">
        <div>
          <button
            className="d-flex items-center px-15 py-5 lh-16 text-14 rounded-2 border-light "
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
            data-bs-offset="0,10"
          >
            <i className="icon icon-chevron-sm-down text-7 mr-15" />
            {formik.values.period && formik.values.period.length > 0 ? (
              <div className="d-flex" style={{ columnGap: "3px" }}>
                {formik.values.period?.map((i, index) => (
                  <button
                    className="mainSearch__submit button -dark-1  bg-blue-1 text-white"
                    type="button"
                    style={{
                      height: "23px",
                      padding: "0 15px",
                    }}
                    key={index}
                    onClick={() => {
                      var updated = formik.values.period.filter((x) => x !== i);
                      try {
                        durationRef.current.classList.remove("show");
                      } catch (x) {}
                      formik.setFieldValue("period", updated);
                      formik.submitForm();
                    }}
                  >
                    <i className="bx bx-x text-14 mr-10"></i>
                    <span className="text-10">{i.label}</span>
                  </button>
                ))}
              </div>
            ) : (
              <span style={{ fontFamily: "var(--font-primary)" }}>
                مدة الرحلة
              </span>
            )}
          </button>

          <div className="dropRating dropdown-menu" ref={durationRef}>
            <div className="px-20 py-20 rounded-4 bg-white border-light">
              <h5 className="text-15 fw-500 mb-15 text-right">مدة الرحلة</h5>
              <div className="sidebar-checkbox">
                {periodForSearch.map((item) => (
                  <div
                    key={item.label}
                    className="row y-gap-10 items-center justify-between"
                  >
                    <div className="col-auto"></div>
                    <div className="col-auto">
                      <div className="form-checkbox d-flex items-center">
                        <div className="text-15 mr-10">{item.label}</div>

                        <input
                          type="checkbox"
                          name={item.label}
                          checked={
                            formik.values.period?.find(
                              (x) => x.label == item.label
                            ) != null
                          }
                          onChange={(e) => {
                            const { checked, name } = e.target;

                            var in_ = periodForSearch.find(
                              (x) => x.label == name
                            );

                            var original = formik.values.period ?? [];
                            if (checked) {
                              original.push(in_);
                            } else {
                              original = original.filter(
                                (value) => value !== in_
                              );
                            }

                            formik.setFieldValue("period", original);
                            formik.setFieldValue("pageIndex", 0);
                            formik.submitForm();
                          }}
                        />
                        <div className="form-checkbox__mark">
                          <div className="form-checkbox__icon icon-check" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-auto">
        <div>
          <button
            className="d-flex items-center px-15 py-5 lh-16 text-14 rounded-2 border-light "
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
            data-bs-offset="0,10"
          >
            <i className="icon icon-chevron-sm-down text-7 mr-15" />
            {formik.values.countries && formik.values.countries.length > 0 ? (
              <div className="d-flex" style={{ columnGap: "3px" }}>
                {formik.values.countries?.map((i, index) => (
                  <button
                    className="mainSearch__submit button -dark-1  bg-blue-1 text-white"
                    type="button"
                    style={{
                      height: "23px",
                      padding: "0 15px",
                    }}
                    key={index}
                    onClick={() => {
                      var updated = formik.values.countries.filter(
                        (x) => x !== i
                      );
                      try {
                        countriesRef.current.classList.remove("show");
                      } catch (x) {}
                      formik.setFieldValue("countries", updated);
                      formik.submitForm();
                    }}
                  >
                    <i className="bx bx-x text-14 mr-10"></i>
                    <span className="text-10">{i.label}</span>
                  </button>
                ))}
              </div>
            ) : (
              <span style={{ fontFamily: "var(--font-primary)" }}>الدول</span>
            )}
          </button>

          <div className="dropRating dropdown-menu" ref={countriesRef}>
            <div
              className="px-20 py-20 rounded-4 bg-white border-light"
              style={{ maxHeight: "300px", overflow: "hidden" }}
            >
              <h5 className="text-15 fw-500 mb-15 text-right">الدول</h5>
              <div
                className="sidebar-checkbox custom-scroll"
                style={{
                  maxHeight: 200,
                  height: "100%",
                  paddingRight: 20,
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                {countriesForSearch.map((item) => (
                  <div
                    key={item.label}
                    className="row y-gap-10 items-center justify-end"
                  >
                    <div className="col-auto">
                      <div className="form-checkbox d-flex items-center">
                        <div className="text-15 mr-10">{item.label}</div>

                        <input
                          type="checkbox"
                          name={item.label}
                          checked={
                            formik.values.countries?.find(
                              (x) => x.label == item.label
                            ) != null
                          }
                          onChange={(e) => {
                            const { checked, name } = e.target;
                            var in_ = countriesForSearch.find(
                              (x) => x.label == name
                            );

                            var original = formik.values.countries ?? [];
                            if (checked) {
                              original.push(in_);
                            } else {
                              original = original.filter(
                                (value) => value !== in_
                              );
                            }

                            formik.setFieldValue("countries", original);
                            formik.setFieldValue("pageIndex", 0);
                            formik.submitForm();
                          }}
                        />
                        <div className="form-checkbox__mark">
                          <div className="form-checkbox__icon icon-check" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownSelelctBar;
