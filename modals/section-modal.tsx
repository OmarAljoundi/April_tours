"use client";
import { Button, Input, ModalFooter, Textarea } from "@nextui-org/react";
import { Modal } from "../shared/modal";
import { useSectionModal } from "@/hooks/use-section-modal";
import { v4 as uuidv4 } from "uuid";
import { TourSection } from "@/types/custom";
import { useFormik } from "formik";
import { useState } from "react";

export const SectionModal = () => {
  const sectionModal = useSectionModal();
  const [uniqueId, setUniqueId] = useState(uuidv4());
  const handleSubmitSection = (formData: TourSection) => {
    const { formik, onClose } = sectionModal;
    const tourSections = formik!.values.tour_sections || [];
    const oldSectionIndex = tourSections.findIndex(
      (x) => x.uuid === formData.uuid
    );

    if (oldSectionIndex !== -1) {
      const updatedSections = [...tourSections];
      updatedSections[oldSectionIndex] = formData;

      formik!.setValues({
        ...formik!.values,
        tour_sections: updatedSections,
      });
    } else {
      formik!.setValues({
        ...formik!.values,
        tour_sections: [...tourSections, formData],
      });
    }

    setUniqueId(uuidv4());
    resetForm();
    onClose();
  };

  const sectionFormik = useFormik({
    initialValues: sectionModal.data ?? {
      uuid: uniqueId,
      description: "",
      title: "",
    },
    onSubmit: handleSubmitSection,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
  });

  const {
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    resetForm,
    handleSubmit,
    setFieldValue,
  } = sectionFormik;

  if (sectionModal.formik == null) {
    return null;
  }

  return (
    <Modal
      isOpen={sectionModal.isOpen}
      onClose={sectionModal.onClose}
      dialogClass="px-2"
      title="Create new section"
      renderFooter={() => {
        return (
          <ModalFooter>
            <Button
              variant="bordered"
              color="primary"
              type="button"
              onClick={() => handleSubmit()}
            >
              Add new section
            </Button>
          </ModalFooter>
        );
      }}
    >
      <form className="grid space-y-4 mt-4 gap-x-4">
        <div className="space-y-4">
          <div className="grid gap-y-4">
            <Input
              label="Section Title"
              labelPlacement="outside"
              placeholder="Enter section title"
              onChange={handleChange}
              onBlur={handleBlur}
              onClear={() => setFieldValue("title", "")}
              value={values.title || ""}
              name="title"
              isClearable
              isInvalid={touched.title && !!errors.title}
            />
            <Textarea
              label="Section Description"
              labelPlacement="outside"
              placeholder="Enter section description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.description && !!errors.description}
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};
