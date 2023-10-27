import { getTourTypes } from "@/lib/operations";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";

const Footer = () => {
  const { data } = useQuery("Types", async () => await getTourTypes(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="footer-area overflow-hidden">
      <div className="footer-main-wrapper pt-10">
        <div className="footer-vactor">
          <Image
            src="/assets/img/banner/footer-bg.png"
            alt=""
            width={1920}
            height={568}
          />
        </div>
        <div className="container mx-auto sm:px-4 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 justify-items-start justify-center gap-x-8 gap-y-10 lg:px-0 px-5">
            <div className="text-white">
              <div className="footer-widget">
                <h4 className="text-right text-base ">عن أبريل تورز</h4>
                <div className="footer-about pt-3 text-center">
                  <p className="text-white text-right text-sm">
                    شركة إبريل تورز هي وكالة سفريات كاملة الخدمات في مدينة القدس
                    تقوم بتوفير جميع خدمات السفر لجميع أنحاء العالم، ايضاً باقات
                    سياحية صادرة بخدمات فاخرة ومستوى عالي من القيم.
                  </p>
                  <div className="footer-social-wrap">
                    <h5 className="text-right text-base">تابعنا على :</h5>
                    <ul className="footer-social-links flex justify-start gap-x-2">
                      <li>
                        <a href="https://www.instagram.com/apriltours1/">
                          <i
                            className="bx bxl-instagram text-base"
                            style={{ marginTop: "1px" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/apriltours1/">
                          <i
                            className="bx bxl-facebook text-base"
                            style={{ marginTop: "1px" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="wa.me/972544476226">
                          <i
                            className="bx bxl-whatsapp text-base"
                            style={{ marginTop: "1px" }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="footer-widget">
                <h4 className="text-right text-base ">روابط مهمة</h4>
                <ul className="footer-links text-right">
                  <li className="text-sm">
                    <Link href="about-us">عن أبريل تورز</Link>
                  </li>
                  <li className="text-sm">
                    <Link href="tour-listing">الوجهات السياحية</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="footer-widget">
                <h4 className="text-right text-base">أنواع الرحلات</h4>
                <ul className="footer-links text-right">
                  {data?.results?.map((i, index) => (
                    <li className="text-sm" key={index}>
                      <Link
                        scroll={false}
                        href={`/tour-listing?types=${i.name}`}
                      >
                        {i.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="footer-widget">
                <h4 className="text-center text-base ">
                  زور صفحتنا على الإنستجرام
                </h4>
                {/* <div className="footer-gallary-grid">
                <div className="footer-gallary-item">
                  <a href="assets/images/gallary/fg-1.png">
                    <img src="//placehold.co/400x400" alt="" />
                  </a>
                </div>
                <div className="footer-gallary-item">
                  <a href="//placehold.co/400x400">
                    <img src="//placehold.co/400x400" alt="" />
                  </a>
                </div>
                <div className="footer-gallary-item">
                  <a href="assets/images/gallary/fg-3.png">
                    <img src="//placehold.co/400x400" alt="" />
                  </a>
                </div>
                <div className="footer-gallary-item">
                  <a href="assets/images/gallary/fg-4.png">
                    <img src="//placehold.co/400x400" alt="" />
                  </a>
                </div>
                <div className="footer-gallary-item">
                  <a href="assets/images/gallary/fg-5.png">
                    <img src="//placehold.co/400x400" alt="" />
                  </a>
                </div>
                <div className="footer-gallary-item">
                  <a href="assets/images/gallary/fg-6.png">
                    <img src="//placehold.co/400x400" alt="" />
                  </a>
                </div>
              </div> */}
              </div>
            </div>
          </div>

          <div className="footer-contact-wrapper flex-row-reverse">
            <h5 className="text-base ">تواصل معنا</h5>
            <ul className="flex flex-wrap gap-x-8 justify-center">
              <li className="text-14 ">
                <i className="bi bi-telephone-x"></i>{" "}
                <a href="tel:+9726727957" dir="ltr">
                  +972 672 7957
                </a>
              </li>
              <li className="text-14 ">
                <i className="bi bi-envelope-open"></i>{" "}
                <a href="mailto:info@apriltours.com" className="english-font">
                  info@apriltours.com
                </a>
              </li>
              <li className="text-14 ">
                <i className="bi bi-geo-alt"></i>{" "}
                <a
                  className="english-font"
                  href="https://www.google.com/maps/dir/?api=1&destination=31.748922916016%2C35.206906199455&fbclid=IwAR0L6wkIFGQd6NZNAi4yBYG__ek4pzhLeJXNo2IGWPO6M6_45Ruvr1yM7qY"
                >
                  Ikhud ha-Kfar St 34, Jerusalem 9721136 Jerusalem
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom  ">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap  items-center justify-center">
            <div className="">
              <div className="copyright-link text-lg-start text-center">
                <p className="text-14 ">Copyright 2023 AprilTours</p>
              </div>
            </div>
            <div className="">
              <div className="footer-logo text-center"></div>
            </div>
            <div className=" ">
              <div className="policy-links">
                <ul className="policy-list lg:justify-end justify-center">
                  <li className="text-14 ">
                    <a href="#">شروط الإستخدام</a>
                  </li>
                  <li className="text-14 ">
                    <a href="#">خصوصية الإستخدام</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
