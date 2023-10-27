"use client";
import { BlurImage } from "../common/BlurImage";
import Filter from "../filter/filter";

const Hero = () => {
  return (
    <section className="masthead -type-10 pb-0 lg:pb-52">
      <div className="container-1500">
        <div className="flex  justify-end ">
          <div className="max-w-xl">
            <div className="masthead__content text-right">
              <h1 className="text-3xl" data-aos="fade-up" data-aos-delay="100">
                اكتشف المغامرات الجديدة{" "}
              </h1>
              <p
                className="mt-5 text-15 lg:text-15 sm:text-15"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ color: "black" }}
              >
                استكشف أجمل الوجهات السياحية في العالم وعش تجربة لا تُنسى. احجز
                رحلتك الآن واستعد للمغامرة{" "}
              </p>
              <div className="mt-5" data-aos="fade-up" data-aos-delay="300">
                <Filter onChange={false} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="masthead__image"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="flex gap-x-5 flex-nowrap">
            <div className="col-auto">
              <BlurImage
                image="/assets/img/hero/1.jpg"
                width={560}
                height={560}
                customClass="rounded-lg"
                loading="eager"
                priority="high"
              />
            </div>
            {/* End col-auto */}

            <div className="col-auto">
              <BlurImage
                image="/assets/img/hero/2.jpg"
                customClass="rounded-lg lg:opacity-20 2xl:opacity-100 "
                width={290}
                height={560}
                loading="eager"
                priority="high"
              />
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End .masthead__image */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default Hero;
