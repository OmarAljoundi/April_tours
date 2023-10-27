import { useSetting } from "@/hooks/use-setting";
import { PushJsonFile } from "@/lib/storage-operations";
import { Faq } from "@/types/custom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";
import { toast } from "sonner";

const CardDetails: FunctionComponent<Faq> = ({ description, title, uuid }) => {
  const config = useSetting();
  const route = useRouter();
  const handleDelete = () => {
    let newObject = { ...config.setting };
    newObject = {
      ...newObject,
      faq: [...(newObject.faq?.filter((x) => x.uuid !== uuid) ?? [])],
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
      <CardHeader className="pt-2 px-4 flex items-center justify-between pb-2">
        <h4 className="font-bold text-large text-right">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 border-t pb-4">
        {description}
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
