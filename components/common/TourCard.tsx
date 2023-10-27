import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { BlurImage } from "./BlurImage";
import { Tour } from "@/types/custom";
import { Button, Card, Chip } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";

export const TourCard: FC<{ tour: Tour }> = ({ tour }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) setMount(true);
  }, [mount]);

  if (!mount) return null;

  return (
    <Card className="package-card-alpha">
      <div className="package-thumb relative">
        <Link
          scroll={false}
          as={`/tour/${tour.slug}`}
          href={`/tour/${tour.slug}`}
          style={{ height: "270px", overflow: "hidden", display: "block" }}
        >
          <BlurImage
            image={
              tour.images && tour.images.length > 0
                ? tour.images[0]
                : "/images/placeholder.svg"
            }
            loading="eager"
            priority="low"
          />
        </Link>

        <p className="card-lavel">
          <span className=""> أيام +{tour?.number_of_days}</span>
          <i className="bi bi-clock"></i>{" "}
        </p>
      </div>
      <div className="tourCard__content mt-3 px-2 py-1 relative">
        <p className="card-lavel-type">
          <div className="grid p-1" style={{ justifyItems: "center" }}>
            <div>
              <Image
                src={tour.tour_type?.image}
                alt={tour.tour_type?.name}
                width={40}
                height={40}
                quality={100}
                loading="eager"
                fetchPriority="low"
              />
            </div>
            <div className="text-10">{tour.tour_type?.name}</div>
          </div>
        </p>
        <div className="w-full p-3">
          <div className="grid ">
            <div className="text-ellipsis overflow-hidden line-clamp-1 max-w-[calc(100%-40px)]">
              <span className="text-base">{tour?.name}</span>
            </div>
            <div className="flex items-center lh-14 justify-start mb-1">
              <div className="text-14 text-light-1">
                {tour?.tour_type?.name}
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-start gap-2 mt-2">
                {(!tour.start_day || tour.start_day.length == 0) && (
                  <Chip color="primary" className="rounded-md">
                    كل يوم
                  </Chip>
                )}
                {tour.start_day?.map((i, index) => (
                  <Chip color="primary" className="rounded-md" key={index}>
                    {i}
                  </Chip>
                ))}
              </div>
              <div className="flex justify-start gap-2 mt-3 flex-wrap">
                {tour.tour_countries.slice(0, 2).map((i, index) => (
                  <Chip
                    key={index}
                    className="rounded-md"
                    size="md"
                    color="secondary"
                  >
                    {i}
                  </Chip>
                ))}
                {tour.tour_countries.length > 2 && (
                  <Chip className="rounded-md" size="md" color="secondary">
                    {tour.tour_countries.length - 2} +
                  </Chip>
                )}
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div className="mb-3">
                <Button
                  as={Link}
                  color="primary"
                  href={`/tour/${tour.slug}`}
                  endContent={<ArrowLeft />}
                >
                  عرض التفاصيل
                </Button>
              </div>
              <div className="text-right  mt-2  mb-2">
                <div className="text-12 text-light-1 ">إبتداء من </div>
                <div className="text-18  lh-12 fw-600  mt-1">
                  USD {tour?.price_double}
                </div>
                <div className="text-14 text-light-1 ">للغرفة المزدوجة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
