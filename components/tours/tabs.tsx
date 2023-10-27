"use client";
import { Tabs as TabUi, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

import { Separator } from "../ui/separator";
import { LocationAttributes } from "@/types/custom";
const Tabs: React.FC<{
  currentTab: string;
  tabList: LocationAttributes[];
}> = ({ currentTab, tabList }) => {
  const route = useRouter();
  return (
    <>
      <h1 className="text-center text-5xl font-secondary text-secondary my-10">
        أختار نوع البرناج
      </h1>

      <TabUi
        defaultValue={currentTab.replaceAll("-", " ")}
        className="w-full mb-8 "
        onValueChange={(e) => route.push(e.replaceAll(" ", "-"))}
      >
        <TabsList className="w-full shadow-xl bg-white gap-4 grid grid-cols-2 lg:grid-cols-4 h-full">
          {tabList
            ?.sort((a, b) => b.order - a.order)
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
