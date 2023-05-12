import { ITour } from "@/models/interface/Tour";
import { FC } from "react";
import "react-phone-input-2/lib/bootstrap.css";
import { CustomerForm } from "./CustomerForm";

const SidebarRight: FC<{ tour: ITour }> = ({ tour }) => {
  return (
    <div className="d-flex justify-end js-pin-content shadow">
      <div className="w-100 lg:w-full d-flex flex-column items-center">
        <div className=" py-30 px-10 rounded-4 border-light bg-white shadow-4 w-100">
          <div className="text-14 text-light-1 text-center">
            <span className="text-16 fw-500 text-dark-1 ">
              تواصل معنا لمزيد من المعلومات
            </span>
          </div>
          <div className="px-10">
            <CustomerForm tourId={tour?.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
