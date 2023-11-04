"use client";
import { FunctionComponent } from "react";
import MediaIcons from "../common/MediaIcons";
interface TopHeaderProps {}

const TopHeader: FunctionComponent<TopHeaderProps> = () => {
  return (
    <header className="bg-[#3093d02b] py-3 px-4 ">
      <div className="container">
        <div className="flex justify-center lg:justify-end">
          <div className="flex justify-between">
            <MediaIcons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
