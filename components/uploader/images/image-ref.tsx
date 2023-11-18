import { Separator } from "@/components/ui/separator";
import { getImagePlacecs } from "@/lib/operations";
import {
  Button,
  Chip,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner,
} from "@nextui-org/react";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { useQuery } from "react-query";

interface ImageRefProps {
  selectedImage: string;
}

const ImageRef: FunctionComponent<ImageRefProps> = ({ selectedImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useQuery({
    queryFn: async () => await getImagePlacecs(selectedImage),
    queryKey: [selectedImage],
    refetchInterval: false,
    refetchOnWindowFocus: true,
    enabled: isOpen,
  });
  return (
    <Popover
      showArrow
      offset={10}
      placement="bottom"
      backdrop={"blur"}
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>
        <Button
          size={"sm"}
          className="my-2"
          variant={"bordered"}
          color="primary"
          startContent={<CiCircleInfo />}
        >
          Image references
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <div className="flex justify-between items-center">
              <p
                className="text-medium font-bold text-foreground"
                {...titleProps}
              >
                Image Refrances
              </p>
              {!isLoading && <Chip color="primary">{data?.total}</Chip>}
            </div>
            {isLoading ? (
              <Spinner color="default" />
            ) : (
              <div className="p-2 mt-4 space-y-6">
                {data.results.size == 0 && <h1>Image has no references</h1>}
                {Array.from(data.results).map(([category, items]) => (
                  <div
                    key={category}
                    className="grid justify-items-center space-y-2"
                  >
                    <Chip
                      classNames={{ base: "rounded-none" }}
                      color="secondary"
                    >
                      {category}
                    </Chip>
                    <ul className="list-disc list-inside" dir="rtl">
                      {items.map((item, index) => (
                        <li
                          key={index}
                          className="text-ellipsis overflow-hidden line-clamp-1"
                        >
                          {item.name}
                        </li>
                      ))}
                    </ul>
                    <Separator className="my-2" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default ImageRef;
