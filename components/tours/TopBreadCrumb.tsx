import { TopBreadCrumbProp } from "@/utils/BreadCrumnHelper";
import Link from "next/link";
import { FC } from "react";

const TopBreadCrumb: FC<{ breadCrumbList: TopBreadCrumbProp[] }> = ({
  breadCrumbList,
}) => {
  return (
    <section className="py-10 d-flex items-center bg-light-2">
      <div className="container">
        <div className="row y-gap-10 items-center justify-between flex-row-reverse">
          <div className="col-auto">
            <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1 flex-row-reverse">
              {breadCrumbList.map((i) => (
                <>
                  {i.link ? (
                    <>
                      <Link href={i.link as any} className="col-auto">
                        <div>{i.label}</div>
                      </Link>
                      <div className="col-auto">&gt;</div>
                    </>
                  ) : (
                    <div className="col-auto">
                      <div className="text-dark-1">{i.label}</div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>

          <div className="col-auto">
            <a href="/tours-list" className="text-14 text-blue-1 underline">
              عرض جميع الرحلات
            </a>
          </div>
          {/* End col-auto */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default TopBreadCrumb;
