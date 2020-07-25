import Head from "next/head";
import Header from "../components/header";
import Services from "../components/services";
import PhotoCarousel from "../components/carousel";
import About from "../components/about";
import Footer from "../components/footer";

export default () => (
  <div>
    <Head>
      <title>Wojciech Gawlowski</title>
      <meta name="description" content="Wojciech Gawłowski" />
      <meta
        name="keywords"
        content="Wojciech Gawłowski, Wojciech, Gawłowski, spawanie, usługi spawalnicze, klimatyzacja, istalacja, instalacja klimatyzacji, wroclaw, wrocław, spawacz"
      />
      <meta name="author" content="Wojciech Gawłowski" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="shortcut icon" href="/images/favicon.png"></link>
    </Head>

    <Header />
    <Services />
    <PhotoCarousel />
    <About />
    <Footer />
    <script
      src="https://kit.fontawesome.com/15987e6354.js"
      crossOrigin="anonymous"
    ></script>
  </div>
);
