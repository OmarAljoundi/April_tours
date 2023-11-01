"use client";
import { MenuItems } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SubSidebarNavProps {}

const SubSidebarNav: FunctionComponent<SubSidebarNavProps> = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen fixed w-[200px]  transition-all  hide-scrollbar  border-r bg-scale-200 dark:border-dark ">
      <div
        className="dark:border-dark flex max-h-12 items-center border-b px-6"
        style={{ minHeight: "3rem" }}
      ></div>
      <div
        className="flex-grow overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 96px)" }}
      >
        <div className="flex flex-col space-y-8 overflow-y-auto">
          <nav
            role="menu"
            aria-label="Sidebar"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="my-6 space-y-8">
              <div className="mx-3">
                <div className="space-y-3">
                  {MenuItems?.map((item) => (
                    <Link
                      href={item.href}
                      key={item.label}
                      className={cn(
                        `cursor-pointer flex space-x-3 items-center outline-none focus-visible:ring-1
                              focus-visible:z-10 group px-3    
                             font-semibold   rounded-md `,
                        pathname === item.href
                          ? "bg-slate-300 ring-scale-1200 dark:bg-scale-300 text-scale-900"
                          : "hover:bg-slate-100 dark:hover:bg-scale-300"
                      )}
                      aria-current="page"
                    >
                      <div
                        className={cn(
                          `transition-colors w-full duration-200 flex items-center justify-start gap-x-2 group h-9 rounded`
                        )}
                      >
                        <item.icon className={"h-5 w-5 "} />
                        <div className="text-sm"> {item.label}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SubSidebarNav;
