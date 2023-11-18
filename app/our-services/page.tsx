import { FunctionComponent } from "react";
import ServiceHeader from "./service-header";
import Services from "./services";
import Visa from "./visa";

interface OurServicesPageProps {}

const OurServicesPage: FunctionComponent<OurServicesPageProps> = () => {
  return (
    <div>
      <ServiceHeader />
      <div className="container space-y-14 px-6 lg:px-14 xl:px-32 2xl:px-2">
        <Services />
        <Visa />
      </div>
    </div>
  );
};

export default OurServicesPage;
