import { eContactMethod, eCustomerStatus } from "@/models/interface/Customer";
import { __initialValues__Customer } from "@/utils/Constant";
import { FormikHelpers, useFormik } from "formik";
import { FC } from "react";
import * as yup from "yup";
import "yup-phone";
import { Select } from "../common/Select";
import { Customer } from "@/types/custom";
import { submitForm } from "@/lib/operations";
import { toast } from "sonner";
import { Button, Input, SelectItem } from "@nextui-org/react";
import CustomSelect from "../next-ui/custom-select";
export const CustomerForm: FC<{ tourId: number }> = ({ tourId }) => {
  const handleSubmitForm = async (
    values: Customer,
    formikHelpers: FormikHelpers<Customer>
  ) => {
    values.tour_id = tourId;
    var result = await submitForm(values);

    if (result.success) {
      toast.success("سيتم التواصل معك في أقرب وقت");
      formikHelpers.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      tour_id: tourId,
      status: eCustomerStatus.Pending,
    },
    onSubmit: handleSubmitForm,
    validateOnChange: true,
    validationSchema: Schema,
  });

  const { values, handleBlur, handleChange, touched, errors } = formik;
  return (
    <form onSubmit={formik.handleSubmit} className="grid gap-y-5">
      <Input
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
        }}
        dir="ltr"
        labelPlacement="outside"
      />
      <CustomSelect
        variant="bordered"
        placeholder="طريقة التواصل المفضلة"
        label="طريقة التواصل المفضلة"
        value={values.contact_method}
        name="contactMethod"
        selectorIcon={<></>}
        onBlur={handleBlur}
        className="text-right"
        classNames={{
          value: "text-right",
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
        <Button color="primary" type="submit">
          {"إرســال"}
        </Button>
      </div>
    </form>
  );
};

const Schema = yup.object().shape({
  name: yup.string().required("الرجاء إدخال الإسم"),
  phoneNumber: yup.string().required("الرجاء إدخال رقم الجوال"),
  contactMethod: yup
    .string()
    .nullable()
    .required("الرجاء إختيار طريقة التواصل"),
});
