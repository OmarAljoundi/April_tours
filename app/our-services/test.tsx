"use client";
import BlurImageV2 from "@/components/common/BlurImageV2";
import { Separator } from "@/components/ui/separator";
import { useSetting } from "@/hooks/use-setting";
import IconProvider from "@/provider/icon-provider";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AiFillDollarCircle, AiOutlineMinus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { FaClipboardCheck } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
const Blog = () => {
  const [selectedId, setSelectedId] = useState("");
  const setting = useSetting((x) => x.setting?.visa?.visa_types);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mb-8 px-4 content-between">
        {setting?.map((item) => (
          <motion.div
            className={`w-full relative py-4 shadow-medium  grid justify-items-start space-y-12  rounded-medium card bg-white  cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
              selectedId === item.uuid ? "card-selected" : ""
            }`}
            layoutId={`card-container-${item.uuid}`}
            onClick={() => setSelectedId(item.uuid)}
            key={item.uuid}
            initial={{ scale: 1 }}
            animate={{ scale: selectedId === item.uuid ? 1.1 : 1 }} // Increase scale on selected card
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex justify-start items-center gap-x-2 px-4">
                <BlurImageV2
                  src={item.image}
                  alt=""
                  width={300}
                  height={150}
                  className="max-w-[50px] object-cover visa-image"
                  quality={100}
                />
                <span className="text-xl lg:text-3xl visa-title transition-all duration-300">
                  {item.title}
                </span>
              </div>
              <div className="pl-4">
                <IconProvider>
                  {selectedId == item.uuid ? <AiOutlineMinus /> : <BsPlusLg />}
                </IconProvider>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center !m-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {setting.map(
              (item) =>
                item.uuid === selectedId && (
                  <motion.div
                    className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto relative"
                    layoutId={`card-container-${item.uuid}`}
                    key={item.uuid}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <div
                      className="absolute left-5 top-5 cursor-pointer hover:opacity-50 duration-300 transition-all z-50"
                      onClick={() => setSelectedId("")}
                    >
                      <IconProvider size="22px" textColor="text-black">
                        <IoIosClose />
                      </IconProvider>
                    </div>
                    <motion.div className="relative">
                      <div className="flex justify-start items-center gap-x-2 mb-4">
                        <BlurImageV2
                          src={item.image}
                          alt=""
                          width={300}
                          height={150}
                          className="max-w-[31px] object-cover visa-image"
                          quality={100}
                        />
                        <span className="text-xl lg:text-3xl visa-title transition-all duration-300">
                          {item.title}
                        </span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-start gap-x-2 items-center">
                        <IconProvider>
                          <IoDocumentTextSharp />
                        </IconProvider>
                        <h1 className="text-black text-lg font-bold">
                          المستندات المطلوبة
                        </h1>
                      </div>
                      <ul
                        className="list-inside list-disc pr-3 mt-4 space-y-1"
                        dir="rtl"
                      >
                        {item.requirements.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                      <Separator className="my-2" />
                      <div className="flex justify-start gap-x-2 items-center">
                        <IconProvider>
                          <AiFillDollarCircle />
                        </IconProvider>
                        <h1 className="text-black text-lg font-bold">
                          التكلفة
                        </h1>
                      </div>
                      <div className="mt-4 pr-3" dir="rtl">
                        <ul
                          className="list-inside list-disc pr-3 mt-4 space-y-1"
                          dir="rtl"
                        >
                          <li>{item.price}</li>
                          <li>{item.price}</li>
                          <li>{item.price}</li>
                        </ul>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-start gap-x-2 items-center">
                        <IconProvider>
                          <FaClipboardCheck />
                        </IconProvider>
                        <h1 className="text-black text-lg font-bold">
                          ملاحظات
                        </h1>
                      </div>
                      <div className="mt-4 pr-3" dir="rtl">
                        <h4>{item.note}</h4>
                      </div>
                    </motion.div>
                  </motion.div>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Blog;
