import AboutUs from "@/components/about/AboutUs";
import { BlurImage } from "@/components/common/BlurImage";

// async function getInfo() {
//   const res =
//     (await ContentService.readContent()) as AxiosResponse<IContentResponse>;
//   return res.data?.content?.about;
// }
// export async function generateMetadata(): Promise<Metadata> {
//   const contet = await getInfo();
//   return {
//     title: contet.seoTitle,
//     description: contet.seoDescription,
//     keywords: contet.seoTags,
//   };
// }

export default function Page() {
  return (
    <>
      <section className="section-bg  relative z-5 layer-black  md:pt-20 md:pb-20 pt-32 pb-32">
        <div className="section-bg__item w-full">
          <BlurImage
            image="/assets/img/banner/about-1.jpg"
            customClass="w-full h-full object-cover"
            loading="eager"
            q={100}
            priority="high"
          />
        </div>

        <div className="container relative z-50">
          <div className="text-center ">
            <h1 className="text-2xl md:text-4xl  text-white ">
              تعرف على رفيق سفرك العالمي
            </h1>
          </div>
        </div>
      </section>
      <AboutUs />
    </>
  );
}
