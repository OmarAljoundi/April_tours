import { Separator } from "@/components/ui/separator";
import { getContentData } from "@/lib/operations";
import SettingLayoutProvider from "@/provider/setting-layout-provider";
import { FunctionComponent, ReactNode } from "react";
import { SidebarNav } from "./sidebar-nav";

export default async function SettingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const responseData = await getContentData();

  return (
    <SettingLayoutProvider settingData={responseData}>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <p className="text-muted-foreground">Manage your settings </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <SidebarNav />
          <div className="flex-1 ">{children}</div>
        </div>
      </div>
    </SettingLayoutProvider>
  );
}
