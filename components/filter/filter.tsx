"use client";
import { useQuery } from "react-query";
import { useEffect, useState, FC, useCallback } from "react";
import { QueryString, cn, daysFilter, queryString } from "@/lib/utils";
import qs from "query-string";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountryDropdown from "./country-dropdown";
import DurationDropdown from "./duration-dropdown";
import DestinationDropdown from "./destination-dropdown";
import { usePathname, useRouter } from "next/navigation";
import TypeDropdown from "./type-dropdown";
import SortDropdown from "./sort-dropdown";
import { getDestination, getTourTypes } from "@/lib/operations";
import SearchFilterLoading from "../loading/search-filter-loading";
import { useCustomerFilter } from "@/hooks/use-customer-filter";

type FilterOptions = {
  onChange: boolean;
};

const Filter: FC<FilterOptions> = ({ onChange }) => {
  const search = useCustomerFilter((x) => x.filter);
  const setSearch = useCustomerFilter((x) => x.onAdd);
  const pathname = usePathname();
  const router = useRouter();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    let localSearch = { ...queryString };
    if (!mount) {
      const query = qs.parseUrl(window.location.href, {
        arrayFormat: "comma",
        decode: true,
      }).query;

      if (query.days && query.days.length > 0) {
        localSearch = {
          ...localSearch,
          days: query.days as string[],
        };
      }

      if (query.country && query.country.length > 0) {
        localSearch = {
          ...localSearch,
          country: query.country as string[],
        };
      }

      if (query.tab) {
        localSearch = {
          ...localSearch,
          tab: query.tab as string,
        };
      }

      if (query.type) {
        localSearch = {
          ...localSearch,
          type: query.type as string[],
        };
      }

      if (query.maxprice) {
        localSearch = {
          ...localSearch,
          maxprice: query.maxprice as string,
        };
      }

      if (query.sortMemebr && query.sortOrder) {
        localSearch = {
          ...localSearch,
          sortMemebr: query.sortMemebr as string,
          sortOrder: Number(query.sortOrder),
        };
      }
      setSearch(localSearch);
      setMount(true);
    }
  }, [mount]);

  const getSearch = useCallback(() => {
    const query = {
      ...qs.parseUrl(window.location.href, {
        arrayFormat: "comma",
        decode: true,
      }).query,
      days: search?.days,
      country: search?.country,
      tab: search?.tab,
      type: search?.type,
      maxprice: search?.maxprice,
      sortMemebr: search?.sortMemebr,
      sortOrder: search?.sortOrder,
    };

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query,
      },
      {
        skipNull: true,
        skipEmptyString: true,
        arrayFormat: "comma",
        encode: true,
      }
    );
    return url;
  }, [search]);

  useEffect(() => {
    var url = getSearch();
    if (onChange) {
      router.push(url);
    }
  }, [getSearch]);

  const getUrl = useCallback(() => {
    const url = qs.stringifyUrl(
      {
        url: "/tour-listing",
        query: search,
      },
      {
        skipNull: true,
        skipEmptyString: true,
        arrayFormat: "comma",
        encode: true,
      }
    );

    return url;
  }, [search]);

  const { data: locations, isLoading } = useQuery(
    ["locations-types"],
    async () => await Promise.all([getDestination(), getTourTypes()]),
    {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );

  if (isLoading) return <SearchFilterLoading />;

  return (
    <div>
      {onChange && (
        <h1 className="text-center text-4xl font-secondary text-black font-bold my-10">
          الى أين تود الذهاب؟
        </h1>
      )}

      <div
        className={cn(
          "p-3 sm:p-4 lg:py-6 lg:px-8 bg-white  shadow-card  grid gap-2  grid-cols-1",
          onChange ? "md:grid-cols-2" : "lg:grid-cols-3"
        )}
      >
        {onChange && (
          <DestinationDropdown
            locations={locations[0]?.results ?? []}
            setSearch={setSearch}
            search={search}
          />
        )}

        <CountryDropdown
          onChange={onChange}
          search={search}
          setSearch={setSearch}
        />
        <TypeDropdown
          types={locations[1]?.results ?? []}
          setSearch={setSearch}
          search={search}
          onChange={onChange}
        />

        <DurationDropdown
          onChange={onChange}
          search={search}
          setSearch={setSearch}
        />

        {!onChange && (
          <section className={cn(!onChange ? "lg:col-span-3" : "")}>
            <Link href={getUrl()}>
              <Button className="w-full" size={"sm"}>
                <SearchIcon className="text-white" />
                <span className="mr-2 text-white text-lg">أبحث</span>
              </Button>
            </Link>
          </section>
        )}
      </div>

      {/* {enableTabs === true && (
        <>
          <Tabs onChange={onChange} search={search} setSearch={setSearch} />
        </>
      )} */}
    </div>
  );
};

export default Filter;
