"use client";
import { FunctionComponent } from "react";
import ServiceCard from "./services-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Separator } from "@/components/ui/separator";

interface ServicesProps {}

const data = [
  {
    image: "/assets/img/custom/airplane-ticket.png",
    title: "تذاكر طيران",
    description:
      "يوجد لدينا قسم خاص مختص بتذاكر الطيران و نتميز بأسعار مميزة و عروض طيلة العام الى جميع أنحاء العالم.",
  },
  {
    image: "/assets/img/custom/five-stars.png",
    title: "حجوزات فندقية",
    description:
      "نتعاون مع شبكة واسعة من الفنادق حولة العالم لضمان توفير الاقامة المريحة والمناسبة لميزانية العملاء.",
  },
  {
    image: "/assets/img/custom/taxi-front-view.png",
    title: "نقل ومواصلات",
    description:
      "نوفر لكم وسائل نقل موثوقة ومريحة خلال رحلاتكم السياحية. ، يتم تنظيم نقل من وإلى المطارات والفنادق بكفاءة عالية. ",
  },
  {
    image: "/assets/img/custom/visa.png",
    title: "تأشيرات سياحية",
    description:
      " تختلف إجراءات التقديم والمستندات المطلوبة من دولة إلى أخرى، لذلك من الأفضل الحصول على مساعدة مهنية للحصول على افيزا سياحية للوجهة المطلوبة",
  },
  {
    image: "/assets/img/custom/insurance.png",
    title: "تأمين سفر",
    description:
      "متعة السفر وزيارة بلدان جديدة لا يضاهيها أي متعة لذلك عند التحضير لأي رحلة جديدة نوفر لك خدمة الحصول على تأمين السفر بكل راحة. ",
  },
];

const Services: FunctionComponent<ServicesProps> = () => {
  return (
    <div className="mt-10">
      <div className="text-center px-2 md:px-8 mb-10">
        <h1 className="text-black  text-3xl">خدمـاتنا</h1>
        <Separator className="bg-secondary h-1.5 w-[50%] mx-auto mt-3 rounded-medium" />
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((item, index) => (
          <div data-aos="fade" data-aos-delay={"100"} key={index}>
            <ServiceCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
