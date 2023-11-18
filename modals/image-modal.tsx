"use client";
import { useImageModal } from "@/hooks/use-image-modal";
import {
  Button,
  Chip,
  ModalFooter,
  Select,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { Modal } from "../shared/modal";
import { useState } from "react";
import { DeleteImageFromTour } from "@/lib/storage-operations";
import FromLibrary from "@/components/uploader/images/from-libray";
import UploadNewImages from "@/components/uploader/images/new-images";
import { cn } from "@/lib/utils";
import { useQueryClient } from "react-query";

export const ImageModal = () => {
  const imageModal = useImageModal();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const queryClient = useQueryClient();

  const UploadImages = () => {
    if (imageModal.maxNumber! > 1) {
      imageModal.formik!.setValues({
        ...imageModal.formik!.values,
        [imageModal.field!]: [
          ...(imageModal.formik!.values.images ?? []),
          ...selectedImages,
        ],
      });
    } else {
      if (imageModal.field!.includes(".")) {
        const columns = imageModal.field!.split(".");
        imageModal.formik!.setValues({
          ...imageModal.formik!.values,
          [columns[0]]: {
            ...imageModal.formik?.values[columns[0]],
            [columns[1]]: selectedImages[0],
          },
        });
      } else {
        imageModal.formik!.setValues({
          ...imageModal.formik!.values,
          [imageModal.field!]: selectedImages[0],
        });
      }
    }

    imageModal.onClose();
  };
  function extractLastPart(url: string): string {
    const lastSlashIndex = url.lastIndexOf("/");
    const lastPart = url.substring(lastSlashIndex + 1);

    return `tour_images/${lastPart}`;
  }

  const DeleteImages = async () => {
    setLoadingDelete(true);
    const { success, error } = await DeleteImageFromTour(
      selectedImages.map((x) => extractLastPart(x))
    );
    if (!success) {
      return;
    }
    await queryClient.invalidateQueries();
    setLoadingDelete(false);
    setSelectedImages([]);
  };

  const FooterComponent = () => {
    return (
      <ModalFooter
        className={cn(
          selectedImages.length == 0
            ? "hidden"
            : "flex justify-between items-center"
        )}
      >
        <h1 className="text-xl">
          Selected Images <Chip color="primary"> {selectedImages.length}</Chip>
        </h1>

        <div className={"flex gap-x-4"}>
          <Button
            color="danger"
            onClick={DeleteImages}
            disabled={selectedImages.length == 0}
          >
            Remove
          </Button>
          <Button
            color="primary"
            onClick={UploadImages}
            disabled={selectedImages.length == 0}
          >
            Upload
          </Button>
        </div>
      </ModalFooter>
    );
  };

  return (
    <Modal
      size="5xl"
      title="Images Library"
      isOpen={imageModal.isOpen}
      onClose={imageModal.onClose}
      renderFooter={FooterComponent}
    >
      <Tabs defaultSelectedKey="upload_new_imagess" className="w-full mt-8">
        <Tab className="w-full" title={"Upload New Images"}>
          <UploadNewImages
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
          />
        </Tab>
        <Tab className="w-full" title={"From my library"}>
          <FromLibrary
            loadingDelete={loadingDelete}
            formik={imageModal.formik!}
            closeModal={() => imageModal.onClose()}
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
          />
        </Tab>
      </Tabs>
    </Modal>
  );
};
