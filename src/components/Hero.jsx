const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Neutral Gray Background */}
      <div className="absolute inset-0 z-0 bg-gray-600"></div>

      <div className="relative section-container text-left z-20 max-w-4xl p-4 md:p-8 lg:p-12 mb-24 md:mb-28 lg:mb-32">
        <div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 text-white">
            Cassandra Stokes-Wylie
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 md:mb-6 font-light">
            Arts Administration · Literary Management · Development
          </p>

          {/* Intro paragraph removed per request */}

          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="btn-primary w-full sm:w-auto"
            >
              See My Work
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
