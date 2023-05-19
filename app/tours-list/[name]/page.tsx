import { ITourResponse } from "@/models/interface/Response";
import type { GetStaticProps, Metadata } from "next";
import TourService from "@/services/TourService";
import TourInfo from "@/components/tours/TourInfo";
import { AxiosResponse } from "axios";
import useApiService from "@/hooks/useApiService";
import { SearchQuery, eFilterOperator } from "@/models/interface/Search";
import { ITour } from "@/models/interface/Tour";
import { ParsedUrlQuery } from "querystring";
type Params = {
  params: {
    name: string;
  };
};
async function getInfo(name?: string) {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 0,
  };
  if (name) {
    var decoded_name = decodeURIComponent(name);
    _SQ.FilterByOptions.push({
      FilterFor: decoded_name?.replaceAll("-", " "),
      FilterOperator: eFilterOperator.EqualsTo,
      MemberName: "Name",
    });
  }

  const res = (await TourService.searchGeneral(
    _SQ
  )) as AxiosResponse<ITourResponse>;
  return name ? res.data.tour : res.data.tours;
}
export async function generateMetadata({ params }): Promise<Metadata> {
  const tour = (await getInfo(params.name)) as ITour;
  return {
    title: tour.seoTitle,
    description: tour.seoDescription,
    keywords: tour.seoTag,
  };
}

export default async function Tour({ tour }) {
  return <TourInfo tour={tour} />;
}

interface Param extends ParsedUrlQuery {
  name: string;
}
type Props = {
  tour: ITour;
};

export const getStaticProps: GetStaticProps<Props, Param> = async (context) => {
  const params = context.params!; // ! is a non-null assertion
  const tour = (await getInfo(params?.name)) as any;
  return {
    props: {
      tour,
    },
    revalidate: 1,
  };
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const _tours = await getInfo();
  const paths = (_tours as ITour[]).map((t) => ({
    params: { name: t.name.replaceAll(" ", "-") },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: true };
}
