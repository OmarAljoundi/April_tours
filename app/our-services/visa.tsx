"use client";
import { useSetting } from "@/hooks/use-setting";
import { FunctionComponent, useState } from "react";
import BlurImageV2 from "@/components/common/BlurImageV2";
import { Separator } from "@/components/ui/separator";
import IconProvider from "@/provider/icon-provider";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillDollarCircle, AiOutlineMinus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { FaClipboardCheck } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import VisaCard from "@/components/common/VisaCard";

interface VisaProps {}

const Visa: FunctionComponent<VisaProps> = () => {
  const setting = useSetting((x) => x.setting?.visa?.visa_types);
  const [selectedId, setSelectedId] = useState("");

  return (
    <div className="mt-10 overflow-hidden">
      <div className="text-center px-2 md:px-8 mb-10">
        <h1 className="text-black  text-3xl">معلومات عن التأشيرات السياحية</h1>
        <Separator className="bg-secondary h-1.5 w-[50%] mx-auto mt-3 rounded-medium" />
      </div>
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
            animate={{ scale: selectedId === item.uuid ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-start items-center gap-x-2 px-4">
                <BlurImageV2
                  src={item.image}
                  alt=""
                  width={300}
                  height={150}
                  loading="eager"
                  className="max-w-[50px] object-cover visa-image"
                  quality={100}
                />
                <span className="text-lg lg:text-xl font-bold visa-title transition-all duration-300">
                  {item.title}
                </span>
              </div>
              <div className="pl-4">
                <IconProvider bgColor="#dcedf7" textColor="text-primary">
                  {selectedId == item.uuid ? <AiOutlineMinus /> : <BsPlusLg />}
                </IconProvider>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <div
              data-state="open"
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
              style={{ pointerEvents: "auto" }}
              data-aria-hidden="true"
              aria-hidden="true"
            ></div>
            <motion.div
              className="flex w-screen h-[100dvh] fixed inset-0 z-50 overflow-x-auto justify-center [--scale-enter:100%] [--scale-exit:100%] [--slide-enter:0px] [--slide-exit:80px] sm:[--scale-enter:100%] sm:[--scale-exit:103%] sm:[--slide-enter:0px] sm:[--slide-exit:0px] items-end sm:items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {setting.map(
                (item) =>
                  item.uuid === selectedId && (
                    <>
                      <motion.div
                        className="flex flex-col relative z-50 w-full box-border bg-content1 
                      outline-none mx-1 my-1 sm:mx-6 max-w-md rounded-large shadow-small max-h-[calc(100%_-_4.5rem)]"
                        layoutId={`card-container-${item.uuid}`}
                        key={item.uuid}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                      >
                        <button
                          role="button"
                          aria-label="Close"
                          onClick={() => setSelectedId("")}
                          className="absolute appearance-none select-none top-3 left-5 p-2 text-foreground-500 
                        rounded-full hover:bg-default-100 active:bg-default-200 tap-highlight-transparent
                         outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 
                         data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2"
                          type="button"
                        >
                          <svg
                            aria-hidden="true"
                            fill="none"
                            focusable="false"
                            height="1em"
                            role="presentation"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            width="1em"
                          >
                            <path d="M18 6L6 18M6 6l12 12"></path>
                          </svg>
                        </button>
                        <header className="py-2 px-6  text-large font-semibold  border-b">
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
                        </header>

                        <VisaCard visa={item} />
                      </motion.div>
                    </>
                  )
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Visa;
