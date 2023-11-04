import IconProvider from "@/provider/icon-provider";
import { Tour } from "@/types/custom";
import { Card } from "@nextui-org/react";
import { Hotel } from "lucide-react";
import { FC } from "react";
import { FaHotel } from "react-icons/fa";

const TourHotels: FC<{ tour: Tour }> = ({ tour }) => {
  return (
    <Card className="mt-2 p-4 rounded-sm">
      <h4 className="mb-0 text-2xl  "> أسماء الفنادق المتوقعة</h4>
      <div className="border border-dashed my-5"></div>
      <ul className="flex flex-col gap-4 mb-10">
        {tour?.tour_hotels?.map((i) => (
          <li key={i}>
            <div className="flex items-center gap-2">
              <IconProvider>
                <FaHotel />
              </IconProvider>

              <span className="inline-block font-primary">{i}</span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TourHotels;
