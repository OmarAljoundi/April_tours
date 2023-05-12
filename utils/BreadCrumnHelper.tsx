import { link } from "fs";

export type TopBreadCrumbProp = {
  label: string;
  link?: string;
};

export const BuildBreadCrumb = (
  current: string,
  destination?: string
): TopBreadCrumbProp[] => {
  var breadCrumbList: TopBreadCrumbProp[] = [];
  breadCrumbList.push({
    label: "الرئيسية",
    link: "/",
  });

  if (destination) {
    breadCrumbList.push({
      label: destination.replaceAll("-", " "),
      link: `/destination/${destination}`,
    });
  }
  if (current) {
    breadCrumbList.push({
      label: current.replaceAll("-", " "),
    });
  }

  return breadCrumbList;
};
