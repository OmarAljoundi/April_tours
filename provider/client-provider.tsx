"use client";
import { useSetting } from "@/hooks/use-setting";
import { useStatic } from "@/hooks/use-static";
import { Setting, TourType } from "@/types/custom";
import { FunctionComponent, ReactNode, useEffect } from "react";

interface ClientProviderProps {
  children: ReactNode;
  types: TourType[];
  settings?: Setting;
}

const ClientProvider: FunctionComponent<ClientProviderProps> = ({
  children,
  types,
  settings,
}) => {
  const staticData = useStatic();
  const settingData = useSetting();
  useEffect(() => {
    staticData.onCreate(types);
    if (settings) {
      settingData.onCreate(settings);
    }
  }, []);
  return <div className="flex h-full">{children}</div>;
};

export default ClientProvider;
