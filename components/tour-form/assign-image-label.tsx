import { Tour } from "@/types/custom";
import { FormikProps } from "formik";
import { FunctionComponent, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from "@nextui-org/react";
import { MdLabel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

interface AssignImageLabelProps {
  formik: FormikProps<Tour>;
  imageUrl: string;
}

const AssignImageLabel: FunctionComponent<AssignImageLabelProps> = ({
  formik,
  imageUrl,
}) => {
  const { values } = formik;
  const [label, setLabel] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const PushLabel = () => {
    const image_description = values?.images_description?.find(
      (x) => x.image_url == imageUrl
    );

    if (image_description) {
      image_description.text = label;
      formik.setValues({
        ...values,
        images_description: [
          ...(values.images_description.filter(
            (x) => x.image_url != imageUrl
          ) ?? []),
          image_description,
        ],
      });
    } else {
      formik.setValues({
        ...values,
        images_description: [
          ...(values.images_description ?? []),
          {
            image_url: imageUrl,
            text: label,
          },
        ],
      });
    }

    setIsOpen(false);
  };

  const defaultValue =
    values?.images_description?.find((x) => x.image_url == imageUrl)?.text ||
    "";
  return (
    <Popover
      placement="bottom"
      showArrow
      offset={10}
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      backdrop="opaque"
    >
      <PopoverTrigger>
        <Button
          color={!!defaultValue ? "success" : "primary"}
          size="sm"
          className="w-full rounded-none"
          endContent={!!defaultValue ? <FaCheckCircle /> : <MdLabel />}
        >
          {!!defaultValue ? defaultValue : "Add Image Label"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <div className="mt-2 flex flex-col gap-2 w-full">
              <Input
                label="Image Label"
                labelPlacement="outside"
                placeholder="Type here.."
                defaultValue={defaultValue}
                onChange={(e) => setLabel(e.target.value)}
                value={label}
                onClear={() => setLabel("")}
                isClearable
              />
              <Button
                onPress={() => PushLabel()}
                isDisabled={!!!label}
                color="primary"
              >
                Save
              </Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default AssignImageLabel;
