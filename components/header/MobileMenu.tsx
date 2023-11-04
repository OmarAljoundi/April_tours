import { homeItems } from "@/data/mainMenuData";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const MobileMenu = ({ classes = "", handleOpen }) => {
  return (
    <nav className="w-full py-2 ">
      <div className="flex-col space-y-2 divide-y-2 w-full">
        {homeItems.map((o: any, index) => (
          <Button
            as={Link}
            size="sm"
            variant="bordered"
            className="text-right w-full text-black bg-white"
            key={index}
            href={o.routePath}
            onClick={handleOpen}
          >
            {o.name}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default MobileMenu;
