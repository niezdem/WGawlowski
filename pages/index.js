import Head from "next/head";
import Header from "../components/header";
import Services from "../components/services";
import About from "../components/about";
import Footer from "../components/footer";

export default () => (
  <div>
    <Head>
      <title>Wojciech Gawlowski</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />
    <Services />
    <About />
    <Footer />
    <script
      src="https://kit.fontawesome.com/15987e6354.js"
      crossOrigin="anonymous"
    ></script>
  </div>
);
