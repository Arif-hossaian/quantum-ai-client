import Head from 'next/head';
import OurSpeakers from '../components/OurSpeakers/Index';
import AboutUs from '../components/AboutUs/Index';
import OurPartners from '../components/OurPartners/Index';
import Agenda from '../components/Agenda/Index';
import AboutEvent from '../components/AboutEvent/Index';
import Footer from '../components/Footer/Index';
import Hero from '../components/Hero/Index';
export default function Home() {
  return (
    <>
      <Head>
        <title>AI STARTUP SUMMIT – 2023</title>
        <link rel="shortcut icon" href="/Logo-PNG.png" />
      </Head>
      <Hero />
      <main className="font-IBM-Plex">
        <AboutUs />
        <OurSpeakers />
        {/* <AboutEvent /> */}
        <OurPartners />
        <Agenda />
      </main>
      <Footer />
    </>
  );
}
