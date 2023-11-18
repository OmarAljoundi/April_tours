"use client";
import { homeItems } from "@/data/mainMenuData";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = ({ classes = "", handleOpen }) => {
  const path = usePathname();
  return (
    <nav>
      <ul className={cn("flex", classes)}>
        {homeItems.map((o, index) => (
          <>
            {o.renderMenu ? (
              <o.renderMenu />
            ) : (
              <li key={index} onClick={handleOpen}>
                <Link
                  href={o.routePath}
                  className={cn(
                    "hover:underline decoration-secondary  transition-all duration-1000",
                    path == o.routePath ? "underline" : ""
                  )}
                >
                  <span className="mr-5 ">{o.name}</span>
                </Link>
              </li>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
