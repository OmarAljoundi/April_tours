"use client";
import Header from "@/components/header";
import Aos from "aos";
import "aos/dist/aos.css";
import { FC, ReactNode, useEffect, useLayoutEffect } from "react";
import "boxicons/css/boxicons.min.css";
import "@/public/assets/index.scss";
import "@/public/assets/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistor, store } from "@/store";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

type RootLayoutProp = {
  children: ReactNode;
};
const queryClient = new QueryClient();

const RootLayout: FC<RootLayoutProp> = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      behavior: "instant" as any,
      left: 0,
      top: 0,
    });
  }, [pathname]);

  return (
    <html lang="en">
      <head></head>
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Toaster />
            <QueryClientProvider client={queryClient}>
              <div id="__next">
                <Header />
                {children}
                <Footer />
              </div>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
        {/* <ScrollToTop /> */}
        {/* <CallToActions /> */}
        {/* End Call To Actions Section */}
      </body>
    </html>
  );
};

export default RootLayout;
