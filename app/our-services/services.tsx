"use client";
import { FunctionComponent } from "react";
import ServiceCard from "./services-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

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
    image: "/assets/img/custom/insurance.png",
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
      <div className="text-right px-2 md:px-8 mb-10">
        <h1 className="text-secondary  text-5xl">خدمـاتنا</h1>
        <p className="whitespace-pre-line text-xl text-slate-500">
          نقدّم في ابريل تورز مجموعة شاملة من الخدمات التي تلبي احتياجات ورغبات
          العملاء السياحية بشكل متكامل.
        </p>
      </div>
      <Swiper
        dir="ltr"
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-service-next",
          prevEl: ".js-service-prev",
        }}
        pagination={{
          el: ".js-service-pag",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={item.title}>
            <div data-aos="fade" data-aos-delay={"100"}>
              <ServiceCard data={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-auto">
        <div className="flex gap-x-4 items-center justify-center mt-5">
          <div className="w-auto">
            <button className="flex items-center text-xl arrow-right-hover js-service-prev">
              <i className="icon icon-arrow-right" />
            </button>
          </div>
          <div className="w-auto">
            <div className="pagination -dots text-border js-service-pag" />
          </div>
          <div className="w-auto">
            <button className="flex items-center text-xl arrow-left-hover  js-service-next">
              <i className="icon icon-arrow-left" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
