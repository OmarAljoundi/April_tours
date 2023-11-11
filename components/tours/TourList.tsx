import { getDestination, getTours } from "@/lib/operations";
import { Tour } from "@/types/custom";
import { redirect } from "next/navigation";
import TourListingClient from "./TourListClient";

export default async function TourList({
  destination,
  tab,
}: {
  destination?: string;
  tab?: string;
}) {
  let tours: Tour[] = [];

  const _destination = await getDestination();
  const currentDest = _destination.results?.find(
    (x) => x.slug == decodeURIComponent(destination)
  );

  if (destination && tab) {
    const attr = currentDest?.location_attributes?.find(
      (x) => x.title == decodeURIComponent(tab.replaceAll("-", " "))
    );

    let response = (await getTours()).filter((x) => x.is_active);

    tours = response?.filter((m) =>
      attr?.location_tours?.map((x) => x.tour_id!).includes(m.id!)
    );
  } else if (destination) {
    let tours_ids: number[] = [];

    if (
      currentDest?.location_attributes &&
      currentDest.location_attributes.length >= 2
    ) {
      var sorted = currentDest.location_attributes.sort(
        (a, b) => a.order - b.order
      );
      redirect(`${destination}/${sorted[0].title!.replaceAll(" ", "-")}`);
    }

    currentDest?.location_attributes?.map((x) => {
      tours_ids = [
        ...tours_ids,
        ...(x.location_tours?.map((g) => g.tour_id) ?? []),
      ];
    });

    let response = (await getTours()).filter((x) => x.is_active);

    tours = response?.filter((m) => tours_ids.includes(m.id!));
  } else {
    tours = (await getTours()).filter((x) => x.is_active);
  }

  return (
    <div>
      <TourListingClient tours={tours} />
    </div>
  );
}
