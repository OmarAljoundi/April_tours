import { getContentData } from "@/lib/operations";
import SettingLayoutProvider from "@/provider/setting-layout-provider";
import { FunctionComponent, ReactNode } from "react";

export default async function SettingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const responseData = await getContentData();

  return (
    <SettingLayoutProvider settingData={responseData}>
      {children}
    </SettingLayoutProvider>
  );
}
