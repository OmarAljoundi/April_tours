"use client";
import Header from "@/components/header";
import Aos from "aos";
import "aos/dist/aos.css";
import { FC, Fragment, ReactNode, useEffect, useLayoutEffect } from "react";
import "boxicons/css/boxicons.min.css";
import "@/styles/index.scss";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistor, store } from "@/store";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { Router, useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Head from "next/head";

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
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo({
      behavior: "instant" as any,
      left: 0,
      top: 0,
    });
  }, [pathname]);

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
      </Head>
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
