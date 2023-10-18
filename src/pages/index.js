import Header from 'components/Header';
import Navbar from 'components/Navbar/Navbar';
import About from 'components/About/About';
import Skills from 'components/Skills/Skills';
import Testimonial from 'components/Testimonial/Testimonial';
import Footer from 'components/Footer';
import Consultation from 'components/Consultation/Consultation';
import Prices from 'components/Prices/Prices';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <div className="app">
        <Head>
          <title>AT Online - Eksperter i online synlighed</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content=">AT Online - Eksperter i online synlighed" />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="IMAGE_TO_USE" />
          <meta property="og:description" content="AT Online - Eksperter i online synlighed" />
          <meta property="og:site_name" content="AT Online" />
          <meta name="description" content="AT Online - Eksperter i online synlighed" />
          <meta name="keywords" content="marketing" />
          <meta name="author" content="Andreas Broch" />
          <link rel="canonical" href="URL" />
          <meta name="subject" content="marketing" />
          <meta name="revised" content="REVISION_DATE" />
          <meta name="Classification" content="Business" />
          <meta name="url" content="/" />
        </Head>
        <Navbar />
        <Header />
        <Consultation />
        <About />
        <Skills/>
        <Prices />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}
