"use client";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/legacy/image";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { MenuSquare } from "lucide-react";
import { useCallback, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <header className={`container`} style={{ position: "relative" }}>
      <div
        className={`flex justify-between sm:justify-start gap-x-2 items-center`}
      >
        <Link className="block" href={"/"}>
          <Image
            src="/assets/img/logo/main-logo.png"
            alt="April Tours Logo"
            width={150}
            height={90}
            layout="fixed"
            objectFit="contain"
            quality={100}
            className="ease-in-out group-hover:opacity-75"
          />
        </Link>
        <div>
          <div className="hidden sm:block">
            <MainMenu handleOpen={handleOpen} />
          </div>
          <div className="block sm:hidden px-2">
            <Popover
              placement="right"
              showArrow={true}
              offset={10}
              isOpen={isOpen}
              onOpenChange={(open) => setIsOpen(open)}
            >
              <PopoverTrigger>
                <Button variant="ghost" isIconOnly>
                  <MenuSquare />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <MainMenu
                  classes="flex-col gap-y-1 divide-y-2"
                  handleOpen={handleOpen}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
