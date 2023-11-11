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

  const getStartDay = (day: string) => {
    if (day == "كل يوم") {
      return "يومياً";
    }
    return day;
  };
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
          <span className=""> {tour?.number_of_days} أيام</span>
          <i className="bi bi-clock"></i>{" "}
        </p>
      </div>
      <div className="tourCard__content mt-3 px-2 py-1 relative">
        <div className="w-full p-3">
          <div className="grid ">
            <div className="text-ellipsis overflow-hidden line-clamp-1 max-w-[calc(100%-40px)]">
              <span className="text-lg font-bold">{tour?.name}</span>
            </div>
            <div className="text-ellipsis overflow-hidden line-clamp-1 max-w-[calc(100%-40px)]">
              <span className="text-slate-400 text-xs">
                {tour.tour_countries?.join(" ، ")}
              </span>
            </div>
            <div className="text-right  mt-2  mb-2">
              <span className="font-bold">
                إبتداء من USD {tour?.price_double}
              </span>
              <span className=" text-slate-400"> / </span>
              <span className="text-xs text-slate-400">للغرفة المزدوجة</span>
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
              <div
                className="grid justify-items-center p-2 rounded-medium shadow-medium bg-[#3093d02b]"
                style={{ justifyItems: "center" }}
              >
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
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
