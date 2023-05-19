import { ITourResponse } from "@/models/interface/Response";
import type { Metadata } from "next";
import TourService from "@/services/TourService";
import TourInfo from "@/components/tours/TourInfo";
import { AxiosResponse } from "axios";
import useApiService from "@/hooks/useApiService";
import { SearchQuery, eFilterOperator } from "@/models/interface/Search";

type Params = {
  params: {
    name: string;
  };
};
async function getInfo(name) {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 0,
  };
  var decoded_name = decodeURIComponent(name);
  _SQ.FilterByOptions.push({
    FilterFor: decoded_name?.replaceAll("-", " "),
    FilterOperator: eFilterOperator.EqualsTo,
    MemberName: "Name",
  });

  const res = (await TourService.searchGeneral(
    _SQ
  )) as AxiosResponse<ITourResponse>;
  return res.data.tour;
}
export async function generateMetadata({ params }): Promise<Metadata> {
  const tour = await getInfo(params.name);
  return {
    title: tour.seoTitle,
    description: tour.seoDescription,
    keywords: tour.seoTag,
  };
}

export default async function Tour({ params: { name } }: Params) {
  const Tour = await getInfo(name);
  return <TourInfo tour={Tour} />;
}
