import { Separator } from "@/components/ui/separator";
import { VisaType } from "@/types/custom";
import { Button, Input } from "@nextui-org/react";
import { FormikProps } from "formik";
import { Plus, Trash } from "lucide-react";
import { FunctionComponent, useState } from "react";

interface PriceFormProps {
  formik: FormikProps<VisaType>;
}

const PriceForm: FunctionComponent<PriceFormProps> = ({ formik }) => {
  const [title, setTitle] = useState<string>();
  const { values, setValues } = formik;

  const AddPrice = () => {
    setValues({
      ...values,
      price: [...(values.price ?? []), title!],
    });
    setTitle("");
  };

  const RemovePrice = (_index: number) => {
    setValues({
      ...values,
      price: [...values.price?.filter((x, index) => index !== _index)],
    });
  };

  return (
    <div className="col-span-1">
      <div className="flex gap-x-2 items-end">
        <Input
          label="Price"
          labelPlacement="outside"
          placeholder="Enter price detalis here"
          onChange={(e) => setTitle(e.target.value)}
          value={title || ""}
        />
        <Button isIconOnly isDisabled={!!!title} onPress={() => AddPrice()}>
          <Plus />
        </Button>
      </div>
      <Separator className="my-2" />
      <div className="grid gap-y-4">
        {values.price?.map((k, index) => (
          <div className="flex gap-x-2 " key={`xxx-${index}`}>
            <Input isDisabled key={k} value={k || ""} />
            <Button
              color="danger"
              isIconOnly
              onPress={() => RemovePrice(index)}
            >
              <Trash />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceForm;
