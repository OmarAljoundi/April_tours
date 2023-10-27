"use client";
import Header from "@/components/header";
import Aos from "aos";
import "aos/dist/aos.css";
import { ReactNode, useEffect, useLayoutEffect } from "react";
import "boxicons/css/boxicons.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import "@/public/assets/sass/main.scss";
import { FunctionComponent } from "react";

interface CustomerProviderProps {
  children: ReactNode;
}

const CustomerProvider: FunctionComponent<CustomerProviderProps> = ({
  children,
}) => {
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
    <>
      <Toaster />
      <QueryClientProvider client={new QueryClient()}>
        <div id="__next">
          <Header />
          <NextTopLoader
            color="var(--color-yellow-1)"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          {children}
          <Footer />
        </div>
      </QueryClientProvider>
    </>
  );
};

export default CustomerProvider;
