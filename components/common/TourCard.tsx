import { ITour } from "@/models/interface/Tour";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BlurImage } from "./BlurImage";

export const TourCard: FC<{ tour: ITour }> = ({ tour }) => {
  return (
    <div className="package-card-alpha">
      <div className="package-thumb position-relative">
        <Link
          scroll={false}
          as={`/tours-list/${tour.name!.replaceAll(" ", "-")}`}
          href={`/tours-list/${tour.name!.replaceAll(" ", "-")}`}
          style={{ height: "270px", overflow: "hidden", display: "block" }}
        >
          <BlurImage
            image={tour.imageUrl || ""}
            loading="eager"
            priority="low"
          />
        </Link>

        <p className="card-lavel ">
          <span className="mr-10"> أيام +{tour?.numberOfDays}</span>
          <i className="bi bi-clock"></i>{" "}
        </p>
      </div>
      <div className="tourCard__content mt-10 px-2 py-1 position-relative">
        <p className="card-lavel-type">
          <div className="d-grid p-1" style={{ justifyItems: "center" }}>
            <div>
              <Image
                src={tour.tourType?.icon}
                alt={tour.tourType.type}
                width={40}
                height={40}
                quality={100}
                loading="eager"
                fetchPriority="low"
              />
            </div>
            <div className="text-10">{tour.tourType?.type}</div>
          </div>
        </p>
        <div className="row justify-content-between align-items-start">
          <div className="d-grid col-12">
            <h3 className="text-22 lh-16 fw-500 text-right mt-10">
              <span className="text-22 sm:text-20"> {tour?.name}</span> <br />
              <div className="d-flex items-center lh-14 justify-content-end mb-1">
                <div className="text-14 text-light-1 text-right">
                  أيام +{tour?.numberOfDays}
                </div>
                <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                <div className="text-14 text-light-1">
                  {tour?.tourType?.type}
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-end gap-2 mt-2">
                  {tour.startDay?.split(",").map((i, index) => (
                    <div
                      key={index}
                      className="badge -blue-1 bg-blue-1-05 text-blue-1 text-12 py-10 "
                      style={{
                        width: 62,
                        border: "2px solid var(--color-yellow-1)",
                      }}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-end gap-2 mt-10 flex-wrap">
                  {tour.tourCountries.length > 2 && (
                    <div
                      className="badge -blue-1 bg-blue-1-05 text-blue-1 text-12 py-10 english-font"
                      style={{
                        width: 62,
                        height: "fit-content",
                        border: "2px solid var(--color-yellow-1)",
                      }}
                    >
                      + {tour.tourCountries.length - 2}
                    </div>
                  )}
                  {tour.tourCountries.slice(0, 2).map((i, index) => (
                    <div
                      key={index}
                      className="badge -blue-1 bg-blue-1-05 text-blue-1 text-12 py-10"
                      style={{
                        width: 65,
                        height: "fit-content",
                        border: "2px solid var(--color-yellow-1)",
                      }}
                    >
                      {i.label}
                    </div>
                  ))}
                </div>
              </div>
            </h3>
            <div className="d-flex justify-content-between align-items-end">
              <div className="mb-3">
                <Link
                  scroll={false}
                  as={`/tours-list/${tour.name!.replaceAll(" ", "-")}`}
                  href={`/tours-list/${tour.name!.replaceAll(" ", "-")}`}
                  className="mainSearch__submit button -dark-1 py-15 px-5 col-12 rounded-4 bg-blue-1 text-white text-12"
                  style={{ height: "30px" }}
                >
                  <div className="bi bi-arrow-up-left mr-15 " /> عرض التفاصيل
                </Link>
              </div>
              <div className="text-right  mt-10  mb-10">
                <div className="text-12 text-light-1 ">إبتداء من </div>
                <div className="text-18  lh-12 fw-600 english-font mt-1">
                  USD {tour?.price}
                </div>
                <div className="text-14 text-light-1 ">للغرفة المزدوجة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
<Link href="/" className="button -md -blue-1 bg-dark-1 text-white">
  <i className="bi bi-arrow-up-left mr-15"></i> تفاصيل أكثر
</Link>;
