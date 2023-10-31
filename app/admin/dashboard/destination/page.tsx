"use client";
import { REVALIDATE_LOCATION_LIST } from "@/lib/keys";
import { Separator } from "@/components/ui/separator";
import CardAdd from "@/shared/card-add";
import CardDetails from "./card-detalis";
import { useQuery } from "react-query";
import { getDestination } from "@/lib/operations";

const DestinationPage = () => {
  const { data } = useQuery(
    [REVALIDATE_LOCATION_LIST],
    async () => await getDestination()
  );
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
          {data?.results
            ?.sort((a, b) => a.image?.order - b.image?.order)
            .map((location) => (
              <CardDetails {...location} key={location.id} />
            ))}
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default DestinationPage;
