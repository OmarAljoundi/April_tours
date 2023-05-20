"use client";
import React from "react";
import { BlurImage } from "../common/BlurImage";
import Image from "next/image";
export default function AboutUs() {
  return (
    <>
      <div className="intro-area md:pt-40 md:pb-40 pt-80 pb-80">
        <div className="container">
          <div className="section-title text-lg-center text-left md:mb-40 mb-80">
            <h2 className="title text-30 md:text-right lg:text-center ">
              <span>ماذا تقدم </span> أبريل للسياحة؟
            </h2>
          </div>
          <div className="row y-gap-50">
            {content_bullets.map((i) => (
              <div className="col-lg-3 col-md-6" key={i.title}>
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

      <div className="about-section pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="thumb about-section-right-thumb mb-50">
                <div className=" citiesCard__image ratio ratio-1:1">
                  <BlurImage
                    image="/assets/img/custom/person_abt.png"
                    loading="eager"
                    priority="low"
                  />
                </div>
                <Image
                  className="about-absolute-thumb d-block lg:d-none"
                  src="/assets/img/custom/ticket.png"
                  alt="img"
                  width={300}
                  height={200}
                  quality={100}
                />
              </div>
            </div>
            <div className="col-lg-5  offset-lg-2">
              <div className="section-title mb-lg-0">
                <h2 className="title text-40 md:text-30 text-right">
                  أبدأ رحلتك في السفر
                  <br />
                  <span className="secondary-font text-50">مع أبريل تورز</span>
                </h2>
                <p
                  className="text-right text-15 mt-20"
                  dir="rtl"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {about_content}
                </p>
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
