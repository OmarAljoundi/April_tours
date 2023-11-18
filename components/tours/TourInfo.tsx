"use client";
import TopBreadCrumb from "@/components/tours/TopBreadCrumb";
import Overview from "@/components/tours/Overview";
import Itinerary from "@/components/tours/itinerary";
import Tours from "@/components/tours/Tours";
import ImageSlides from "./ImageSlides";
import { Tour } from "@/types/custom";
import BasicInfo from "./BasicInfo";
import SectionTitle from "../common/section-title";
import TourHotels from "./TourHotels";
import IconProvider from "@/provider/icon-provider";
import { GrShareOption } from "react-icons/gr";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CustomerForm } from "./CustomerForm";
import { IoChatbubbleEllipses } from "react-icons/io5";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 25 },
};

export default function TourInfo({ tour }: { tour: Tour }) {
  const [hidden, setHidden] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 4000);
  }, []);

  const data = [
    {
      title: "الرحلات السياحية",
      href: "/tour-listing",
    },
    {
      title: decodeURIComponent(tour?.name),
      current: true,
    },
  ];

  async function share() {
    try {
      await navigator.share({
        text: "اكتشف المغامرات الجديدة مع ابريل تورز، واحجز رحلتك الآن!",
        title: "أبريل تورز",
        url: window.location.href,
      });
    } catch (error) {
      console.log("Sharing failed!", error);
    }
  }
  return (
    <div className="md:overflow-hidden container">
      <TopBreadCrumb breads={data} />

      <section className="pt-5 border-t"></section>

      <motion.div
        className="fixed left-0 bottom-0  z-50  lg:hidden"
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <div className="p-2 flex flex-grow justify-between items-center ">
          <Button color="primary" size="sm" onPress={onOpen} className="h-16">
            <div className="grid gap-y-1 justify-items-center py-4">
              <IconProvider bgColor="white" textColor="text-primary">
                <IoChatbubbleEllipses />
              </IconProvider>
              <h1>احجز الآن</h1>
            </div>
          </Button>
        </div>
      </motion.div>
      <div className="grid grid-cols-12 lg:gap-x-10  items-start">
        <div className="col-span-4 sidebar-sticky content-center gap-y-5 hidden lg:grid">
          <div className="w-full" style={{ height: "fit-content" }}>
            <CustomerForm tourId={tour.id} moblieView={false} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="relative flex justify-end overflow-hidden js-section-slider w-100">
            <div className="w-full  flex flex-row items-center pb-5 px-2 lg:px-0  justify-between ">
              <h1 className="text-2xl font-bold text-right">{tour?.name}</h1>
              <div
                onClick={() => share()}
                className="cursor-pointer hover:opacity-50 duration-500 transition-opacity"
              >
                <IconProvider>
                  <GrShareOption />
                </IconProvider>
              </div>
            </div>
          </div>
          <div className="relative flex justify-end overflow-hidden js-section-slider w-100">
            <ImageSlides
              image_desc={tour?.images_description ?? []}
              tourImages={tour?.images}
              mainImage={
                tour?.images && tour?.images.length ? tour?.images[0] : ""
              }
            />
          </div>

          <BasicInfo tour={tour} />
        </div>
      </div>
      <div className="flex flex-col-reverse">
        <Overview tour={tour} />
        <section className="border-top-light mt-10">
          <Itinerary tourStories={tour?.tour_sections} />
        </section>
      </div>

      {tour?.tour_hotels && tour?.tour_hotels.length > 0 && (
        <section className="border-top-light mt-10">
          <TourHotels tour={tour} />
        </section>
      )}

      <section className="mt-2 overflow-hidden">
        <SectionTitle title="رحلات أخرى قد تعجبك؟" />
        <Tours fetchProcess="same-type" typeId={tour.type_id} />
      </section>

      <Modal
        isOpen={isOpen}
        placement={"bottom-center"}
        onOpenChange={onOpenChange}
        classNames={{
          closeButton: "!right-auto left-3",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <CustomerForm tourId={tour.id} moblieView={true} />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
