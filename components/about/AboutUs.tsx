"use client";
import React from "react";
import { BlurImage } from "../common/BlurImage";
import Image from "next/image";
export default function AboutUs() {
  return (
    <>
      <div className="intro-area md:pt-20 pt-10 pb-10  md:pb-20 overflow-hidden">
        <div className="container">
          <div className="section-title lg:text-center text-left md:mb-20 mb-10">
            <h2 className="title text-2xl md:text-3xl lg:text-right text-center ">
              <span>ماذا تقدم </span> أبريل للسياحة؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-9">
            {content_bullets.map((i) => (
              <div key={i.title}>
                <div className="single-intro style-two">
                  <div className="thumb">
                    <Image
                      src={i.img}
                      fetchPriority="high"
                      loading="eager"
                      className="ml-auto"
                      alt="Icon"
                      quality={100}
                      width={i.width}
                      height={i.height}
                    />
                  </div>
                  <h4 className="intro-title text-right">{i.title}</h4>
                  <p className="text-right text-15" dir="rtl">
                    {i.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-section overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 gap-x-8">
            <div className="col-span-12 lg:col-span-7">
              <div className="section-title mb-lg-0 px-[10px]">
                <h2 className="title text-xl md:text-2xl text-right">
                  أبدأ رحلتك في السفر
                </h2>
                <h3 className="text-secondary mt-2 text-3xl">مع أبريل تورز</h3>

                <p dir="rtl" className="whitespace-pre-line mt-5 text-base">
                  {about_content}
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 align-self-center">
              <div className="thumb about-section-right-thumb mb-12">
                <div className="citiesCard__image  rounded-b-none ratio aspect-[1/1]">
                  <BlurImage
                    image="/assets/img/custom/person_abt.png"
                    loading="eager"
                    priority="low"
                    customClass="rounded-b-none"
                  />
                </div>
                <Image
                  className="absolute -left-5 -bottom-5 lg:block hidden w-52 h-52"
                  src="/assets/img/custom/ticket.png"
                  alt="img"
                  width={300}
                  height={200}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const content_bullets = [
  {
    title: "وسائل نقل",
    desc: "أبريل تورز تضمن لك الرحلة من البلد الذي انت فيها للبلد المراد الوصول اليه بسلام وإطمئنان.",
    img: "/assets/img/icons/9.png",
    width: 33,
    height: 41,
  },
  {
    title: "وجهات متنوعة",
    desc: "هناك العديد من الوجهات المتاحة للاختيار من بينها. يمكن أن تشمل هذه الوجهات مختلف البلدان، المدن، الشواطئ، الجبال، والمعالم السياحية الأخرى.",
    img: "/assets/img/icons/10.png",
    width: 31,
    height: 41,
  },
  {
    title: "حجوزات فندقية",
    desc: "احجز إقامتك في فنادقنا الفاخرة واستمتع بتجربة ساحرة ومريحة. خدمات متميزة، موقع ممتاز وأسعار تنافسية. احجز الآن واستمتع بإقامة لا تُنسى.",
    img: "/assets/img/icons/11.png",
    width: 40,
    height: 37,
  },
  {
    title: "سرعة بالحجز",
    desc: "احصل على سرعة استثنائية في عملية الحجز. توفير الوقت والجهد مع حجز فوري وسهل لتلبية احتياجاتك بسرعة وفعالية.",
    img: "/assets/img/icons/12.png",
    width: 41,
    height: 36,
  },
];

const about_content = `شركة إبريل تورز هي وكالة سفريات كاملة الخدمات في مدينة القدس. نحن نفتخر بتوفير خدمات السفر الشاملة لعملائنا في جميع أنحاء العالم. سواء كنت تبحث عن تنظيم رحلة عائلية، رحلة تجارية، رحلة مغامرة أو رحلة استجمام فاخرة، فإبريل تورز هي الخيار الأمثل لك.

تتميز إبريل تورز بفريق متخصص من خبراء السفر المحترفين الذين يعملون بجد لتلبية احتياجاتك وتفضيلاتك الفردية. نحن نقدم باقات سفر مخصصة وفقًا لمتطلباتك، بغض النظر عن وجهتك المفضلة.

مع إبريل تورز، يمكنك استكشاف وجهات سياحية متنوعة في جميع أنحاء العالم. سواء كنت تحلم بزيارة الأماكن التاريخية الشهيرة مثل أهرامات الجيزة في مصر أو مدينة البندقية الرومانسية في إيطاليا، أو رحلة إلى جمال الطبيعة في جزر المالديف أو جبال الألب السويسرية، فإبريل تورز ستوفر لك تجربة لا تنسى.

نحن نضمن لكم تجربة سفر مريحة وممتعة من خلال توفير خدمات فاخرة وجودة عالية. نحن نعمل مع شركاء موثوق بهم في صناعة السفر لضمان حصولك على أفضل خدمة ممكنة. بغض النظر عما إذا كنت بحاجة إلى حجز تذاكر طيران، حجز فنادق، ترتيبات للنقل، أو تنظيم رحلات يومية وجولات سياحية، فإبريل تورز ستكون معك خطوة بخطوة.

نحن نهتم بتفاصيل رحلتك بشكل كامل، من التخطيط وحتى عودتك بسلام. نحن نوفر أفضل الخدمات الاستشار`;

function LImage({ src, width, height }) {
  const style = { height: `min(650px, ${100 / (width / height)}%)` };
  return (
    <div className={`next-image-wrapper`} style={style}>
      <BlurImage image={src} height={height} />
    </div>
  );
}
