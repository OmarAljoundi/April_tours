"use client";
import { FunctionComponent } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "../our-services/services-card";

interface WhyUsProps {}

const data = [
  {
    image: "/assets/img/custom/خبرة عالية.png",
    title: "خبرة عالية",
    description:
      "ابريل تورز تمتاز بالخبرة والفهم العميق للعملاء، وهذا يتيح لنا تقديم تجارب سياحية مميزة وفريدة حول أنحاء العالم.",
  },
  {
    image: "/assets/img/custom/عروض متنوعة.png",
    title: "عروض متنوعة",
    description:
      "ابريل تورز نقدم مجموعة متنوعة من الخدمات السياحية، بما في ذلك حجز تذاكر الطيران، وحجز الفنادق، وجولات سياحية. هذا يتيح للعملاء اختيار الخدمات التي تناسب احتياجاتهم.",
  },
  {
    image: "/assets/img/custom/خدمة مخصصة.png",
    title: "خدمة مخصصة",
    description:
      "ابريل تورز تقدم خدمة مخصصة مع اهتمام كامل بتفاصيل الرحلة. يمكن للعملاء التعاون مع موظفي الشركة لتصميم رحلات سياحية حسب الطلب تناسب اهتماماتهم الخاصة.",
  },
  {
    image: "/assets/img/custom/جودة عالية.png",
    title: "جودة عالية",
    description:
      "ابريل تورز تهتم بضمان الجودة العالية في جميع جوانب الخدمة، بدءًا من اختيار الفنادق وصولاً إلى ترتيب النقل والجولات السياحية.",
  },
  {
    image: "/assets/img/custom/تقديم الدعم.png",
    title: "تقديم الدعم",
    description:
      "ابريل تورز تقدم دعمًا مستمرًا للعملاء طوال فترة رحلتهم، مما يجعل السفر أمرًا مريحًا وبلا قلق.",
  },
  {
    image: "/assets/img/custom/سمعة طيبة.png",
    title: "سمعة طيبة",
    description:
      "ابريل تورز  تتمتع بسمعة طيبة في السوق وتحظى بتقدير العملاء السابقين، مما يجعلها اختيارًا شهيرًا وموثوقًا به.",
  },
];
const WhyUs: FunctionComponent<WhyUsProps> = () => {
  return (
    <div className="px-2 md:px-8 mt-10 !mb-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        لماذا <span className="text-secondary ">ابريل تورز؟ </span>
      </h1>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((item, index) => (
          <div
            data-aos="fade"
            data-aos-delay={"100"}
            className="h-full"
            key={index}
          >
            <ServiceCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
