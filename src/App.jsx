import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ArtistStatement from './components/ArtistStatement';
import Experience from './components/Experience';
import Performance from './components/Performance';
import Portfolio from './components/Portfolio';
import CriticalAcclaim from './components/CriticalAcclaim';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ArtistStatement />
      <Experience />
      <Portfolio />
      <Performance />
      <CriticalAcclaim />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
