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
    name: "التأشيرات السياحية",
    routePath: "/visa",
  },
  {
    name: "آراء العملاء",
    routePath: "https://g.page/r/CWgTbqzP98c9EAI/review",
    external: true,
  },
  {
    name: "عن ابريل تورز",
    routePath: "/about-us",
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
    name: "التأشيرات السياحية",
    routePath: "/visa",
  },
  {
    name: "آراء العملاء",
    routePath: "https://g.page/r/CWgTbqzP98c9EAI/review",
    external: true,
  },
  {
    name: "عن ابريل تورز",
    routePath: "/about-us",
  },
];
