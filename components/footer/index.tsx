import { useAppSelector } from "@/hooks/useStoreService";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const types = useAppSelector(
    (o) => o.Store.TourTypesReducer?.TourTypes ?? []
  );
  return (
    <div className="footer-area overflowHidden">
      <div className="footer-main-wrapper">
        <div className="footer-vactor">
          <Image
            src="/assets/img/banner/footer-bg.png"
            alt=""
            width={1920}
            height={568}
          />
        </div>
        <div className="container overflowHidden">
          <div className="row justify-content-center  flex-row-reverse row-footer">
            <div className="col-lg-4 text-white">
              <div className="footer-widget">
                <h4 className="footer-widget-title text-right text-16 ">
                  عن أبريل تورز
                </h4>
                <div
                  className="footer-about text-lg-start text-center"
                  style={{ paddingTop: "12px" }}
                >
                  <p className="text-white text-right text-14 " dir="rtl">
                    شركة إبريل تورز هي وكالة سفريات كاملة الخدمات في مدينة القدس
                    تقوم بتوفير جميع خدمات السفر لجميع أنحاء العالم، ايضاً باقات
                    سياحية صادرة بخدمات فاخرة ومستوى عالي من القيم.
                  </p>
                  <div className="footer-social-wrap">
                    <h5 className="text-right text-16 " dir="rtl">
                      تابعنا على :
                    </h5>
                    <ul className="footer-social-links justify-content-lg-end justify-content-center">
                      <li>
                        <a href="#">
                          <i
                            className="bx bxl-instagram text-22"
                            style={{ marginTop: "1px" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="bx bxl-facebook text-22"
                            style={{ marginTop: "1px" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="bx bxl-twitter text-22"
                            style={{ marginTop: "1px" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="bx bxl-whatsapp text-22"
                            style={{ marginTop: "1px" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="bx bxl-pinterest-alt text-22"
                            style={{ marginTop: "1px" }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="footer-widget">
                <h4 className="footer-widget-title text-right text-16 ">
                  روابط مهمة
                </h4>
                <ul className="footer-links text-right">
                  <li className="text-14 ">
                    <a href="about.html">عن أبريل تورز</a>
                  </li>
                  <li className="text-14 ">
                    <a href="package.html">الوجهات السياحية</a>
                  </li>
                  <li className="text-14 ">
                    <a href="destination.html">التأشيرات</a>
                  </li>
                  <li className="text-14 ">
                    <a href="guide.html">خدماتنا</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="footer-widget">
                <h4 className="footer-widget-title text-right text-16 ">
                  أنواع الرحلات
                </h4>
                <ul className="footer-links text-right">
                  {types.map((i, index) => (
                    <li className="text-14 " key={index}>
                      <Link scroll={false} href={`/tours-list?type=${i.type}`}>
                        {i.type}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="footer-widget">
                <h4 className="footer-widget-title text-center text-16 ">
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
            <h5 className="text-16 ">تواصل معنا</h5>
            <ul className="footer-contact-list">
              <li className="text-14 ">
                <i className="bi bi-telephone-x"></i>{" "}
                <a href="tel:+9726727957" className="english-font">
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
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6 order-lg-1 order-3 ">
              <div className="copyright-link text-lg-start text-center">
                <p className="text-14 ">Copyright 2023 AprilTours</p>
              </div>
            </div>
            <div className="col-lg-4  order-lg-2 order-1">
              <div className="footer-logo text-center">
                <a href="index.html">
                  {/* <img
                    src="/assets/img/logo/main-logo.png"
                    className="w-50"
                    alt=""
                  /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-lg-3 order-2">
              <div className="policy-links">
                <ul className="policy-list justify-content-lg-end justify-content-center">
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
