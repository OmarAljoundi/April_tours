import { Visa, VisaType } from "@/types/custom";
import { FormikProps } from "formik";
import { FunctionComponent } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SingleImageForm from "@/shared/single-image-form";

interface ImageFormProps {
  formik: FormikProps<VisaType>;
}

const ImageForm: FunctionComponent<ImageFormProps> = ({ formik }) => {
  const onImageRemove = () => {
    formik.setValues({
      ...formik.values,
      image: undefined,
    });
  };

  return (
    <div className="col-span-3  xl:col-span-2">
      <SingleImageForm formik={formik} field="image" maxNumber={1}>
        {formik.values.image && (
          <div className="image-item  border rounded-xl relative dark:bg-white mt-4 w-48">
            <div className="mx-auto w-40 h-40">
              <img
                src={formik.values.image}
                alt=""
                className="w-full rounded-xl "
              />
              <Button
                type="button"
                size={"icon"}
                variant={"ghost"}
                className="absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full border border-red-600"
                onClick={() => {
                  onImageRemove();
                }}
              >
                <X className="w-4 h-4 text-red-600" />
              </Button>
            </div>
          </div>
        )}
      </SingleImageForm>
    </div>
  );
};

export default ImageForm;
