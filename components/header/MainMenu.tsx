import { homeItems } from "@/data/mainMenuData";
import Link from "next/link";

const MainMenu = ({ style = "" }) => {
  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        {homeItems.map((o: any, index) => (
          <li className="menu-item-has-children -has-mega-menu" key={index}>
            <Link href={o.routePath}>
              <span className="mr-10">{o.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
