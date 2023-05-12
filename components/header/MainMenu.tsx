import { homeItems } from "@/data/mainMenuData";

const MainMenu = ({ style = "" }) => {
  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        {homeItems.map((o: any) => (
          <li className="menu-item-has-children -has-mega-menu">
            <a href={o.routePath}>
              <span className="mr-10">{o.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
