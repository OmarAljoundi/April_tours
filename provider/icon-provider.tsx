"use client";
import { cn } from "@/lib/utils";
import { FunctionComponent, ReactNode } from "react";
import { IconContext, IconType } from "react-icons";
interface IconProviderProps {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  isRounded?: boolean;
  size?: string;
}

const IconProvider: FunctionComponent<IconProviderProps> = ({
  children,
  bgColor = "#fbb7382b",
  textColor = "text-secondary",
  isRounded = true,
  size = "15px",
}) => {
  return (
    <div
      className={cn(
        "p-2 rounded-full",
        textColor,
        isRounded ? "rounded-full" : "rounded-none"
      )}
      style={{ background: bgColor }}
    >
      <IconContext.Provider value={{ size: size, className: textColor }}>
        <div>{children}</div>
      </IconContext.Provider>
    </div>
  );
};

export default IconProvider;
