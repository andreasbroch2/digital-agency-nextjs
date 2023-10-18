/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="da" itemscope itemType="http://schema.org/WebPage">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="robots" content="index,follow" />
          <meta httpEquiv="Expires" content="0" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Cache-Control" content="no-cache" />
          <meta httpEquiv="imagetoolbar" content="no" />
          <meta httpEquiv="x-dns-prefetch-control" content="off" />
          <link rel="manifest" href="/site.webmanifest/" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
