import { getTours } from "@/lib/operations";
import { Tour } from "@/types/custom";
import { Avatar, Button, Card } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { useQuery } from "react-query";

interface TourSameTypesProps {
  tour: Tour;
}

const TourSameTypes: FunctionComponent<TourSameTypesProps> = ({ tour }) => {
  const { data } = useQuery("Same-Type", async () => await getTours(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data
        .filter((x) => x.type_id == tour.type_id && x.name !== tour.name)
        .slice(0, 7);
    },
  });
  return (
    <Card className="rounded-sm p-3">
      <div className="mb-2 text-light-1 text-center">
        <span className="text-xl mb-2 fw-500 text-dark-1 ">
          رحلات من نفس النوع{" "}
        </span>
      </div>
      <div className="divide-y-2">
        {data?.map((tour) => (
          <div className="flex justify-between items-end mb-1" key={tour.id}>
            <div className="flex gap-2 items-center py-5">
              <Avatar
                alt={tour.name}
                className="flex-shrink-0"
                size="sm"
                src={
                  tour.images && tour.images.length > 0 ? tour.images[0] : ""
                }
              />
              <div className="flex flex-col">
                <span className="text-small">{tour.name}</span>
                <span className="text-tiny text-default-400">
                  {tour.start_day?.join(" ، ")}
                </span>
              </div>
            </div>
            <Button
              as={Link}
              href={`/tour/${tour.slug}`}
              color="primary"
              variant="bordered"
              endContent={<ArrowLeft />}
              size="sm"
            >
              عرض
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TourSameTypes;
