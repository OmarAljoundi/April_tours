import { FunctionComponent } from "react";

interface AboutInfoProps {}

const AboutInfo: FunctionComponent<AboutInfoProps> = () => {
  return (
    <div className="px-2 md:px-8 mt-10">
      <h1 className="text-3xl font-bold text-right mb-4">
        عن <span className="text-secondary">ابريل تورز.. </span>
      </h1>
      <p className="whitespace-pre-line text-base md:text-xl mb-10 text-justify !leading-8">
        {content}
      </p>
      <p className="whitespace-pre-line text-base md:text-xl mb-10 text-justify !leading-8 font-bold">
        {content2}
      </p>
    </div>
  );
};

export default AboutInfo;

const content = `شركة ابريل تورز هي شركة مقرها مدينة القدس، تأسست عام 2018 وتعتبر واحدة من الشركات البارزة في مجال السياحة والسفر في المدينة. تهدف لتقديم خدمات سياحة وسفر متكاملة لعملائها للعديد من الوجهات السياحية حول العالم. تتميز الشركة بتقديم مجموعة واسعة من الخدمات والعروض السياحية التي تناسب احتياجات العملاء المتنوعة.

تتضمن خدمات ابريل تورز حجز تذاكر الطيران والفنادق، ترتيب الجولات السياحية الممتعة في مختلف أنحاء العالم، وتنظيم رحلات سياحية خاصة. تعمل الشركة أيضًا على توفير برامج سياحية مخصصة لأفراد ومجموعات تضمن تجربة سفر مميزة ولا تُنسى.

ابريل تورز تعتمد على موظفين ذوي خبرة واحترافية في مجال السياحة، مما يجعل تعامل العملاء معها سلسًا وممتعًا. بفضل تفانيها في تقديم أعلى مستويات الخدمة والاهتمام بتفاصيل الرحلات، نسعى دائماً لتحقيق رضا العملاء وجعل تجربتهم السياحية فريدة ومميزة.
`;
const content2 = `إن شركة ابريل تورز هي الخيار الأمثل للراغبين في استكشاف العالم بأمان وراحة.
`;
