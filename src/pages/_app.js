import 'styles/globals.scss';
import Script from 'next/script';

function App({ Component, pageProps = {} }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-229364229-1" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-229364229-1');
        `}
      </Script>
    </>
  );
}

export default App;
