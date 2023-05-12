import { ICustomer, eCustomerStatus } from "@/models/interface/Customer";
import { CountriesSearch } from "@/models/interface/HeaderSearch";

export const layoutConstant = {
  topbarHeight: 30,
  headerHeight: 90,
  mobileNavHeight: 64,
  containerWidth: 1200,
  mobileHeaderHeight: 64,
  grocerySidenavWidth: 280,
};
export const navbarNavigations = [
  {
    title: "الرئيسية",
    url: "/",
    megaMenu: false,
    megaMenuWithSub: false,
  },
  {
    title: "الوجهات السياحية",
    url: "/shop",
    megaMenu: false,
    megaMenuWithSub: false,
  },
  {
    title: "عن أدفايزر",
    url: "/shop?others0=onsale",
    megaMenu: false,
    megaMenuWithSub: false,
  },
  {
    title: "خدماتنا",
    url: "/our-story",
    megaMenu: false,
    megaMenuWithSub: false,
  },
  {
    title: "اتصل بنا",
    url: "/blogs",
    megaMenu: false,
    megaMenuWithSub: false,
  },
];

export const countriesForSearch: CountriesSearch[] = [
  {
    label: "المانيا",
    value: "المانيا",
    code: "GE",
  },
  {
    label: "النمسا",
    value: "النمسا",
    icon: "flag flag-austria",
    name: "countries.value",
  },
  {
    label: "سويسرا",
    value: "سويسرا",
    icon: "flag flag-switzerland",
    name: "countries.value",
  },
  {
    label: "ايطاليا",
    value: "ايطاليا",
    icon: "flag flag-italy",
    name: "countries.value",
  },

  {
    label: "فرنسا",
    value: "فرنسا",
    icon: "flag flag-france",
    name: "countries.value",
  },
  {
    label: "التشيك",
    value: "التشيك",
    icon: "flag flag-czech-republic",
    name: "countries.value",
  },
  {
    label: "بريطانيا",
    value: "بريطانيا",
    icon: "flag flag-england",
    name: "countries.value",
  },
  {
    label: "هولندا",
    value: "هولندا",
    icon: "flag flag-netherlands",
    name: "countries.value",
  },
  {
    label: "تركيا",
    value: "تركيا",
    icon: "flag flag-turkey",
    name: "countries.value",
  },
  {
    label: "النرويج",
    value: "النرويج",
    icon: "flag flag-norway",
    name: "countries.value",
  },
  {
    label: "اسبانيا",
    value: "اسبانيا",
    icon: "flag flag-spain",
    name: "countries.value",
  },
  {
    label: "البوسنة والهرسك",
    value: "البوسنة والهرسك",
    icon: "flag flag-bosnia",
    name: "countries.value",
  },
  {
    label: "المجر",
    value: "المجر",
    icon: "flag flag-hungary",
    name: "countries.value",
  },
  {
    label: "تونس",
    value: "تونس",
    icon: "flag flag-tunisia",
    name: "countries.value",
  },

  {
    label: "بلجيكيا",
    value: "بلجيكيا",
    icon: "flag flag-belgium",
    name: "countries.value",
  },
  {
    label: "الدنمارك",
    value: "الدنمارك",
    icon: "flag flag-denmark",
    name: "countries.value",
  },
  {
    label: "البرتغال",
    value: "البرتغال",
    icon: "flag flag-portugal",
    name: "countries.value",
  },
  {
    label: "السويد",
    value: "السويد",
    icon: "flag flag-sweden",
    name: "countries.value",
  },

  {
    label: "فيلندا",
    value: "فيلندا",
    icon: "flag flag-finland",
    name: "countries.value",
  },

  {
    label: "استونيا",
    value: "استونيا",
    icon: "flag flag-estonia",
    name: "countries.value",
  },

  {
    label: "اليونان",
    value: "اليونان",
    icon: "flag flag-greece",
    name: "countries.value",
  },

  {
    label: "سكوتلندا",
    value: "سكوتلندا",
    icon: "flag flag-scotland",
    name: "countries.value",
  },
  {
    label: "ايرلندا",
    value: "ايرلندا",
    icon: "flag flag-ireland",
    name: "countries.value",
  },

  {
    label: "اندونيسيا",
    value: "اندونيسيا",
    icon: "flag flag-indonesia",
    name: "countries.value",
  },
  {
    label: "ماليزيا",
    value: "ماليزيا",
    icon: "flag flag-malaysia",
    name: "countries.value",
  },
  {
    label: "سيرلنكا ",
    value: "سيرلنكا ",
    icon: "flag flag-sri-lanka",
    name: "countries.value",
  },
  {
    label: "المالديف",
    value: "المالديف",
    icon: "flag flag-maldives",
    name: "countries.value",
  },

  {
    label: "مالطا",
    value: "مالطا",
    icon: "flag flag-malta",
    name: "countries.value",
  },
  {
    label: "كرواتيا",
    value: "كرواتيا",
    icon: "flag flag-croatia",
    name: "countries.value",
  },
  {
    label: "تايلند",
    value: "تايلند",
    icon: "flag flag-thailand",
    name: "countries.value",
  },

  {
    label: "اذربيجان",
    value: "اذربيجان",
    icon: "flag flag-azerbaijan",
    name: "countries.value",
  },
  {
    label: "جورجيا",
    value: "جورجيا",
    icon: "flag flag-georgia",
    name: "countries.value",
  },
];

export const periodForSearch = [
  { label: "من 5 إلى 7 أيام", min: 5, max: 7 },
  { label: "من 8 إلى 10 أيام", min: 8, max: 10 },
  {
    label: "من 11 إلى 20 أيام",
    min: 11,
    max: 20,
  },
];

export const PriceRangeForSearch = [
  {
    label: "Less Than $200",
    min: 0,
    max: 200,
  },
  {
    label: "$200 - $400",
    min: 200,
    max: 400,
  },
  {
    label: "$400 - $800",
    min: 400,
    max: 800,
  },
  {
    label: "More Than $800",
    min: 800,
    max: 0,
  },
];

export const durationOptions = [
  { label: "كل يوم" },
  { label: "السبت" },
  { label: "الأحد" },
  { label: "الإثنين" },
  { label: "الثلاثاء" },
  { label: "الأربعاء" },
  { label: "الخميس" },
  { label: "الجمعة" },
];

export const DaysArranged = [
  "اليوم الأول",
  "اليوم الثاني",
  "اليوم الثالث",
  "اليوم الرابع",
  "اليوم الخامس",
  "اليوم السادس",
  "اليوم السابع",
  "اليوم الثامن",
  "اليوم التاسع",
  "اليوم العاشر",
  "اليوم الأحد عشر",
  "اليوم الثاني عشر",
  "اليوم الثالث عشر",
  "اليوم الرابع عشر",
  "اليوم الخامس عشر",
  "اليوم السادس عشر",
  "اليوم السابع عشر",
  "اليوم الثامن عشر",
  "اليوم التاسع عشر",
  "اليوم العشرون",
];

export const __initialValues__Customer: ICustomer = {
  assignedTo: null,
  contactMethod: null,
  createdDate: null,
  email: "",
  id: 0,
  modifiedDate: null,
  name: "",
  notes: "",
  phoneNumber: "",
  status: eCustomerStatus.Pending,
  tourId: 0,
  tour: null,
  user: null,
};
