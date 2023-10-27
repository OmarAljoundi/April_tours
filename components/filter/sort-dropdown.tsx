"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../ui/command";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check, Plus, X } from "lucide-react";
import { cn, orderFilter } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { useCustomerFilter } from "@/hooks/use-customer-filter";

const SortDropdown = () => {
  const search = useCustomerFilter((x) => x.filter);
  const setSearch = useCustomerFilter((x) => x.onAdd);

  const getValue = () => {
    return (
      orderFilter.find(
        (x) => x.order == search.sortOrder && x.value == search.sortMemebr
      )?.label || undefined
    );
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-left w-32  cursor-pointer"
        >
          {!getValue() && (
            <>
              <Plus className="ml-2 h-4 w-4" />
              الترتيب
            </>
          )}

          {getValue() && (
            <>
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal truncate text-xs"
                onClick={() =>
                  setSearch({
                    ...search,
                    sortMemebr: undefined,
                    sortOrder: undefined,
                  })
                }
              >
                {getValue()}
                <X className="border  rounded-lg w-4 h-4 mr-2 text-white bg-red-500/70" />
              </Badge>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandList>
            <CommandEmpty>لاتوجد نتائج</CommandEmpty>
            <CommandGroup>
              {orderFilter?.map((option) => {
                return (
                  <CommandItem
                    key={option.label}
                    onSelect={() => {
                      setSearch({
                        ...search,
                        sortMemebr: option.value,
                        sortOrder: option.order,
                      });
                    }}
                  >
                    <Check
                      className={cn(
                        "ml-2 text-green-600 flex h-4 w-4 items-center justify-center opacity-0 transition-all duration-500",
                        getValue() == option.label ? "opacity-100" : "opacity-0"
                      )}
                    />

                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SortDropdown;
