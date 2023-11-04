import { FC } from "react";
import "react-phone-input-2/lib/bootstrap.css";
import { CustomerForm } from "./CustomerForm";
import { Tour } from "@/types/custom";
import { Card } from "@nextui-org/react";
import { Separator } from "../ui/separator";

const SidebarRight: FC<{ tour: Tour }> = ({ tour }) => {
  return (
    <div className="w-full">
      <Card className="py-5  rounded-sm">
        <div className="mb-2 text-light-1 text-center">
          <span className="text-xl fw-500 text-dark-1 ">
            تواصل معنا لمزيد من المعلومات
          </span>
          <Separator className="mt-4" />
        </div>
        <div className="px-5">
          <CustomerForm tourId={tour?.id} />
        </div>
      </Card>
    </div>
  );
};

export default SidebarRight;
