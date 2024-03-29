"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Filter from "../filter/filter";
import { useSetting } from "@/hooks/use-setting";
import { Navigation, Pagination } from "swiper";
import { AnimatePresence, motion } from "framer-motion";
import BlurImageV2 from "../common/BlurImageV2";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const setting = useSetting((x) => x.setting?.home?.sliders ?? []);
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="relative">
      <Swiper
        loop={true}
        slidesPerView="auto"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".btn-next-slide",
          prevEl: ".btn-prev-slide",
        }}
        modules={[Navigation, Pagination]}
        className="swiper choice-slider"
      >
        {setting?.map((item, index) => (
          <SwiperSlide key={item.uuid}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, translateY: 20 },
                visible: {
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    duration: Math.max(0.5, ((index + 1) * 10) / 100),
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <div className="relative h-full group overflow-hidden ">
                <picture>
                  {item.image_mobile && (
                    <source
                      media="(max-width: 768px)"
                      srcSet={item.image_mobile}
                    />
                  )}
                  <BlurImageV2
                    src={item.image}
                    alt="Hero Image"
                    quality={100}
                    fill
                    fetchPriority={index == 0 ? "high" : "auto"}
                    loading={index == 0 ? "eager" : "lazy"}
                    className="bg-gray-400 mx-auto max-w-full object-cover object-right-top md:object-center"
                  />
                </picture>
                <section className="relative bg-[var(--bg-1)] border-t lg:border-t-0">
                  <div className="pt-[70px] sm:pt-[100px] md:pt-[150px] xl:pt-[180px] pb-16  px-3 bg-no-repeat bg-cover bg-[#3093d02b] relative h-[500px]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-[#3093d02b] ">
                      <div className="container grid items-center h-full">
                        <div className="text-center  z-30">
                          <h1 className="text-3xl lg:text-5xl  font-secondary text-black font-bold">
                            <TypeAnimation
                              speed={{ value: 50, type: "keyStrokeDelayInMs" }}
                              sequence={[
                                50,
                                item.title,
                                () => {
                                  setShowContent(true);
                                },
                              ]}
                              cursor={false}
                            />
                          </h1>

                          {showContent && (
                            <AnimatePresence>
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                  ease: [0.1, 0.25, 0.3, 1],
                                  duration: 1.6,
                                }}
                                className="mx-auto px-4 max-w-[600px] font-secondary text-sm md:text-base lg:text-2xl text-black mt-4 md:mt-7 mb-6 "
                              >
                                {item.sub_title}
                              </motion.p>
                            </AnimatePresence>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="mt-8 bottom-0 absolute z-10 w-full max-w-7xl mx-auto right-0 left-0">
        <Filter onChange={false} />
      </section>
    </div>
  );
};

export default Hero;
