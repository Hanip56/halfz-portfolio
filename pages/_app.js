import { Footer, Navbar } from "@/components";
import { ContextProvider } from "@/contexts/ContextProvider";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      if (url !== router.asPath) {
        sessionStorage.setItem(
          `scroll-${router.asPath}`,
          JSON.stringify([window.scrollX, window.scrollY])
        );
      }
    };

    const handleRouteChangeComplete = (url) => {
      const scrollPosition = sessionStorage.getItem(`scroll-${url}`);
      if (scrollPosition) {
        const [x, y] = JSON.parse(scrollPosition);
        window.scrollTo(x, y);
      } else {
        window.scrollTo(0, 0);
      }
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <ContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ContextProvider>
  );
}
