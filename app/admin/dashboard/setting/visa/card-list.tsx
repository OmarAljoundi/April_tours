"use client";
import { FunctionComponent } from "react";
import CardDetails from "./card-details";
import { useSetting } from "@/hooks/use-setting";
import CardAdd from "@/shared/card-add";

interface CardListProps {}

const CardList: FunctionComponent<CardListProps> = () => {
  const settingData = useSetting();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-8">
      <CardAdd href="visa/create-new" title="Click to create new visa" />
      {settingData?.setting?.visa?.visa_types?.map((visa) => (
        <CardDetails {...visa} key={visa.uuid} />
      ))}
    </div>
  );
};

export default CardList;
