import IconProvider from "@/provider/icon-provider";
import { FunctionComponent } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface SuccessMessageProps {}

const SuccessMessage: FunctionComponent<SuccessMessageProps> = () => {
  return (
    <>
      <IconProvider size="35px">
        <FaCheckCircle />
      </IconProvider>
      <h1 className="text-xl text-center mt-4">
        شكراً لتواصلك ، سيتم التواصل معك في اقرب وقت ممكن!
      </h1>
    </>
  );
};

export default SuccessMessage;
