import { Tour } from "@/types/custom";
import { Card } from "@nextui-org/react";
import { FunctionComponent } from "react";

interface BasicInfoProps {
  tour: Tour;
}

const BasicInfo: FunctionComponent<BasicInfoProps> = ({ tour }) => {
  return (
    <Card className="grid w-full px-2  grid-cols-1 xl:grid-cols-2 xl:gap-x-8  lg:border-t lg:border-dashed   gap-md-0 divide-y divide-dashed mt-2 p-4 rounded-sm">
      <h4 className=" text-2xl  mb-[20px]">معلومات البرنامج</h4>
      <div className="py-2 col-span-2">
        <div className="flex items-center gap-4 ">
          <div className="grid items-center ">
            <span>السعر للغرفة المزدوجة</span>
            <span className="text-primary ">{tour?.price_double} USD</span>
          </div>
        </div>
      </div>
      <div className="py-2 col-span-2">
        <div className="flex items-center gap-4 ">
          <div className="grid items-center ">
            <span>السعر للغرفة المنفردة</span>
            <span className="text-primary ">{tour?.price_single} USD</span>
          </div>
        </div>
      </div>
      <div className="py-2 col-span-2">
        <div className="flex items-center gap-4 ">
          <div className="grid items-center ">
            <span>الدول</span>
            <span className="text-primary ">
              {tour?.tour_countries?.map((i) => i)?.join(" - ")}
            </span>
          </div>
        </div>
      </div>
      <div className="py-2 col-span-2">
        <div className="flex items-center gap-4 ">
          <div className="grid items-center ">
            <span>الدول</span>
            <span className="text-primary ">
              {tour?.tour_countries?.map((i) => i)?.join(" - ")}
            </span>
          </div>
        </div>
      </div>

      <div className="py-2 col-span-2">
        <div className="flex items-center gap-4 ">
          <div className="grid items-center w-fit">
            <span>المدة</span>
            <span>
              <span className="text-primary">{tour?.number_of_days} أيام</span>
            </span>
          </div>
        </div>
      </div>
      <div className="py-2 col-span-2">
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-4 ">
            <div className="grid items-center ">
              <span>تاريخ الرحلة</span>
              <div className="flex justify-between items-center gap-4">
                <span className="text-primary">
                  أيام {tour?.start_day} أسبوعياً
                </span>
              </div>
            </div>
          </div>
          {/* <DatesData tour={tour} /> */}
        </div>
      </div>
      <div className="py-2 col-span-2">
        <div className="flex items-center gap-4 ">
          <div className="grid items-center ">
            <span>نوع الرحلة </span>
            <span>
              <span className="text-primary">{tour?.tour_type?.name}</span>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BasicInfo;
