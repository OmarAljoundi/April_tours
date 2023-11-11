import BlurImageV2 from "@/components/common/BlurImageV2";
import SectionTitle from "@/components/common/section-title";
import PopularDestinations from "@/components/destinations/PopularDestinations";
import Hero from "@/components/hero";
import BlockGuide from "@/components/home/BlockGuide";
import Counter from "@/components/home/Counter";
import TourCategories from "@/components/home/TourCategories";
import Tours from "@/components/tours/Tours";
import { Button } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <section className="mt-20" data-aos="fade-up">
        <div className="container">
          <SectionTitle
            title="الوجهات السياحية"
            sub_title="نقدم اكثر من 100+ برنامج حول العالم"
          />

          <div className="relative pt-10 sm:pt-5 ">
            <PopularDestinations />
          </div>
        </div>
      </section>

      <section className="container mt-10 lg:mt-14">
        <SectionTitle title="الرحلات الأكثر مبيعاً" />
        <Tours fetchProcess="best-tours" />
      </section>

      <section className="container mt-10 lg:mt-14">
        <SectionTitle title="إختار المغامرة المفضلة" />
        <div className="relative overflow-hidden pt-10 sm:pt-5">
          <TourCategories />
        </div>
      </section>

      <section className="container mt-10 lg:mt-14">
        <div className="flex gap-y-5 flex-col-reverse lg:grid lg:grid-cols-12 gap-x-5  justify-between items-center lg:items-start">
          <div className="pr-4 pl-4 lg:col-span-6 xl:col-span-4">
            <p className="font-weird text-3xl">
              أستمتعوا بلحظات السعادة في رحلة شهر العسل التي لا تنسى معنا ، حيث
              نصنع لكم ذكريات تبقى للأبد في أجمل وجهات العالم
            </p>
            <p className="font-weird  text-3xl">
              اكتشفوا الرومانسية والإثارة في كل زاوية تقصدونها مع ابريل تورز..
            </p>
            <div className="flex justify-center my-4 ">
              <Button
                as={Link}
                href="/tour-listing?type=رحلات شهر العسل"
                color="primary"
                endContent={<ArrowLeft />}
              >
                تفاصيل أكثر
              </Button>
            </div>
            <Counter />
          </div>
          <div className="pr-4 pl-4 lg:col-span-6 xl:col-span-8 lg:-mt-[25px]">
            <BlurImageV2
              src={"/assets/img/custom/main-image.jpg"}
              alt=""
              width={1500}
              height={1000}
              quality={100}
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="container  mt-10 lg:mt-14 mb-7">
        <SectionTitle
          sub_title="رفيق سفرك في رحلة لا تنسى"
          title="ابريل تورز"
        />
        <BlockGuide />
      </section>
    </div>
  );
};

export default Home;
