import TourForm from "@/components/tour-form";
import { http } from "@/services/httpService";
import { Response, Tour } from "@/types/custom";
import { SearchQuery, eFilterOperator } from "@/types/search";
import { formatDistance, subDays } from "date-fns";
import { notFound } from "next/navigation";

export default async function EditTourPage({
  params,
}: {
  params: { tourId: string };
}) {
  var _SQ: SearchQuery = {
    FilterByOptions: [
      {
        FilterFor: params.tourId,
        FilterOperator: eFilterOperator.EqualsTo,
        MemberName: "id",
      },
    ],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 1,
    Table: "tour",
    Select: "*",
  };
  const response = await http<Response<Tour>>("/api/search", {
    revalidate: 0,
  }).post(_SQ);

  if (response.success == false) {
    return notFound();
  }
  return (
    <div className="px-8">
      <div className="flex justify-between">
        <h1 className="text-3xl mt-4"> {response?.result?.name}</h1>
        <h1 className="text-3xl mt-4">
          {" "}
          {formatDistance(
            subDays(new Date(response.result!.created_at!), 0),
            new Date(),
            { addSuffix: true }
          )}
        </h1>
      </div>
      <TourForm data={response.result} />
    </div>
  );
}
