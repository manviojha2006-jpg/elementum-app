import './global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Studio from './components/Studio';
import HowWeHelp from './components/HowWeHelp';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Studio />
        <HowWeHelp />
        <Services />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
