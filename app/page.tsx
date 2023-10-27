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
        <Tours />
      </section>

      <section className="container mt-10 lg:mt-14">
        <SectionTitle title="إختار المغامرة المفضلة" />
        <div className="relative overflow-hidden pt-10 sm:pt-5">
          <TourCategories />
        </div>
      </section>

      <section className="container mt-10 lg:mt-14">
        <div className="flex gap-y-5 flex-col lg:grid lg:grid-cols-2 gap-x-5  justify-between items-center">
          <div className="pr-4 pl-4">
            <h2 className="text-3xl text-right" dir="rtl">
              شركة إبريل تورز
            </h2>
            <p className="mt-2 lg:mt-5 text-lg text-right" dir="rtl">
              هي وكالة سفريات كاملة الخدمات في مدينة القدس تقوم بتوفير جميع
              خدمات السفر لجميع أنحاء العالم، ايضاً باقات سياحية صادرة بخدمات
              فاخرة ومستوى عالي من القيم.
            </p>

            <div className="flex justify-start mt-2 lg:mt-20">
              <Button
                as={Link}
                href="/about-us"
                color="primary"
                endContent={<ArrowLeft />}
              >
                تفاصيل أكثر
              </Button>
            </div>
          </div>
          <div className="pr-4 pl-4 ">
            <Counter />
          </div>
        </div>
      </section>

      <section className="container  mt-10 lg:mt-14 mb-7">
        <SectionTitle title="رفيق سفرك في رحلة لا تنسى" />
        <BlockGuide />
      </section>
    </div>
  );
};

export default Home;
