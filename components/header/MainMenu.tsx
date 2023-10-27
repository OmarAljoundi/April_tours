import { homeItems } from "@/data/mainMenuData";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MainMenu = ({ classes = "", handleOpen }) => {
  return (
    <nav>
      <ul className={cn("flex", classes)}>
        {homeItems.map((o: any, index) => (
          <li key={index} onClick={handleOpen}>
            <Link href={o.routePath}>
              <span className="mr-5">{o.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
