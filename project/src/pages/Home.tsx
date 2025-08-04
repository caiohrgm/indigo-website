import { useEffect } from 'react';
// import { motion } from 'framer-motion';
import { Navbar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Domains } from '../components/Domains';
import { Systems } from '../components/Systems';
import { Alliance } from '../components/Alliance';
import { Footer } from '../components/Footer';

export default function Home() {
  useEffect(() => {
    document.title = 'Indigo Technologies | Frontier Leadership';
  }, []);

  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Domains />
      <Systems />
      <Alliance />
      <Footer />
    </main>
  );
}
