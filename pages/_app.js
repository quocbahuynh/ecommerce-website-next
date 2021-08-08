import Head from "next/head";
import { Nav } from "../components/common/Nav";
import { Footer } from "../components/common/Footer";
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/LineIcons.3.0.css" />
        <link rel="stylesheet" href="/assets/css/tiny-slider.css" />
        <link rel="stylesheet" href="/assets/css/glightbox.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Nav />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
      <Footer />
      <Script src="/assets/js/bootstrap.min.js"></Script>
      <Script src="/assets/js/tiny-slider.js"></Script>
      <Script src="/assets/js/glightbox.min.js"></Script>
      <Script src="/assets/js/main.js"></Script>
    </>
  );
}

export default MyApp;
