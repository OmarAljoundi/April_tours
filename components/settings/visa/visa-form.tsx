import { VisaType } from "@/types/custom";
import { Input } from "@nextui-org/react";
import { FormikProps } from "formik";
import { FunctionComponent } from "react";
import ImageForm from "./image-form";
import RequirementForm from "./requirement-form";
import PriceForm from "./price-from";

interface VisaFormProps {
  formik: FormikProps<VisaType>;
}

const VisaForm: FunctionComponent<VisaFormProps> = ({ formik }) => {
  const { errors, values, handleBlur, handleChange, touched } = formik;

  return (
    <div className="grid grid-cols-6 space-y-4 mt-8 gap-x-8 ">
      <div className="col-span-3 xl:col-span-4 space-y-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          <div className="col-span-2 lg:col-span-1">
            <Input
              label="Visa title"
              labelPlacement="outside"
              placeholder="Enter visa title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.title || ""}
              name="title"
              isClearable
              isInvalid={touched.title && !!errors.title}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Input
              label="Visa sub title"
              labelPlacement="outside"
              placeholder="Enter visa sub title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.sub_title || ""}
              name="sub_title"
              isClearable
              isInvalid={touched.sub_title && !!errors.sub_title}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Input
              label="Visa period"
              labelPlacement="outside"
              placeholder="Enter visa period"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.period || ""}
              name="period"
              isClearable
              isInvalid={touched.period && !!errors.period}
            />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Input
              label="Visa note"
              labelPlacement="outside"
              placeholder="Enter visa note"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.note || ""}
              name="note"
              isClearable
              isInvalid={touched.note && !!errors.note}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          <RequirementForm formik={formik} />
          <PriceForm formik={formik} />
        </div>
      </div>
      <ImageForm formik={formik} />
    </div>
  );
};

export default VisaForm;
