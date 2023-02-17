import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="main" className="w-full flex flex-col h-screen">
      <div className="w-full p-2 h-screen container lg:mx-auto">
        <Component {...pageProps} />
      </div>
      <div className="mb-auto w-full">
        <a href="mailto:andrea@andreamontanaro.it" title="Restiamo in contatto">
          <img
            className="mb-3 mx-auto"
            src="/andrea-montanaro.svg"
            height="50"
            width="300"
          />
        </a>
      </div>
    </div>
  );
}
