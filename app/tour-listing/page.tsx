import Filter from "@/components/filter/filter";
import TopBreadCrumb from "@/components/tours/TopBreadCrumb";

import TourList from "@/components/tours/TourList";
import { TourListLoading } from "@/components/tours/tourList-loading";
import { getContentData } from "@/lib/operations";
import { Suspense } from "react";

export async function generateMetadata() {
  const data = await getContentData();
  return {
    title: data?.best_tours?.seo?.title,
    description: data?.best_tours?.seo?.description,
    keywords: data?.best_tours?.seo?.tags || "",
  };
}
const data = [
  {
    title: "الرحلات السياحية",
    current: true,
  },
];

const Destination = async () => {
  return (
    <div>
      <TopBreadCrumb breads={data} />
      <div className="border-t grid gap-y-5">
        <Filter onChange={true} />
      </div>
      <Suspense
        fallback={
          <div className=" max-w-full mx-auto sm:px-4 md:px-0 container min-w-lg">
            <div className="pt-5" style={{ marginTop: 5 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TourListLoading columns={9} />
              </div>
            </div>
          </div>
        }
      >
        {/* @ts-expect-error Server Component */}
        <TourList />
      </Suspense>
    </div>
  );
};

export default Destination;
