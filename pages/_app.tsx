import "../styles/globals.css";
import MenuContextProvider from "../context/menuContext";

function MyApp({ Component, pageProps }) {
  return (
    <MenuContextProvider>
      <Component {...pageProps} />;
    </MenuContextProvider>
  );
}

export default MyApp;
