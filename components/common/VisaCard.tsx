import { VisaType } from "@/types/custom";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import IconProvider from "@/provider/icon-provider";
import { IoDocumentTextSharp } from "react-icons/io5";
import { Separator } from "../ui/separator";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa";
interface VisaCardProps {
  visa: VisaType;
}

const VisaCard: FunctionComponent<VisaCardProps> = ({ visa }) => {
  return (
    <motion.div
      dir="rtl"
      className="flex flex-1 flex-col gap-3 px-6 py-2 overflow-y-auto"
      id=":raf:"
    >
      <div className="flex justify-start gap-x-2 items-center">
        <IconProvider>
          <IoDocumentTextSharp />
        </IconProvider>
        <h1 className="text-black text-lg font-bold">المستندات المطلوبة</h1>
      </div>
      <ul className="list-inside list-disc pr-3 mt-0 space-y-1" dir="rtl">
        {visa.requirements.map((i) => (
          <li key={i} dir="rtl" className="text-right">
            {i}
          </li>
        ))}
      </ul>
      <Separator className="my-2" />
      <div className="flex justify-start gap-x-2 items-center">
        <IconProvider>
          <AiFillDollarCircle />
        </IconProvider>
        <h1 className="text-black text-lg font-bold">التكلفة</h1>
      </div>
      <div className="mt-0 " dir="rtl">
        <ul className="list-inside list-disc pr-3 mt-0 space-y-1" dir="rtl">
          {visa.price.map((i, index) => (
            <li key={`pricec-${index}`} className="text-right" dir="rtl">
              {i}
            </li>
          ))}
        </ul>
      </div>
      <Separator className="my-2" />
      <div className="flex justify-start gap-x-2 items-center">
        <IconProvider>
          <FaClipboardCheck />
        </IconProvider>
        <h1 className="text-black text-lg font-bold">ملاحظات</h1>
      </div>
      <div className="mt-0 " dir="rtl">
        <ul className="list-inside list-disc pr-3 mt-0 space-y-1" dir="rtl">
          {visa.note?.split(",").map((i, index) => (
            <li key={index} dir="rtl" className="text-right">
              {i}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default VisaCard;
