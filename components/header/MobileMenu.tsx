import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { homeItems } from "../../data/mainMenuData";
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
            <SubMenu label="Home">
              {homeItems.map((item: any, i: number) => (
                <MenuItem
                  key={i}
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
            </SubMenu>
            {/* End  All Home Menu */}

            <SubMenu label="Categories">
              {/* {categorieMobileItems.map((item: any) => (
                <SubMenu label={item.title} key={item.id}>
                  {item.menuItems.map((single: any) => (
                    <SubMenu label={single.title} key={single.id}>
                      {single.menuList.map((menu: any, i: number) => (
                        <MenuItem
                          key={i}
                          component={
                            <Link
                              href={menu.routePath}
                              // className={
                              //   isActiveLink(menu.routePath, router.pathname)
                              //     ? "menu-active-link"
                              //     : ""
                              // }
                            />
                          }
                        >
                          {menu.name}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  ))}
                </SubMenu>
              ))} */}
            </SubMenu>
            {/* End  All Categories Menu */}

            <MenuItem
              component={
                <a
                  href="/destinations"
                  // className={
                  //   router.pathname === "/destinations"
                  //     ? "menu-active-link"
                  //     : ""
                  // }
                />
              }
            >
              Desitinations
            </MenuItem>
            {/* End  Desitinations Menu */}

            <SubMenu label="Blog">
              {/* {blogItems.map((item: any, i: number) => (
                <MenuItem
                  key={i}
                  component={
                    <a
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
              ))} */}
            </SubMenu>
            {/* End  All Blog Menu */}

            <SubMenu label="Pages">
              {/* {pageItems.map((item: any, i: number) => (
                <MenuItem
                  key={i}
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
              ))} */}
            </SubMenu>
            {/* End  All Pages Menu */}

            <SubMenu label="Dashboard">
              {/* {dashboardItems.map((item: any, i: number) => (
                <MenuItem
                  key={i}
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
              ))} */}
            </SubMenu>
            {/* End  All Dashboard Menu */}

            <MenuItem
              component={
                <Link
                  href={"/"}
                  // className={
                  //   router.pathname === "/contact" ? "menu-active-link" : ""
                  // }
                />
              }
            >
              Contact
            </MenuItem>
            {/* End Contact  Menu */}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
