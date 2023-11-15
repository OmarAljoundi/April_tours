import BlurImageV2 from "@/components/common/BlurImageV2";
import { VisaType } from "@/types/custom";
import { Button, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { FunctionComponent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import IconProvider from "@/provider/icon-provider";
import { BsPlusLg } from "react-icons/bs";
import {
  AiFillDollarCircle,
  AiOutlineMinus,
  AiOutlineQuestion,
} from "react-icons/ai";
import { cn } from "@/lib/utils";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaCheckCircle, FaClipboardCheck } from "react-icons/fa";
interface VisaCardProps {
  visa: VisaType;
  isOpen: string;
  setIsOpen: (b: string) => void;
}

const VisaCard: FunctionComponent<VisaCardProps> = ({
  visa,
  isOpen,
  setIsOpen,
}) => {
  const { image, note, period, price, requirements, sub_title, title, uuid } =
    visa;
  return (
    <>
      <motion.div
        layoutId={uuid}
        className=" w-full relative shadow-medium  grid justify-items-start space-y-12  rounded-medium"
        onClick={() => (isOpen === uuid ? setIsOpen("") : setIsOpen(uuid))}
      >
        <div className="flex items-center justify-between">
          <div className="flex justify-start items-center gap-x-2 px-4">
            <BlurImageV2
              src={image}
              alt=""
              width={300}
              height={150}
              className="max-w-[50px] object-cover visa-image"
              quality={100}
            />
            <span className="text-xl lg:text-3xl visa-title transition-all duration-300">
              {title}
            </span>
          </div>
          <div className="pl-4">
            <IconProvider>
              {isOpen == uuid ? <AiOutlineMinus /> : <BsPlusLg />}
            </IconProvider>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen == uuid && (
          <motion.div layoutId={isOpen}>
            <Modal
              isOpen={true}
              placement={"auto"}
              onOpenChange={() => setIsOpen("")}
            >
              <ModalContent>
                <ModalBody>
                  <div className="flex justify-start gap-x-2 items-center">
                    <IconProvider>
                      <IoDocumentTextSharp />
                    </IconProvider>
                    <h1 className="text-black text-lg font-bold">
                      المستندات المطلوبة
                    </h1>
                  </div>
                  <ul
                    className="list-inside list-disc pr-3 mt-4 space-y-1"
                    dir="rtl"
                  >
                    {requirements.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <Separator className="my-2" />
                  <div className="flex justify-start gap-x-2 items-center">
                    <IconProvider>
                      <AiFillDollarCircle />
                    </IconProvider>
                    <h1 className="text-black text-lg font-bold">التكلفة</h1>
                  </div>
                  <div className="mt-4 pr-3" dir="rtl">
                    <ul
                      className="list-inside list-disc pr-3 mt-4 space-y-1"
                      dir="rtl"
                    >
                      <li>{price}</li>
                      <li>{price}</li>
                      <li>{price}</li>
                    </ul>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-start gap-x-2 items-center">
                    <IconProvider>
                      <FaClipboardCheck />
                    </IconProvider>
                    <h1 className="text-black text-lg font-bold">ملاحظات</h1>
                  </div>
                  <div className="mt-4 pr-3" dir="rtl">
                    <h4>{note}</h4>
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VisaCard;
