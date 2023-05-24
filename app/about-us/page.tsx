import AboutUs from "@/components/about/AboutUs";
import { BlurImage } from "@/components/common/BlurImage";
import { IContentResponse } from "@/models/interface/Response";
import ContentService from "@/services/ContentService";
import { AxiosResponse } from "axios";
import { Metadata } from "next";

async function getInfo() {
  const res =
    (await ContentService.readContent()) as AxiosResponse<IContentResponse>;
  return res.data?.content?.about;
}
export async function generateMetadata(): Promise<Metadata> {
  const contet = await getInfo();
  return {
    title: contet.seoTitle,
    description: contet.seoDescription,
    keywords: contet.seoTags,
  };
}

export default function Page() {
  return (
    <>
      <div className="header-margin"></div>

      <section className="section-bg  relative z-5 layer-black  md:pt-80 md:pb-80 pt-120 pb-120">
        <div className="section-bg__item col-12">
          <BlurImage
            image="/assets/img/banner/about-1.jpg"
            customClass="w-full h-full object-cover"
            loading="eager"
            q={100}
            priority="high"
          />
        </div>
        {/* End .section-bg__item */}

        <div className="container position-relative z-5">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-30 md:text-20 fw-600 text-white ">
                  تعرف على رفيق سفرك العالمي
                </h1>
              </div>
              {/* End text-center */}
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      <AboutUs />
    </>
  );
}
