import TourList from "@/components/tours/TourList";
import { IContentResponse, ITourResponse } from "@/models/interface/Response";
import ContentService from "@/services/ContentService";
import { AxiosResponse } from "axios";
import { Metadata } from "next";

export const revalidate = 60000;
async function getInfo() {
  const res =
    (await ContentService.readContent()) as AxiosResponse<IContentResponse>;
  return res.data?.content?.allTours;
}
export async function generateMetadata(): Promise<Metadata> {
  const contet = await getInfo();
  return {
    title: contet.seoTitle,
    description: contet.seoDescription,
    keywords: contet.seoTags,
  };
}
export default async function ToursList() {
  return <TourList />;
}
