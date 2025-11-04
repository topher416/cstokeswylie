const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative section-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Placeholder for headshot - to be replaced with actual image */}
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center overflow-hidden shadow-xl">
            <div className="text-6xl md:text-8xl font-serif text-accent/40">CSW</div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            Cassandra Stokes-Wylie
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-text-light mb-8 md:mb-12 font-light">
            Theatre Professional | Arts Administrator | Community Builder
          </p>

          <p className="text-base md:text-lg text-text-light max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Bringing together artistic excellence, operational expertise, and community engagement
            to create meaningful theatrical experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-accent"
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
