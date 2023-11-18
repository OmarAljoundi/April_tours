import TourForm from "@/components/tour-form";
import { getTours } from "@/lib/operations";
import { notFound } from "next/navigation";

export default async function DublicateTourPage({
  params,
}: {
  params: { tourId: string };
}) {
  const tour = (await getTours())?.find((x) => x.id == Number(params.tourId));

  if (!tour) {
    return notFound();
  }
  delete tour.tour_type;
  delete tour.id;
  delete tour.created_at;

  return (
    <div className="px-8">
      <div className="flex justify-between">
        <h1 className="text-3xl mt-4"> {tour?.name}</h1>
      </div>
      <TourForm data={tour} />
    </div>
  );
}
