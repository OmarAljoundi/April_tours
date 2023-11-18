"use client";
import BlurImageV2 from "@/components/common/BlurImageV2";
import VisaCard from "@/components/common/VisaCard";
import { useSetting } from "@/hooks/use-setting";
import { PushJsonFile } from "@/lib/storage-operations";
import { VisaType } from "@/types/custom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import { Edit, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";
import { toast } from "sonner";

const CardDetails: FunctionComponent<VisaType> = ({
  image,
  requirements,
  title,
  uuid,
  note,
  period,
  price,
  sub_title,
}) => {
  const config = useSetting();
  const route = useRouter();

  const handleDelete = () => {
    let newObject = { ...config.setting };
    newObject = {
      ...newObject.home,
      visa: {
        ...newObject.visa?.seo,
        visa_types: [
          ...(newObject.visa?.visa_types?.filter((x) => x.uuid !== uuid) ?? []),
        ],
      },
    };

    const jsonData = JSON.stringify(newObject);
    const blob = new Blob([jsonData], { type: "application/json" });
    toast.promise(PushJsonFile(blob), {
      loading: "Saving your changes..",
      error(error) {
        return error;
      },
      success() {
        config.onCreate(newObject);
        route.refresh();
        return "Saved successfully";
      },
    });
  };

  return (
    <Card className="pt-4">
      <CardHeader className="pt-2 px-4 flex items-center justify-end text-right pb-2">
        <div className="flex justify-end gap-x-2">
          <div className="flex justify-start items-center gap-x-2 mb-4">
            <span className="text-xl lg:text-3xl visa-title transition-all duration-300">
              {title}
            </span>
            <BlurImageV2
              src={image}
              alt=""
              width={300}
              height={150}
              className="max-w-[31px] object-cover visa-image"
              quality={100}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2 border-t pb-4" dir="rtl">
        <VisaCard
          visa={{
            image,
            requirements,
            title,
            uuid,
            note,
            period,
            price,
            sub_title,
          }}
        />
      </CardBody>
      <CardFooter className="pt-2 p-0 border-t">
        <div className="flex gap-1 justify-between items-center w-full pt-3 pb-1 px-4">
          <div className="flex">
            <Button
              isIconOnly
              className="text-default-900/60 data-[hover]:bg-foreground/10 "
              radius="full"
              variant="light"
              as={Link}
              href={`visa/edit/${uuid}`}
            >
              <Edit />
            </Button>
            <Button
              isIconOnly
              className="text-default-900/60   data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
              onPress={() => handleDelete()}
            >
              <Trash />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardDetails;
