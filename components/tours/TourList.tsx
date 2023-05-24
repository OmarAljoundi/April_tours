"use client";
import Pagination from "@/components/common/Pagination";
import { TourCard } from "@/components/common/TourCard";
import TopHeaderFilter from "@/components/tours/TopHeaderFilter";
import { TourListLoading } from "@/components/tours/tourList-loading";
import useApiService from "@/hooks/useApiService";
import { HeaderSearch } from "@/models/interface/HeaderSearch";
import { ITourResponse } from "@/models/interface/Response";
import { Order, SearchQuery, eFilterOperator } from "@/models/interface/Search";
import {
  PriceRangeForSearch,
  countriesForSearch,
  periodForSearch,
} from "@/utils/Constant";
import { useFormik } from "formik";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
const ToursList = () => {
  const { onSearchGeneral } = useApiService();
  const Originalpathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return `${params.toString()}&`;
  }, []);

  const getInitHeaderSearch = () => {
    var contries = searchParams.get("countries");
    var durations = searchParams.get("durations");
    var types = searchParams.get("types");
    var page = searchParams.get("pageIndex");
    var priceMax = searchParams.get("price_max");
    var priceMin = searchParams.get("price_min");
    var days = searchParams.get("days");
    var initHeader: HeaderSearch = {
      countries: contries
        ? countriesForSearch.filter((o) => contries.includes(o.label))
        : null,
      period: durations
        ? periodForSearch.filter((o) => durations.includes(o.label))
        : null,
      types: types ? types.split("+") : null,
      pageIndex: Number(page) ?? 0,
      pageSize: 12,
      days: days ? days.split("+") : null,
      price: {
        max: Number(priceMax) ?? null,
        min: Number(priceMin) ?? null,
        label: PriceRangeForSearch.find(
          (x) => x.min == Number(priceMin) && x.max == Number(priceMax)
        )?.label,
      },
    };

    return initHeader;
  };
  const handleFormSubmit = async () => {
    var path = "";
    const { period, countries, types, days, price, pageIndex } = formik.values;
    if (period && period.length > 0) {
      path += createQueryString(
        "durations",
        formik.values.period.map((o) => o.label).join(",")
      );
    }

    if (countries && countries.length > 0) {
      path += createQueryString(
        "countries",
        formik.values.countries.map((o) => o.label).join(",")
      );
    }

    if (types && types.length > 0) {
      path += createQueryString("types", formik.values.types.join("+"));
    }

    if (price.min) {
      path += createQueryString("price_min", price.min.toString());
    }

    if (price.max) {
      path += createQueryString("price_max", price.max.toString());
    }
    if (days && days.length > 0) {
      path += createQueryString("days", formik.values.days.join("+"));
    }
    path += createQueryString("pageIndex", formik.values.pageIndex.toString());
    if (path.length > 0) {
      path = path.slice(0, -1);
    }
    router.push(("/tours-list" + "?" + path) as any, {
      forceOptimisticNavigation: true,
    });
    refetch();
  };
  const formik = useFormik({
    onSubmit: handleFormSubmit,
    initialValues: getInitHeaderSearch(),
  });

  const fetchTours = async (p?: number) => {
    var _SQ: SearchQuery = {
      FilterByOptions: [],
      OrderByOptions: [],
      PageIndex: 0,
      PageSize: 12,
    };

    const { countries, period, types, price, days, pageIndex, pageSize } =
      formik.values;

    if (countries && countries.length > 0) {
      _SQ.FilterByOptions.push({
        FilterFor: countries.map((o) => o.label).join("+"),
        FilterOperator: eFilterOperator.EqualsTo,
        MemberName: "destination",
      });
    }

    if (period) {
      period.map((x) => {
        _SQ.FilterByOptions.push({
          FilterFor: x.min,
          FilterOperator: eFilterOperator.EqualsTo,
          MemberName: "period_min",
        });
        _SQ.FilterByOptions.push({
          FilterFor: x.max,
          FilterOperator: eFilterOperator.EqualsTo,
          MemberName: "period_max",
        });
      });
    }
    if (types && types.length > 0) {
      _SQ.FilterByOptions.push({
        FilterFor: formik.values.types.join("+"),
        FilterOperator: eFilterOperator.EqualsTo,
        MemberName: "types",
      });
    }
    if (days && days.length > 0) {
      _SQ.FilterByOptions.push({
        FilterFor: formik.values.days.join("+"),
        FilterOperator: eFilterOperator.EqualsTo,
        MemberName: "days",
      });
    }
    if (price.min) {
      _SQ.FilterByOptions.push({
        FilterFor: formik.values.price.min,
        FilterOperator: eFilterOperator.EqualsTo,
        MemberName: "price_min",
      });
    }
    if (price.max) {
      _SQ.FilterByOptions.push({
        FilterFor: formik.values.price.max,
        FilterOperator: eFilterOperator.EqualsTo,
        MemberName: "price_max",
      });
    }

    _SQ.OrderByOptions.push({
      MemberName: "Price",
      SortOrder: Order.ASC,
    });

    _SQ.PageIndex = pageIndex;
    _SQ.PageSize = pageSize;

    return (await onSearchGeneral(_SQ)) as ITourResponse;
  };

  const {
    data: _response,
    refetch,
    isLoading,
    isFetched,
  } = useQuery(["Tour_List"], () => fetchTours(), {
    refetchOnWindowFocus: false,
    keepPreviousData: false,
    enabled: true,
    cacheTime: 3600,
  });

  const isNoResult = () => {
    return !isLoading && isFetched && _response.total == 0;
  };

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
          <TopHeaderFilter total={_response?.total} formik={formik} />
          <div className="border-top-light pt-20" style={{ marginTop: 5 }}>
            <div className="row y-gap-30 justify-content-end" id="top-list-2">
              {isLoading && <TourListLoading columns={6} />}
              {_response?.tours?.map((tour, index) => (
                <div className="col-12 col-lg-4 col-md-6" key={index}>
                  <div
                    key={tour?.id}
                    data-aos={`${
                      (index + 1) % 2 == 0 ? "fade-left" : "fade-right"
                    }`}
                    data-aos-anchor="#top-list-2"
                    data-aos-delay={100 * (index + 1)}
                    data-aos-offset="0"
                    data-aos-duration="500"
                    className="shadow"
                  >
                    <TourCard tour={tour} />
                  </div>
                </div>
              ))}
              {isNoResult() && (
                <div className="d-grid d-lg-flex  align-items-center justify-between">
                  <div className="text-right">
                    {/* <img
                      src={"/assets/img/custom/no-result.png"}
                      style={{ width: "150px" }}
                    /> */}
                  </div>
                  <div className="text-right xl:w-50 sm:w-100">
                    <h4>لا توجد نتائج لبحثك</h4>
                    <h6 className="mt-20 " dir="rtl">
                      قم بتوسيع نطاق البحث الخاص بك أو استخدم مصطلحات بحث مختلفة
                      للحصول على نتائج أفضل. .
                    </h6>
                  </div>
                </div>
              )}
            </div>
            <Pagination formik={formik} total={_response?.total} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ToursList;
