import BlurImageV2 from "@/components/common/BlurImageV2";
import { VisaType } from "@/types/custom";
import { Button } from "@nextui-org/react";
import { FunctionComponent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import IconProvider from "@/provider/icon-provider";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus, AiOutlineQuestion } from "react-icons/ai";
import { cn } from "@/lib/utils";
interface VisaCardProps {
  visa: VisaType;
}

const VisaCard: FunctionComponent<VisaCardProps> = ({ visa }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { image, note, period, price, requirements, sub_title, title, uuid } =
    visa;
  return (
    <div
      className={cn(
        "grid items-center justify-items-center cursor-pointer  duration-300 transition-all ",
        isOpen ? "" : "lg:hover:scale-105"
      )}
    >
      <motion.div
        layout
        data-isOpen={isOpen}
        className="parent w-full relative shadow-medium rounded-none grid justify-items-start space-y-12"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div layout className="child flex items-center justify-between">
          <div className="flex justify-start items-center">
            <BlurImageV2
              src={image}
              alt=""
              width={300}
              height={150}
              className="max-w-[75px] object-cover visa-image"
              quality={100}
            />
            <span className="text-xl lg:text-3xl visa-title transition-all duration-300">
              {title}
            </span>
          </div>
          <div className="pl-4">
            <IconProvider>
              {!isOpen ? <BsPlusLg /> : <AiOutlineMinus />}
            </IconProvider>
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, display: "none" }}
            >
              <div className="flex justify-start gap-x-2 items-center">
                <IconProvider>
                  <AiOutlineQuestion />
                </IconProvider>
                <h1 className="text-secondary text-lg">المتطلبات الرئيسية</h1>
              </div>
              <ul className="list-inside list-disc pr-3 mt-4" dir="rtl">
                {requirements.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <Separator className="my-2" />
              <div className="flex justify-start gap-x-2 items-center">
                <IconProvider>
                  <AiOutlineQuestion />
                </IconProvider>
                <h1 className="text-secondary text-lg">مدة التاشيرة</h1>
              </div>
              <div className="mt-4 pr-3" dir="rtl">
                <h4>{period}</h4>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-start gap-x-2 items-center">
                <IconProvider>
                  <AiOutlineQuestion />
                </IconProvider>
                <h1 className="text-secondary text-lg">سعر التأشيرة</h1>
              </div>
              <div className="mt-4 pr-3" dir="rtl">
                <h4>{price}</h4>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-start gap-x-2 items-center">
                <IconProvider>
                  <AiOutlineQuestion />
                </IconProvider>
                <h1 className="text-secondary text-lg">ملاحظة مهمة</h1>
              </div>
              <div className="mt-4 pr-3" dir="rtl">
                <h4>{note}</h4>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default VisaCard;
