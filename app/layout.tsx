export const dynamic = "force-dynamic";
import { headers } from "next/headers";
import { FC, ReactNode } from "react";
import { Toaster } from "sonner";
import StyledJsxRegistry from "./registry";
import { Cairo } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { getContentData } from "@/lib/operations";
import dynamicImport from "next/dynamic";
import { shekari } from "./fonts";
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  preload: true,
  style: "normal",
  weight: ["1000", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const CustomerProvider = dynamicImport(
  () => import("@/provider/customer-provider"),
  {
    ssr: false,
  }
);

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = headers();
  const responseData = await getContentData();

  return (
    <html dir={headersList.get("x-dir")} style={{ height: "100%" }}>
      <body className={cn("h-full", cairo.className, shekari.variable)}>
        <Toaster position="top-right" expand={true} richColors />
        {headersList.get("x-dir") == "rtl" ? (
          <StyledJsxRegistry>
            <CustomerProvider settingData={responseData}>
              {children}
            </CustomerProvider>
          </StyledJsxRegistry>
        ) : (
          <> {children}</>
        )}
      </body>
    </html>
  );
}
