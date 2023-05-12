"use client";
import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/useStoreService";
import { setTourTypes } from "@/store/TourTypes/tourType-action";
import { ITourType } from "@/models/interface/Tour";
import useApiService from "@/hooks/useApiService";
import Image from "next/legacy/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const dispatch = useAppDispatch();
  const { loading, onGetTourTypes } = useApiService();

  const fillTypes = async () => {
    var x = (await onGetTourTypes(true)) as ITourType[];
    dispatch(setTourTypes(x));
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    fillTypes();
  }, [fillTypes]);

  return (
    <>
      <header className={`header -type-5 ${navbar ? "-header-5-sticky" : ""}`}>
        <div className="header__container container">
          <div className="row justify-end items-center">
            <div className="col-auto mobile-col">
              <div className="d-flex items-center flex-row-reverse ">
                <div className="mr-20 d-flex items-center">
                  <button
                    className="items-center icon-menu text-dark-1 text-20 d-none md:d-flex lg:d-flex xl:d-flex"
                    data-bs-toggle="offcanvas"
                    aria-controls="mobile-sidebar_menu"
                    data-bs-target="#mobile-sidebar_menu"
                  ></button>

                  <div
                    className="offcanvas offcanvas-start  mobile_menu-contnet"
                    tabIndex={-1}
                    id="mobile-sidebar_menu"
                    aria-labelledby="offcanvasMenuLabel"
                    data-bs-scroll="true"
                  >
                    <MobileMenu />
                    {/* End MobileMenu */}
                  </div>
                </div>
                {/* humberger menu */}
                <Link href={"/"}>
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
                {/* End logo */}

                <div className="header-menu d-flex md:d-none lg:d-none xl:d-none">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1" />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* // End header */}
    </>
  );
};

export default Header;
