import TourInfo from "@/components/tours/TourInfo";
import { getTours } from "@/lib/operations";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";

export async function generateStaticParams() {
  const response = await getTours();
  if (response && response.length > 0) {
    return response
      .filter((x) => x.is_active)
      .map((tour) => ({
        slug: `${tour.slug}`,
      }));
  }
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const response = await getTours();
  const tour = response?.find(
    (x) => x.slug == decodeURIComponent(slug) && x.is_active
  );
  if (tour) {
    return {
      title: tour?.seo?.title,
      description: tour?.seo?.description,
      openGraph: {
        title: tour?.seo?.title || "",
        description: tour?.seo?.description || "",
        type: "website",
        images: tour.images ?? [],
        siteName: "April Tours",
      },
      keywords: tour.seo?.tags || "",
    };
  }
  return {
    title: "Error - Tour not found ",
  };
}
export default async function Tour({ params }: { params: { slug: string } }) {
  const tour = (await getTours()).find(
    (s) => s.slug == decodeURIComponent(params.slug) && s.is_active
  );
  if (!tour) return notFound();
  return <TourInfo tour={tour} />;
}
