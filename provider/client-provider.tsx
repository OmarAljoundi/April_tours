"use client";
import { useStatic } from "@/hooks/use-static";
import { TourType } from "@/types/custom";
import { FunctionComponent, ReactNode, useEffect } from "react";

interface ClientProviderProps {
  children: ReactNode;
  types: TourType[];
}

const ClientProvider: FunctionComponent<ClientProviderProps> = ({
  children,
  types,
}) => {
  const staticData = useStatic();
  useEffect(() => {
    staticData.onCreate(types);
  }, []);
  return <div className="flex h-full">{children}</div>;
};

export default ClientProvider;
