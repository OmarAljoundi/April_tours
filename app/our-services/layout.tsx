import { FunctionComponent, ReactNode } from "react";

interface LayoutOurServicesProps {
  children: ReactNode;
}

const LayoutOurServices: FunctionComponent<LayoutOurServicesProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export default LayoutOurServices;
