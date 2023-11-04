import { homeItems } from "@/data/mainMenuData";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const MobileMenu = ({ classes = "", handleOpen }) => {
  return (
    <nav className="w-full">
      <ul className={cn("flex", classes)}>
        {homeItems.map((o: any, index) => (
          <Button
            as={"li"}
            size="sm"
            dir="rtl"
            color="secondary"
            className="text-right w-full text-white"
            key={index}
            onClick={handleOpen}
          >
            <Link href={o.routePath}>
              <span className="mr-0">{o.name}</span>
            </Link>
          </Button>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
