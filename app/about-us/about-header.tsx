"use client";
import BlurImageV2 from "@/components/common/BlurImageV2";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

interface AboutHeaderProps {}

const AboutHeader: FunctionComponent<AboutHeaderProps> = () => {
  return (
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
            duration: 0.5,
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <div className="relative h-full group overflow-hidden ">
        <BlurImageV2
          src={"/assets/img/custom/about-us-header.jpg"}
          alt="Hero Service Image"
          quality={100}
          fill
          fetchPriority={"high"}
          loading={"eager"}
          className="bg-gray-400 mx-auto max-w-full object-cover object-right-top md:object-center"
        />

        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={"/assets/img/custom/About-Us---Mobile.jpg"}
          />
          <BlurImageV2
            src={"/assets/img/custom/About-Us---Desktop.jpg"}
            alt="Hero Service Image"
            quality={100}
            fill
            fetchPriority={"high"}
            loading={"eager"}
            className="bg-gray-400 mx-auto max-w-full object-cover object-right-top md:object-center"
          />
        </picture>
        <section className="relative bg-[var(--bg-1)] border-t lg:border-t-0">
          <div className="pt-[70px] sm:pt-[100px] md:pt-[150px] xl:pt-[180px] pb-16  px-3 bg-no-repeat bg-cover bg-[#3093d052] relative h-[500px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-[#3093d052] ">
              <div className="container grid items-center h-full">
                <div className="text-center z-30">
                  <h1 className="text-4xl sm:text-3xl md:text-5xl  font-secondary text-black font-bold ">
                    ابـــريــل تـــــورز
                  </h1>

                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          `<p class="mx-auto text-3xl  font-secondary sm:text-5xl md:text-6xl text-black mt-4 md:mt-7 mb-6 ">تعرف على رفيق سفــرك</p>`
                        )
                        .callFunction(() => {
                          console.log("String typed out!");
                        })
                        .callFunction(() => {
                          console.log("All strings were deleted");
                        })
                        .start();
                    }}
                    options={{
                      loop: false,
                      autoStart: true,
                      cursor: "",
                      delay: 50,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutHeader;
