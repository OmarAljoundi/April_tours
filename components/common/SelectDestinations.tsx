"use client";
import { ILocationTours } from "@/models/interface/Location";
import { ILocationToursResponse } from "@/models/interface/Response";
import { SearchQuery, eFilterOperator } from "@/models/interface/Search";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
type DropDownProp = {
  title: string;
  value: string;
  onChange: (value: string) => void;
  options: any[];
};
const SelectDestinaitons = () => {
  const [dropdowns, setDropdowns] = useState<ILocationTours[]>([]);
  const { name } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return `${params.toString()}&`;
  }, []);

  // const fetchTabs = async () => {
  //   var _SQ: SearchQuery = {
  //     FilterByOptions: [],
  //     OrderByOptions: [],
  //     PageIndex: 0,
  //     PageSize: 0,
  //   };
  //   _SQ.FilterByOptions.push({
  //     FilterFor: decodeURIComponent(name?.replaceAll("-", " ")),
  //     FilterOperator: eFilterOperator.EqualsTo,
  //     MemberName: "Name",
  //   });
  //   const result = (await onGetTabTitles(_SQ)) as ILocationToursResponse;
  //   setDropdowns(result.locationTours);
  // };

  // useEffect(() => {
  //   var path = "";
  //   var x = searchParams.get("ActiveTab");
  //   if (x == null) {
  //     path += createQueryString("ActiveTab", "1");
  //     if (path.length > 0) {
  //       path = path.slice(0, -1);
  //     }
  //     router.replace((`/destination/${name}` + "?" + path) as any, {
  //       forceOptimisticNavigation: true,
  //     });
  //   }
  //   fetchTabs();
  // }, []);

  // const handleUpdateTab = (dropdown: ILocationTours) => {
  //   var path = "";
  //   path += createQueryString("ActiveTab", dropdown.tab.toString());
  //   if (path.length > 0) {
  //     path = path.slice(0, -1);
  //   }
  //   router.replace((`/destination/${name}` + "?" + path) as any, {
  //     forceOptimisticNavigation: true,
  //   });
  // };

  const isActiveTab = (dropdown: ILocationTours) => {
    if (searchParams.get("ActiveTab")) {
      const tabIndex = searchParams.get("ActiveTab");
      return dropdown.tab === Number(tabIndex);
    }
    return false;
  };

  return (
    <>
      {dropdowns?.length > 1 &&
        dropdowns.map((dropdown, index) => (
          <div className="col-auto" key={index}>
            <div className="dropdown js-dropdown js-amenities-active">
              {/* <button
                className={`button -md text-blue-1 ${
                  isActiveTab(dropdown)
                    ? "bg-yellow-1 text-black"
                    : " -blue-1 bg-blue-1-05"
                }`}
                onClick={() => handleUpdateTab(dropdown)}
              >
                {dropdown.title}
              </button> */}
            </div>
          </div>
        ))}
    </>
  );
};

export default SelectDestinaitons;
