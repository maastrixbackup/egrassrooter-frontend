import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <link href="css/fontawesome-all.css" rel="stylesheet" />

        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css"
        />
        <link
          rel="stylesheet"
          href="/css/style.css"
          type="text/css"
          media="screen"
        />
        <link
          rel="stylesheet"
          href="/css/animate.min.css"
          type="text/css"
          media="screen"
        />
        <link rel="stylesheet" href="/css/menu.css" />
      </Head>
      <body>
        <Main />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script src="/js/menu.js" strategy="beforeInteractive" />
        <Script src="/js/wow.js" strategy="beforeInteractive" />
        <Script src="/js/script.js" strategy="afterInteractive" />
        {/* <Script strategy="afterInteractive">new WOW().init();</Script> */}
        <NextScript />
      </body>
    </Html>
  );
}
