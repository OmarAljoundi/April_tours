import BestToursForm from "@/components/settings/best-tours";
import { FunctionComponent } from "react";

interface BestToursSettingProps {}

const BestToursSetting: FunctionComponent<BestToursSettingProps> = () => {
  return (
    <div className="mt-16 px-8">
      <BestToursForm />
    </div>
  );
};

export default BestToursSetting;
