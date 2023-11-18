import { ListAllImagesInBucket } from "@/lib/storage-operations";
import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Skeleton } from "../../ui/skeleton";
import { formatBytes } from "@/lib/helpers";
import { Check } from "lucide-react";
import { ScrollArea } from "../../ui/scroll-area";
import { FormikProps } from "formik";
import { cn } from "@/lib/utils";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";
import { TOUR_IMAGE } from "@/lib/keys";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import ImageRef from "./image-ref";

const FromLibrary: FC<{
  formik: FormikProps<any>;
  closeModal: () => void;
  selectedImages: string[];
  setSelectedImages: (select: string[]) => void;
  loadingDelete: boolean;
}> = ({ selectedImages, setSelectedImages, loadingDelete }) => {
  const [pageSize, setPageSize] = useState(100);
  const [total, setTotal] = useState(0);

  const [end, setEnd] = useState(false);

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const res = await ListAllImagesInBucket(pageSize, 0);
      return res;
    },
    queryKey: [`IMAGES_LIST-${pageSize}`],
    refetchInterval: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onSuccess(data) {
      if (data.length == total) {
        setEnd(true);
      } else {
        setTotal(data.length);
      }
    },
  });

  useEffect(() => {
    return () => {
      setSelectedImages([]);
    };
  }, []);

  const getImageLink = (imagePath: string) =>
    `${process.env.NEXT_PUBLIC_IMAGE_URL!}/${imagePath}`;

  return (
    <ScrollArea className="h-[550px] rounded-md border p-4">
      <div className="grid grid-cols-5 gap-4 ">
        {isLoading &&
          Array.from(new Array(6)).map((i) => (
            <div
              key={i}
              className="image-item border border-dashed rounded-xl relative"
            >
              <Skeleton className="w-full rounded-xl h-36" />
            </div>
          ))}
        {data?.map((image, index) => (
          <Card
            key={index}
            className={cn(
              loadingDelete &&
                selectedImages.includes(
                  getImageLink(`${TOUR_IMAGE}/${image.name}`)
                )
                ? "opacity-40"
                : "opacity-100"
            )}
            shadow="sm"
          >
            <CardHeader className="p-0">
              <Image
                loading="lazy"
                isBlurred
                isZoomed
                src={getImageLink(`${TOUR_IMAGE}/${image.name}`)}
                alt=""
                classNames={{
                  zoomedWrapper: "rounded-b-none",
                }}
                className="w-52 rounded-none h-52 object-contain"
              />
            </CardHeader>
            <CardBody className="justify-end">
              <span className="max-w-[75%] truncate mt-3">{image.name}</span>
              <span className="text-xs">
                {formatBytes(image?.metadata?.size ?? 0, 2)}
              </span>
              {selectedImages?.includes(
                getImageLink(`${TOUR_IMAGE}/${image.name}`)
              ) ? (
                <Button
                  size={"sm"}
                  className="my-2"
                  variant={"bordered"}
                  color="danger"
                  startContent={<IoIosRemoveCircleOutline />}
                  onClick={() => {
                    setSelectedImages([
                      ...selectedImages.filter(
                        (x) => x !== getImageLink(`${TOUR_IMAGE}/${image.name}`)
                      ),
                    ]);
                  }}
                >
                  Unselect Image
                </Button>
              ) : (
                <Button
                  size={"sm"}
                  className="my-2"
                  variant={"bordered"}
                  color="primary"
                  startContent={<CiCircleCheck />}
                  onClick={() => {
                    setSelectedImages([
                      ...selectedImages,
                      getImageLink(`${TOUR_IMAGE}/${image.name}`),
                    ]);
                  }}
                >
                  Select Image
                </Button>
              )}

              <ImageRef
                selectedImage={getImageLink(`${TOUR_IMAGE}/${image.name}`)}
              />

              {selectedImages?.includes(
                getImageLink(`${TOUR_IMAGE}/${image.name}`)
              ) && (
                <Button
                  type="button"
                  isIconOnly
                  className="absolute top-2 right-2 bg-green-600  rounded-full  "
                  size="sm"
                >
                  <Check className="w-4 h-4 text-white" />
                </Button>
              )}
            </CardBody>
          </Card>
        ))}
        <div className="col-span-5">
          {end ? (
            <div className="flex justify-center">
              <Chip color="primary">
                <div className="flex justify-start gap-x-2">
                  <h1 dir="ltr">You reached the end.</h1>
                  <Check />
                </div>
              </Chip>
            </div>
          ) : (
            <Button
              onPress={() => setPageSize(pageSize + 100)}
              className="w-full"
              color="primary"
              isLoading={isLoading}
            >
              Load More..
            </Button>
          )}
        </div>
      </div>
    </ScrollArea>
  );
};

export default FromLibrary;
