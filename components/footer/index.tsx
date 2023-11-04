import { homeItems } from "@/data/mainMenuData";
import { getTourTypes } from "@/lib/operations";
import IconProvider from "@/provider/icon-provider";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import MediaIcons from "../common/MediaIcons";
const Footer = () => {
  const { data } = useQuery("Types", async () => await getTourTypes(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="overflow-hidden divide-y-2 divide-primary">
      <div className="bg-[#3093d02b] text-black py-10">
        <div className="container mx-auto sm:px-4 overflow-hidden">
          <div className="grid grid-cols-12 justify-items-start justify-center gap-x-8 gap-y-10 lg:px-0 px-5">
            <div className="text-black col-span-12 sm:col-span-6">
              <div className="footer-widget">
                <h4 className="text-right text-base ">عن أبريل تورز</h4>
                <div className="footer-about pt-3 text-center">
                  <p className="text-black text-right text-sm">
                    شركة إبريل تورز هي وكالة سفريات كاملة الخدمات في مدينة القدس
                    تقوم بتوفير جميع خدمات السفر لجميع أنحاء العالم، ايضاً باقات
                    سياحية صادرة بخدمات فاخرة ومستوى عالي من القيم.
                  </p>
                </div>
                <div className="mt-4">
                  <MediaIcons />
                </div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-2">
              <div className="footer-widget">
                <h4 className="text-right text-base ">روابط مهمة</h4>
                <ul className="footer-links text-right pt-3">
                  {homeItems.map((i) => (
                    <>
                      {i.external ? (
                        <li className="text-sm">
                          <a href={i.routePath}>{i.name}</a>
                        </li>
                      ) : (
                        <li className="text-sm">
                          <Link href={i.routePath}>{i.name}</Link>
                        </li>
                      )}
                    </>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-2">
              <div className="footer-widget">
                <h4 className="text-right text-base">أنواع الرحلات</h4>
                <ul className="footer-links text-right pt-3">
                  {data?.results?.map((i, index) => (
                    <li className="text-sm" key={index}>
                      <Link
                        scroll={false}
                        href={`/tour-listing?type=${i.name}`}
                      >
                        {i.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-2">
              <div className="flex flex-wrap flex-1 gap-2">
                <IconProvider bgColor="white" isRounded={false} size="50px">
                  <RiVisaLine />
                </IconProvider>
                <IconProvider bgColor="white" isRounded={false} size="50px">
                  <FaCcMastercard />
                </IconProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3093d02b] text-black py-2">
        <div className="container">
          <div className="flex flex-wrap justify-center ">
            <h1 className="px-4 font-semibold">
              القدس - بيت صفافا - شارع التوحيد 10
            </h1>

            <a dir="ltr" className="px-4 font-semibold" href="tel:+97226727957">
              +972 2 672 7957
            </a>
            <a
              dir="ltr"
              className="px-4 font-semibold"
              href="mailto:info@apriltours.com"
            >
              info@apriltours.com
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-primary ">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap  items-center justify-center">
            <div className="">
              <div className="copyright-link text-lg-start text-center">
                <p className="text-lg text-white ">Copyright 2023 AprilTours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
