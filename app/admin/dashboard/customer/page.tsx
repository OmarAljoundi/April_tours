import { DataTable } from "@/components/table/data-table";
import { REVALIDATE_CUSTOMER_LIST } from "@/lib/keys";
import { Customer, Response } from "@/types/custom";
import { SearchQuery } from "@/types/search";
import { columns, filterOptions, selectOptions } from "./columns";
import { http } from "@/services/httpService";
import { supabaseClient } from "@/lib/supabaseClient";

const CustomerPage = async () => {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 1000,
    Select: "*,tour(*)",
    Table: "customer",
  };
  supabaseClient.from("");
  const data = await http<Response<Customer>>("/api/search", {
    revalidate: 86400,
    tags: [REVALIDATE_CUSTOMER_LIST],
  }).post(_SQ);

  return (
    <div>
      <div className=" h-full flex-1 flex-col space-y-8 p-8 flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <p className="text-muted-foreground">
              Here&apos;s a list of your customers!
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
};

export default CustomerPage;
