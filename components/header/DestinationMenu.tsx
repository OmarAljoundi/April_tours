import { REVALIDATE_LOCATION_LIST } from "@/lib/keys";
import { getDestination } from "@/lib/operations";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ArrowDown } from "lucide-react";
import { FunctionComponent, useState } from "react";
import { useQuery } from "react-query";
import { getTotalTours } from "../destinations/PopularDestinations";
import { Button, ButtonGroup } from "@nextui-org/react";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DestinationMenuProps {}

const DestinationMenu: FunctionComponent<DestinationMenuProps> = () => {
  const { data } = useQuery(
    [REVALIDATE_LOCATION_LIST],
    async () => await getDestination(),
    {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      select(data) {
        return data?.results?.filter((x) => x.is_active);
      },
    }
  );
  const [open, setOpen] = useState(false);
  return (
    <Dropdown
      isOpen={open}
      onOpenChange={(e) => setOpen(e)}
      dir="rtl"
      showArrow
      classNames={{
        base: "before:bg-default-200 max-h-56",
        content:
          "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
      }}
      closeOnSelect={true}
    >
      <DropdownTrigger>
        <div className="mr-5 flex items-center gap-x-2 cursor-pointer">
          <span>الوجهات السياحية</span>
          <ArrowDown
            className={cn(
              "w-4 h-4 duration-300 transition-all",
              open ? "rotate-180" : "rotate-0"
            )}
          />
        </div>
      </DropdownTrigger>

      <DropdownMenu
        dir="rtl"
        as={ScrollArea}
        aria-label="ACME features"
        className="w-[340px] max-h-64"
        itemClasses={{
          base: "gap-4",
        }}
      >
        {data?.map((location) => (
          <DropdownItem
            as={Link}
            href={`/tour-listing/${location.slug}`}
            key={location.name}
            description={`${getTotalTours(location)} رحلة ضمن البرنامج`}
          >
            {location.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DestinationMenu;
