import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Netflix Georgia - Watch TV Shows Online, Watch Movies Online
        </title>
        <link
          type="text/css"
          rel="stylesheet"
          href="/personalization/cl2/freeform/WebsiteDetect?source=wwwhead&amp;fetchType=css&amp;modalView=nmLanding"
          data-uia="botLink"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="https://codex.nflxext.com/%5E3.0.0/truthBundle/webui/1.22.5-shakti-css-vafe38bd5/css/css/less%7Ccore%7Cerror-page.less/1/btzvF4DuBgayCE/none/true/none"
          data-uia="botLink"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="https://codex.nflxext.com/%5E3.0.0/truthBundle/webui/1.22.5-shakti-css-vafe38bd5/css/css/less%7Csignup%7Cnmhp%7Cnmhp.less/1/btzvF4DuBgayCE/none/true/none"
          data-uia="botLink"
        />
        <link
          rel="shortcut icon"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        />
        <link
          rel="apple-touch-icon"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png"
        />
      </Head>
      <div id="appMountPoint">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
