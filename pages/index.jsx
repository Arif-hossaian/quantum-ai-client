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
        <title>Quantum ai Events</title>
        <link rel="shortcut icon" href="/quantum-logo.png" />
      </Head>
      <Hero />
      <main className="font-IBM-Plex">
        <AboutEvent />
        <AboutUs />
        <OurPartners />
        <OurSpeakers />
        <Agenda />
      </main>
      <Footer />
    </>
  );
}
