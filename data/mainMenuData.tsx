import DestinationMenu from "@/components/header/DestinationMenu";

export const homeItems = [
  {
    name: "الرئيسية",
    routePath: "/",
  },
  {
    name: "الوجهات السياحية",
    routePath: "/tour-listing",
    renderMenu: DestinationMenu,
  },
  {
    name: "خدماتنا",
    routePath: "/our-services",
  },
  {
    name: "عن ابريل تورز",
    routePath: "/about-us",
  },
  {
    name: "آراء العملاء",
    routePath: "https://g.page/r/CWgTbqzP98c9EAI/review",
    external: true,
  },
];

export const MobileHomeItems = [
  {
    name: "الرئيسية",
    routePath: "/",
  },
  {
    name: "الوجهات السياحية",
    routePath: "/tour-listing",
  },
  {
    name: "خدماتنا",
    routePath: "/our-services",
  },
  {
    name: "عن ابريل تورز",
    routePath: "/about-us",
  },
  {
    name: "آراء العملاء",
    routePath: "https://g.page/r/CWgTbqzP98c9EAI/review",
    external: true,
  },
];
