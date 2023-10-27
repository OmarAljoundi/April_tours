import { FC } from "react";
import "react-phone-input-2/lib/bootstrap.css";
import { CustomerForm } from "./CustomerForm";
import { Tour } from "@/types/custom";
import { Card } from "@nextui-org/react";

const SidebarRight: FC<{ tour: Tour }> = ({ tour }) => {
  return (
    <div className="w-full">
      <Card className=" py-5 px-10 rounded-sm">
        <div className="mb-2 text-light-1 text-center">
          <span className="text-xl fw-500 text-dark-1 ">
            تواصل معنا لمزيد من المعلومات
          </span>
        </div>
        <div className="px-10">
          <CustomerForm tourId={tour?.id} />
        </div>
      </Card>
    </div>
  );
};

export default SidebarRight;
