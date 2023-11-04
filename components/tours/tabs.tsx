"use client";
import { Tabs as TabUi, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { LocationAttributes } from "@/types/custom";
import { cn } from "@/lib/utils";
const Tabs: React.FC<{
  currentTab: string;
  tabList: LocationAttributes[];
}> = ({ currentTab, tabList }) => {
  const route = useRouter();
  return (
    <>
      <h1 className="text-center text-4xl font-secondary text-black font-bold my-10">
        أختر نوع البرنامج
      </h1>

      <TabUi
        defaultValue={currentTab.replaceAll("-", " ")}
        className="w-full mb-8 "
        onValueChange={(e) => route.push(e.replaceAll(" ", "-"))}
      >
        <TabsList
          dir="rtl"
          className={cn(
            "w-full shadow-xl bg-white gap-4 grid grid-cols-2 h-full",
            tabList?.length == 2
              ? "lg:grid-cols-2"
              : tabList?.length == 3
              ? "lg:grid-cols-3"
              : tabList?.length >= 4
              ? "lg:grid-cols-4"
              : ""
          )}
        >
          {tabList
            ?.sort((a, b) => a.order - b.order)
            ?.map((item) => (
              <TabsTrigger
                value={item.title!.toString()}
                key={item.id}
                className="w-full data-[state=active]:bg-secondary data-[state=active]:text-white px-4 "
              >
                {item.title}
              </TabsTrigger>
            ))}
        </TabsList>
      </TabUi>
    </>
  );
};

export default Tabs;
