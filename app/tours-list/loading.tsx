import { TourListLoading } from "@/components/tours/tourList-loading";

const Loading = () => {
  return (
    <>
      <section className="pt-120 md:pt-60 pb-40 bg-light-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <MainFilterSearchBox formik={formik} /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container-fluid container-lg">
          <div className="row y-gap-10 items-center justify-content-sm-between justify-content-center">
            <div className="col-auto">
              <div className="text-18">
                <span className="fw-500">نتائج2 البحث</span>{" "}
                <span className="english-font">{0}</span>
                <span className="pe-1">رحلات</span>
              </div>
            </div>
            <div className="col-auto">
              <div className="row x-gap-20 y-gap-20 ">
                <div className="col-auto">
                  <div className="row x-gap-15 y-gap-15 flex-nowrap flex-lg-wrap  hide-scroll-bar overflow-scroll">
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
                          <span style={{ fontFamily: "var(--font-primary)" }}>
                            السعر
                          </span>
                        </span>
                      </div>
                      {/* End dropdown__button */}

                      <div className="toggle-element -dropdown js-click-dropdown dropdown-menu dropRating">
                        <div className="text-15 y-gap-15 js-dropdown-list"></div>
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
                          <span style={{ fontFamily: "var(--font-primary)" }}>
                            نوع الرحلة
                          </span>
                        </button>
                        {/* End dropdown__button */}

                        <div className="dropRating dropdown-menu">
                          <div className="px-20 py-20 rounded-4 bg-white border-light">
                            <h5 className="text-15 fw-500 mb-15 text-right">
                              نوع الرحلة
                            </h5>
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

                          <span style={{ fontFamily: "var(--font-primary)" }}>
                            مدة الرحلة
                          </span>
                        </button>

                        <div className="dropRating dropdown-menu">
                          <div className="px-20 py-20 rounded-4 bg-white border-light">
                            <h5 className="text-15 fw-500 mb-15 text-right">
                              مدة الرحلة
                            </h5>
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

                          <span style={{ fontFamily: "var(--font-primary)" }}>
                            الدول
                          </span>
                        </button>

                        <div className="dropRating dropdown-menu">
                          <div
                            className="px-20 py-20 rounded-4 bg-white border-light"
                            style={{ maxHeight: "300px", overflow: "hidden" }}
                          >
                            <h5 className="text-15 fw-500 mb-15 text-right">
                              الدول
                            </h5>
                            <div
                              className="sidebar-checkbox custom-scroll"
                              style={{
                                maxHeight: 200,
                                height: "100%",
                                paddingRight: 20,
                                overflowY: "auto",
                                overflowX: "hidden",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top-light pt-20" style={{ marginTop: 5 }}>
            <div className="row y-gap-30 justify-content-end">
              <TourListLoading columns={6} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Loading;
