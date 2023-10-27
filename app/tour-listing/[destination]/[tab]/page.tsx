import TopBreadCrumb from "@/components/tours/TopBreadCrumb";
import ToursList from "@/components/tours/TourList";
import Tabs from "@/components/tours/tabs";
import { TourListLoading } from "@/components/tours/tourList-loading";
import { getDestination } from "@/lib/operations";
import { Metadata } from "next";
import { Suspense } from "react";

// export async function generateStaticParams() {
//   const response = await getDestination();
//   var results: { destination: string; tab: string }[] = [];

//   response?.results?.map((dest) => {
//     if (dest.location_attributes && dest.location_attributes.length > 1) {
//       dest.location_attributes?.map((attr) => {
//         results.push({
//           destination: dest.slug!,
//           tab: attr.title!.replaceAll(" ", "-"),
//         });
//       });
//     }
//   });

//   return results;
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { destination: string; tab: string };
// }): Promise<Metadata> {
//   const destinationSlug = params.destination;
//   const response = await getDestination();
//   const destination = response?.results?.find(
//     (x) => x.slug == decodeURIComponent(destinationSlug)
//   );
//   const tab = destination?.location_attributes?.find(
//     (x) => x.title?.replaceAll(" ", "-") == decodeURIComponent(params.tab)
//   );
//   if (tab) {
//     return {
//       title: tab?.seo?.title,
//       description: tab?.seo?.description,
//       openGraph: {
//         title: tab?.seo?.title || "",
//         description: tab?.seo?.description || "",
//         type: "website",
//         siteName: "April Tours",
//       },
//       keywords: tab.seo?.tags || "",
//     };
//   }
//   return {
//     title: "Error - Destination Section not found ",
//   };
// }

export default async function TabPage({
  params,
}: {
  params: { destination: string; tab: string };
}) {
  const _destination = await getDestination();
  const currentDest = _destination.results?.find(
    (x) => x.slug == decodeURIComponent(params.destination)
  );

  const data = [
    {
      title: "الرحلات السياحية",
      href: "/tour-listing",
    },
    {
      title: currentDest.name,
      href: `/tour-listing/${currentDest.slug}`,
    },
    {
      title: decodeURIComponent(params.tab).replaceAll("-", " "),
      current: true,
    },
  ];
  return (
    <div className="container">
      <TopBreadCrumb breads={data} />
      {currentDest?.location_attributes &&
        currentDest?.location_attributes.length > 1 && (
          <div className="border-t ">
            <Tabs
              currentTab={decodeURIComponent(params.tab)}
              tabList={currentDest?.location_attributes ?? []}
            />
          </div>
        )}
      <div className="min-h-[800px]">
        <Suspense
          fallback={
            <div className=" max-w-full mx-auto sm:px-4 md:px-0 container min-w-lg ">
              <div className="pt-5" style={{ marginTop: 5 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <TourListLoading columns={9} />
                </div>
              </div>
            </div>
          }
        >
          {/* @ts-expect-error Server Component */}
          <ToursList destination={params.destination} tab={params.tab} />
        </Suspense>
      </div>
    </div>
  );
}
