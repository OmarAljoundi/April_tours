import { getDestination } from "@/lib/operations";
import { Metadata } from "next";
import TourList from "@/components/tours/TourList";
import { Suspense } from "react";
import { TourListLoading } from "@/components/tours/tourList-loading";
import TopBreadCrumb from "@/components/tours/TopBreadCrumb";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const response = await getDestination();
  if (response.success && response.results && response.results.length > 0) {
    return response.results
      .filter((x) => x.is_active)
      .map((dest) => ({
        destination: `${dest.slug}`,
      }));
  }
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: { destination: string };
}): Promise<Metadata> {
  const slug = params.destination;
  const response = await getDestination();
  const destination = response?.results?.find(
    (x) => x.slug == decodeURIComponent(slug) && x.is_active
  );
  if (destination) {
    return {
      title: destination?.seo?.title,
      description: destination?.seo?.description,
      openGraph: {
        title: destination?.seo?.title || "",
        description: destination?.seo?.description || "",
        type: "website",
        images: [destination.image ?? ""],
        siteName: "April Tours",
      },
      keywords: destination.seo?.tags || "",
    };
  }
  return {
    title: "Error - Destination not found ",
  };
}

export default async function DestinationPage({
  params,
  searchParams,
}: {
  params: { destination: string };
  searchParams: any;
}) {
  const destination = (await getDestination()).results?.find(
    (x) => x.slug == decodeURIComponent(params.destination) && x.is_active
  );
  if (!destination) {
    return notFound();
  }
  const data = [
    {
      title: "الرحلات السياحية",
      href: "/tour-listing",
    },
    {
      title: destination?.name,
      current: true,
    },
  ];
  return (
    <div className="container">
      <TopBreadCrumb breads={data} />
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
        <TourList destination={params.destination} />
      </Suspense>
    </div>
  );
}
