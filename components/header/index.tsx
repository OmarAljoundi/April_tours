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
import { IoMenuSharp } from "react-icons/io5";
import { useCallback, useState } from "react";
import IconProvider from "@/provider/icon-provider";
import { FiMail } from "react-icons/fi";
import { BsTelephoneInboundFill } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <header className={`container`} style={{ position: "relative" }}>
      <div className="flex items-center justify-between">
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
            <div className="hidden lg:block">
              <MainMenu handleOpen={handleOpen} />
            </div>
            <div className="block lg:hidden px-2">
              <Popover
                placement="bottom"
                classNames={{
                  base: "w-[250px]",
                }}
                showArrow={true}
                offset={10}
                isOpen={isOpen}
                onOpenChange={(open) => setIsOpen(open)}
              >
                <PopoverTrigger>
                  <Button className="bg-transparent" isIconOnly>
                    <IconProvider isRounded={false}>
                      <IoMenuSharp />
                    </IconProvider>
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <MobileMenu
                    classes="flex-col gap-y-1 divide-y-2 w-full"
                    handleOpen={handleOpen}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        <div className="flex-col gap-y-1 sm:flex-row md:flex-col xl:flex-row flex justify-end gap-x-4">
          <div className="flex justify-end items-center gap-x-2">
            <span dir="ltr" className="font-serif text-xs sm:text-sm">
              +972 672 7957
            </span>
            <IconProvider>
              <BsTelephoneInboundFill />
            </IconProvider>
          </div>
          <div className="flex justify-end font-serif items-center gap-x-2">
            <span className="text-xs sm:text-sm">info@apriltours.com</span>
            <IconProvider>
              <FiMail />
            </IconProvider>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
