import { __initialValues__Customer } from "@/utils/Constant";
import { FC } from "react";
import { eContactMethod } from "@/types/custom";
import { Button, Input, SelectItem } from "@nextui-org/react";
import CustomSelect from "../next-ui/custom-select";
import { AnimatePresence, motion } from "framer-motion";
import SuccessMessage from "./success-message";
import useSubmitForm from "@/hooks/use-submit-form";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

export const CustomerForm: FC<{ tourId: number; moblieView: boolean }> = ({
  tourId,
  moblieView,
}) => {
  const { formik, isSuccess, loading } = useSubmitForm({ tourId: tourId });
  const { values, handleBlur, handleChange, touched, errors } = formik;

  if (isSuccess) {
    return (
      <AnimatePresence>
        <motion.div className={cn(moblieView ? "" : "shadow-medium p-4")}>
          <motion.div
            className="grid justify-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1.6 }}
          >
            <SuccessMessage />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }
  return (
    <AnimatePresence>
      <div className={cn(moblieView ? "" : "shadow-medium p-4")}>
        <div className="mb-2 text-light-1 text-center">
          <span className="text-xl fw-500 text-dark-1 ">
            تواصل معنا لمزيد من المعلومات
          </span>
          <Separator className="mt-4" />
        </div>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={formik.handleSubmit}
          className="grid gap-y-5"
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        >
          <Input
            classNames={{
              label: "right-0",
            }}
            type="text"
            placeholder="يرجى إدخال الإسم"
            label="الإسم"
            variant="bordered"
            value={values.name}
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={!!touched.name && !!errors.name}
            errorMessage={touched.name && errors.name}
            labelPlacement="outside"
          />
          <Input
            variant="bordered"
            value={values.phone_number}
            onChange={(phone) =>
              formik.setFieldValue("phone_number", phone.target.value)
            }
            label="رقم الهاتف"
            placeholder="يرجى ادخال رقم الهاتف"
            isInvalid={!!touched.phone_number && !!errors.phone_number}
            errorMessage={touched.phone_number && errors.phone_number}
            classNames={{
              input: "placeholder:text-right",
              label: "right-0",
            }}
            name="phone_number"
            dir="ltr"
            labelPlacement="outside"
          />
          <CustomSelect
            variant="bordered"
            placeholder="طريقة التواصل المفضلة"
            label="طريقة التواصل المفضلة"
            value={values.contact_method}
            name="contact_method"
            selectorIcon={<></>}
            onBlur={handleBlur}
            className="text-right"
            classNames={{
              value: "text-right",
              label: "right-0",
            }}
            onChange={handleChange}
            labelPlacement="outside"
            dir="rtl"
          >
            {[
              {
                label: "Whatsapp",
                value: eContactMethod.WhatsApp,
              },
              {
                label: "Call",
                value: eContactMethod.Call,
              },
            ].map((x) => (
              <SelectItem key={x.value} value={x.value}>
                {x.label}
              </SelectItem>
            ))}
          </CustomSelect>
          <Input
            classNames={{
              label: "right-0",
            }}
            variant="bordered"
            labelPlacement="outside"
            type="text"
            placeholder="ملاحظات أخرى"
            label="ملاحظات أخرى"
            value={values.notes}
            name="notes"
            onBlur={handleBlur}
            onChange={handleChange}
            dir="rtl"
          />
          <div className="mt-2">
            <Button color="primary" type="submit" isLoading={loading}>
              {"إرســال"}
            </Button>
          </div>
          <div className={cn(moblieView ? "border-t" : "hidden")}>
            <h1 className="text-sm text-right mt-2">
              او يمكنكم التواصل مباشره على هذا الرقم <br />
              <a dir="ltr" className="underline" href="tel:+97226727957">
                +972 2 672 7957
              </a>
            </h1>
          </div>
        </motion.form>
      </div>
    </AnimatePresence>
  );
};
