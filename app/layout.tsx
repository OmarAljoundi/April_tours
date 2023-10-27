export const dynamic = "force-dynamic";
import CustomerProvider from "@/provider/customer-provider";
import { headers } from "next/headers";
import { FC, ReactNode } from "react";
import { Toaster } from "sonner";
import StyledJsxRegistry from "./registry";
import { Cairo } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
type RootLayoutProp = {
  children: ReactNode;
};
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  preload: true,
  style: "normal",
  weight: ["1000", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const RootLayout: FC<RootLayoutProp> = ({ children }) => {
  const headersList = headers();

  return (
    <html dir={headersList.get("x-dir")} style={{ height: "100%" }}>
      <body className={cn("h-full", cairo.className)}>
        <Toaster position="top-right" expand={true} richColors />
        {headersList.get("x-dir") == "rtl" ? (
          <StyledJsxRegistry>
            <CustomerProvider>{children}</CustomerProvider>
          </StyledJsxRegistry>
        ) : (
          <> {children}</>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
