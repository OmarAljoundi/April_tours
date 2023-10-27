import { REVALIDATE_LOCATION_LIST } from "@/lib/keys";
import { http } from "@/services/httpService";
import { Location, Response } from "@/types/custom";
import { Order, SearchQuery } from "@/types/search";
import { Separator } from "@/components/ui/separator";
import CardAdd from "@/shared/card-add";
import CardDetails from "./card-detalis";

const DestinationPage = async () => {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [{ MemberName: "created_at", SortOrder: Order.DESC }],
    PageIndex: 0,
    PageSize: 1000,
    Select: "*,location_attributes(*,location_tours(*))",
    Table: "location",
  };
  const data = await http<Response<Location>>("/api/search", {
    revalidate: 86400,
    tags: [REVALIDATE_LOCATION_LIST],
  }).post(_SQ);
  return (
    <div className=" lg:px-4 ">
      <div className=" h-full flex-1 flex-col space-y-8 p-8 flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h1 className="text-xl">Customer Destinations</h1>
            <p className="text-muted-foreground text-sm">
              Here&apos;s a list of your customer destinations!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-x-4 gap-y-8">
          <CardAdd
            trigger="onOpenDestination"
            title="Click to create new customer destination"
          />
          {data?.results.map((location) => (
            <CardDetails {...location} key={location.id} />
          ))}
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default DestinationPage;
