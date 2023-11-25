"use client";
import { TourCard } from "@/components/common/TourCard";
import { useCustomerFilter } from "@/hooks/use-customer-filter";
import { filterTours } from "@/lib/utils";
import { Tour } from "@/types/custom";
import { useParams, useSearchParams } from "next/navigation";
import { FC, FunctionComponent, useMemo } from "react";
import SortAndCount from "../filter/sort-and-count";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Trash } from "lucide-react";

interface TourListingClientProps {
  tours: Tour[];
}

const TourListingClient: FunctionComponent<TourListingClientProps> = ({
  tours,
}) => {
  const searchParams = useSearchParams();
  const setTotal = useCustomerFilter((x) => x.onSetTotal);
  const currentTours = useMemo(() => {
    var result = filterTours(
      {
        country: searchParams?.get("country") as string,
        days: searchParams?.get("days") as string,
        type: searchParams?.get("type") as string,
        sortMemebr: searchParams?.get("sortMemebr"),
        maxprice: searchParams?.get("maxprice") as any,
        sortOrder: searchParams?.get("sortOrder") as any,
      },
      tours
    );
    setTotal(result.length);
    return result;
  }, [searchParams, tours]);
  return (
    <div>
      <div className="mt-2">
        <SortAndCount />
      </div>

      <div
        className="pt-5 max-w-full mx-auto  container min-w-lg overflow-hidden"
        style={{ marginTop: 5 }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          id="top-list-2"
        >
          {currentTours?.map((tour, index) => (
            <div key={index}>
              <div
                key={tour?.id}
                data-aos={`${
                  (index + 1) % 2 == 0 ? "fade-left" : "fade-right"
                }`}
                data-aos-anchor="#top-list-2"
                data-aos-delay={100 * (index + 1)}
                data-aos-offset="0"
                data-aos-duration="500"
                className="shadow"
              >
                <TourCard tour={tour} />
              </div>
            </div>
          ))}
          {currentTours.length == 0 && (
            <div className="grid   items-center justify-star">
              <div className="text-right"></div>
              <div className="text-right xl:w-1/2 sm:w-full">
                <h4>لا توجد نتائج لبحثك</h4>
                <h6 className="mt-5 mb-4" dir="rtl">
                  قم بتوسيع نطاق البحث الخاص بك أو استخدم مصطلحات بحث مختلفة
                  للحصول على نتائج أفضل. .
                </h6>
                <Button
                  startContent={<Trash className="w-4 h-4" />}
                  as={Link}
                  size="sm"
                  href="/tour-listing"
                  color="danger"
                  variant="flat"
                >
                  حذف الفلتر
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourListingClient;
