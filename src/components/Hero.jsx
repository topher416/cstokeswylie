import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use only images marked as "cropped" from public/images
  const heroImages = [
    '/images/deathofadriver3cropped.jpg',
    '/images/deathofadriver5cropped.jpg',
    '/images/deathofadriver8cropped.jpg',
    '/images/funnything4cropped.jpg',
    '/images/funnything5cropped.jpg',
    '/images/funnything9cropped.jpg',
    '/images/harburgate1cropped.jpg',
    '/images/harburgate2cropped.jpg',
    '/images/harburgate3cropped.jpg',
    '/images/sleepinggiant1cropped.jpg',
    '/images/sleepinggiant2cropped.jpg',
    '/images/sleepinggiant3cropped.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden p-4 md:p-8 lg:p-12 pb-24">
      {/* Rotating Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative section-container text-left z-10 max-w-4xl">
        <div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 text-white">
            Cassandra Stokes-Wylie
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 md:mb-6 font-light">
            Actor | Literary Manager | Theatre Administrator
          </p>

          {/* Intro paragraph removed per request */}

          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="btn-primary w-full sm:w-auto"
            >
              View Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="btn-secondary w-full sm:w-auto"
            >
              Learn About Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
