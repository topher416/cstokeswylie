import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ArtistStatement from './components/ArtistStatement';
import Experience from './components/Experience';
import GrantsDevelopment from './components/GrantsDevelopment';
import CommunityEngagement from './components/CommunityEngagement';
import ArtsEducation from './components/ArtsEducation';
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
      <Experience />
      <GrantsDevelopment />
      <CommunityEngagement />
      <ArtsEducation />
      <Portfolio />
      <ArtistStatement />
      <Performance />
      <CriticalAcclaim />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
