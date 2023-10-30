import { DataTable } from "@/components/table/data-table";
import { columns, filterOptions, selectOptions } from "./columns";
import { Response, Tour } from "@/types/custom";
import { Order, SearchQuery } from "@/types/search";
import { REVALIDATE_TOUR_LIST } from "@/lib/keys";
import { http } from "@/services/httpService";

export default async function TourPage() {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [{ MemberName: "id", SortOrder: Order.DESC }],
    PageIndex: 0,
    PageSize: 1000,
    Select: "*,tour_type(*)",
    Table: "tour",
  };
  const data = await http<Response<Tour>>("/api/search", {
    revalidate: 86400,
    tags: [REVALIDATE_TOUR_LIST],
  }).post(_SQ);

  return (
    <div>
      <div className=" h-full flex-1 flex-col space-y-8 p-8 flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h1 className="text-xl">Tours </h1>
            <p className="text-muted-foreground">
              Here&apos;s a list of your products!
            </p>
          </div>
        </div>
        <DataTable
          data={data.results ?? []}
          columns={columns}
          filters={filterOptions}
          selects={selectOptions}
        />
      </div>
    </div>
  );
}
