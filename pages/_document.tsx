import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" translate="no">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1"
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="google" content="notranslate" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5417884017876926"
            crossOrigin="anonymous"
          ></script>
          <meta
            name="google-adsense-account"
            content="ca-pub-5417884017876926"
          ></meta>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5417884017876926"
            crossOrigin="anonymous"
          ></script>
        </Head>

        <body className="bg-slate-100 dark:bg-slate-900 transition-all">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
