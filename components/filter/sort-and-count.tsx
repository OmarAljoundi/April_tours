"use client";
import { FunctionComponent, useMemo } from "react";
import SortDropdown from "./sort-dropdown";
import { useCustomerFilter } from "@/hooks/use-customer-filter";
import { cn } from "@/lib/utils";

interface SortAndCountProps {}

const SortAndCount: FunctionComponent<SortAndCountProps> = () => {
  const total = useCustomerFilter((x) => x.total);
  const totalMemo = useMemo(() => {
    return total;
  }, [total]);

  return (
    <div
      className={cn(
        "p-3 sm:p-4 lg:py-6 lg:px-8  bg-white items-center shadow-card  flex justify-between"
      )}
    >
      <h1 className="text-xl">نتائج البحث {totalMemo}</h1>
      <SortDropdown />
    </div>
  );
};

export default SortAndCount;
