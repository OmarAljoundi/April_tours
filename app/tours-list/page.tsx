import Pagination from "@/components/common/Pagination";
import { TourCard } from "@/components/common/TourCard";
import TopHeaderFilter from "@/components/tours/TopHeaderFilter";
import TourList from "@/components/tours/TourList";
import { TourListLoading } from "@/components/tours/tourList-loading";
import useApiService from "@/hooks/useApiService";
import { HeaderSearch } from "@/models/interface/HeaderSearch";
import { IContentResponse, ITourResponse } from "@/models/interface/Response";
import { Order, SearchQuery, eFilterOperator } from "@/models/interface/Search";
import ContentService from "@/services/ContentService";
import TourService from "@/services/TourService";
import {
  PriceRangeForSearch,
  countriesForSearch,
  periodForSearch,
} from "@/utils/Constant";
import { AxiosResponse } from "axios";
import { Metadata } from "next";

async function getInfo() {
  const res =
    (await ContentService.readContent()) as AxiosResponse<IContentResponse>;
  return res.data?.content?.allTours;
}
export async function generateMetadata(): Promise<Metadata> {
  const contet = await getInfo();
  return {
    title: contet.seoTitle,
    description: contet.seoDescription,
    keywords: contet.seoTags,
  };
}
export default async function ToursList({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  const getInitHeaderSearch = () => {
    var contries = searchParams?.countries;
    var durations = searchParams?.durations;
    var types = searchParams?.types;
    var page = searchParams?.pageIndex;
    var priceMax = searchParams?.price_max;
    var priceMin = searchParams?.price_min;
    var days = searchParams?.days;
    var initHeader: HeaderSearch = {
      countries: contries
        ? countriesForSearch.filter((o) => contries.includes(o.label))
        : null,
      period: durations
        ? periodForSearch.filter((o) => durations.includes(o.label))
        : null,
      types: types ? types.split("+") : null,
      pageIndex: page ? Number(page) : 0,
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

  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 12,
  };

  const { countries, period, types, price, days, pageIndex, pageSize } =
    getInitHeaderSearch();

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
      FilterFor: types.join("+"),
      FilterOperator: eFilterOperator.EqualsTo,
      MemberName: "types",
    });
  }
  if (days && days.length > 0) {
    _SQ.FilterByOptions.push({
      FilterFor: days.join("+"),
      FilterOperator: eFilterOperator.EqualsTo,
      MemberName: "days",
    });
  }
  if (price.min) {
    _SQ.FilterByOptions.push({
      FilterFor: price.min,
      FilterOperator: eFilterOperator.EqualsTo,
      MemberName: "price_min",
    });
  }
  if (price.max) {
    _SQ.FilterByOptions.push({
      FilterFor: price.max,
      FilterOperator: eFilterOperator.EqualsTo,
      MemberName: "price_max",
    });
  }

  _SQ.OrderByOptions.push({
    MemberName: "Price",
    SortOrder: Order.ASC,
  });

  _SQ.PageIndex = pageIndex == null ? 0 : pageIndex;
  _SQ.PageSize = pageSize;

  try {
    var _resp = (await TourService.searchGeneral(
      _SQ
    )) as AxiosResponse<ITourResponse>;
  } catch (err) {
    console.log("EEEE", err);
  }

  return (
    <TourList
      error={_resp?.data.error}
      message={_resp?.data.message}
      success={_resp?.data.success}
      total={_resp?.data.total}
      tour={_resp?.data.tour}
      tours={_resp?.data.tours}
    />
  );
}
