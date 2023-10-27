"use client";

import DestinationModal from "@/modals/destination-modal";
import DestinationToursModal from "@/modals/destination-tours-modal";
import { FaqModal } from "@/modals/faq-modal";
import { FeatureModal } from "@/modals/feature-modal";
import { ImageModal } from "@/modals/image-modal";
import { SectionModal } from "@/modals/section-modal";
import SlideModal from "@/modals/slide-modal";
import { TourTypeModal } from "@/modals/tour-type-modal";
import AttachmentModal from "@/modals/attachment-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ImageModal />
      <SectionModal />
      <FeatureModal />
      <TourTypeModal />
      <DestinationModal />
      <DestinationToursModal />
      <AttachmentModal />
      <FaqModal />
      <SlideModal />
    </>
  );
};
