import useApiService from "@/hooks/useApiService";
import { ICustomer, eContactMethod } from "@/models/interface/Customer";
import { ICustomerResponse } from "@/models/interface/Response";
import { __initialValues__Customer } from "@/utils/Constant";
import { FormikHelpers, useFormik } from "formik";
import { FC } from "react";
import * as yup from "yup";
import "yup-phone";
import { Input } from "../common/Input";
import { CustomPhoneInput } from "../common/PhoneInput";
import { Select } from "../common/Select";
import { notifySuccess } from "@/services/toaster";
export const CustomerForm: FC<{ tourId: number }> = ({ tourId }) => {
  const { loading, onSubmitForm } = useApiService();
  const handleSubmitForm = async (
    values: ICustomer,
    formikHelpers: FormikHelpers<ICustomer>
  ) => {
    values.tourId = tourId;
    var result = (await onSubmitForm(values)) as ICustomerResponse;

    if (result.success) {
      notifySuccess("سيتم التواصل معك في أقرب وقت");
      formikHelpers.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: __initialValues__Customer,
    onSubmit: handleSubmitForm,
    validateOnChange: true,
    validationSchema: Schema,
  });

  const { values, handleBlur, handleChange, touched, errors } = formik;
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        placeholder="الإسم"
        label="الإسم"
        value={values.name}
        name="name"
        onBlur={handleBlur}
        onChange={handleChange}
        error={!!touched.name && !!errors.name}
        helperText={touched.name && errors.name}
        dir="rtl"
        additionalClass="md:text-16 md:text-14 text-right"
      />
      <CustomPhoneInput
        country={"jo"}
        value={values.phoneNumber}
        inputClass="text-16 md:text:14 phone-padding w-100"
        onChange={(phone) => formik.setFieldValue("phoneNumber", phone)}
        label="رقم الهاتف"
        error={!!touched.phoneNumber && !!errors.phoneNumber}
        helperText={touched.phoneNumber && errors.phoneNumber}
      />
      <Select
        type="text"
        placeholder="طريقة التواصل المفضلة"
        label="طريقة التواصل المفضلة"
        additionalClass="md:text-16 md:text-14 text-right"
        options={[
          {
            label: "Whatsapp",
            value: eContactMethod.WhatsApp,
          },
          {
            label: "Call",
            value: eContactMethod.Call,
          },
        ]}
        value={values.contactMethod}
        name="contactMethod"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="ملاحظات أخرى"
        label="ملاحظات أخرى"
        value={values.notes}
        name="notes"
        onBlur={handleBlur}
        onChange={handleChange}
        dir="rtl"
        additionalClass="md:text-16 md:text-14 text-right"
      />
      <div className="mt-10">
        <button
          className="mainSearch__submit button -dark-1 py-10 px-5 col-12 rounded-4 bg-blue-1 text-white text-16"
          type="submit"
        >
          {loading ? (
            <span
              className="spinner-border spinner-border-sm mr-10"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            <div className="bi bi-arrow-up-left mr-15 "></div>
          )}
          {loading ? "جاري الإرسال" : "إرســال"}
        </button>
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
