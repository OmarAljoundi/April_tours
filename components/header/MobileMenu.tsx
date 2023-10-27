import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { MobileHomeItems, homeItems } from "../../data/mainMenuData";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import Link from "next/link";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";

const MobileMenu = () => {
  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        {/* <Link href="/">
          <img src="assets/img/logo/main-logo.png" alt="brand" />
        </Link> */}
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar width="400" backgroundColor="#fff">
          <Menu>
            {MobileHomeItems.map((item: any, i: number) => (
              <MenuItem
                key={i}
                className="text-right"
                component={
                  <Link
                    href={item.routePath}
                    // className={
                    //   isActiveLink(item.routePath, router.pathname)
                    //     ? "menu-active-link"
                    //     : ""
                    // }
                  />
                }
              >
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-2 text-right">
          <h5 className="text-16 fw-500 mb-2">تابعنا على </h5>
          <div className="d-flex x-gap-20 items-center justify-end">
            <Social />
          </div>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
