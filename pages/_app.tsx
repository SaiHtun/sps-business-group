import "../styles/globals.css";
import MenuContextProvider from "../context/menuContext";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <Component {...pageProps} />;
    </MenuContextProvider>
  );
}

export default MyApp;
