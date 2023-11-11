import { FunctionComponent } from "react";
import ServiceHeader from "./service-header";
import Services from "./services";
import Visa from "./visa";

interface OurServicesPageProps {}

const OurServicesPage: FunctionComponent<OurServicesPageProps> = () => {
  return (
    <div>
      <ServiceHeader />
      <div className="container">
        <Services />
        <Visa />
      </div>
    </div>
  );
};

export default OurServicesPage;
