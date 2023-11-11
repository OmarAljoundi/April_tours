"use client";
import BlurImageV2 from "@/components/common/BlurImageV2";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
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
        <section className="relative bg-[var(--bg-1)] border-t lg:border-t-0">
          <div className="pt-[70px] sm:pt-[100px] md:pt-[150px] xl:pt-[180px] pb-16  px-3 bg-no-repeat bg-cover bg-black/10 relative h-[500px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black/20 ">
              <div className="container grid items-center h-full">
                <div className="text-right pr-10 md:max-w-md z-30">
                  <h1 className="text-3xl md:text-5xl  font-secondary text-white">
                    ابـــريــل تـــــورز؟
                  </h1>
                  <p className="mx-auto  max-w-[600px] font-secondary text-2xl md:text-4xl   text-white mt-4 md:mt-7 mb-6 ">
                    تعرف على رفيق سفــرك!
                  </p>
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
