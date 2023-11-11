"use client";
import { useSetting } from "@/hooks/use-setting";
import { FunctionComponent } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import VisaCard from "./visa-card";
import { Separator } from "@/components/ui/separator";

interface VisaProps {}

const Visa: FunctionComponent<VisaProps> = () => {
  const setting = useSetting((x) => x.setting?.visa?.visa_types);
  return (
    <div className="mt-10 overflow-hidden">
      <div className="text-center px-2 md:px-8 mb-10">
        <h1 className="text-black  text-3xl">معلومات عن التأشيرات السياحية</h1>
        <Separator className="bg-secondary h-1.5 w-[50%] mx-auto mt-3 rounded-medium" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8 px-4">
        {setting?.map((item, index) => (
          <SwiperSlide key={item.title}>
            <VisaCard visa={item} />
          </SwiperSlide>
        ))}
      </div>
    </div>
  );
};

export default Visa;
