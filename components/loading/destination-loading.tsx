import { Card, Skeleton } from "@nextui-org/react";
import { FunctionComponent } from "react";

interface DestinationLoadingProps {
  columns: number;
}

const DestinationLoading: FunctionComponent<DestinationLoadingProps> = ({
  columns,
}) => {
  return (
    <>
      {Array.from(new Array(columns)).map((item, index) => (
        <Card className="w-full space-y-5 p-4" radius="lg" key={index}>
          <Skeleton className="rounded-lg ">
            <div className="aspect-[3/4] rounded-lg bg-default-300"></div>
          </Skeleton>
        </Card>
      ))}
    </>
  );
};

export default DestinationLoading;
