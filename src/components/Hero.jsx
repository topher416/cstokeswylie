import { useMemo, useEffect, useState } from 'react';

const Hero = () => {
  // Use every image from public/images (mirrors "csw images" folder)
  const baseImages = [
    '/images/at_oct13_pygmalion1.jpg',
    '/images/bullshark1.jpg',
    '/images/bullshark2.jpg',
    '/images/crucible1.jpg',
    '/images/crucible2.jpg',
    '/images/crucible3.webp',
    '/images/deathofadriver1.jpg',
    '/images/deathofadriver2.jpg',
    '/images/deathofadriver3cropped.jpg',
    '/images/deathofadriver4.jpg',
    '/images/deathofadriver5cropped.jpg',
    '/images/deathofadriver6.jpg',
    '/images/deathofadriver7.jpg',
    '/images/deathofadriver8cropped.jpg',
    '/images/funnything1.jpg',
    '/images/funnything2.jpg',
    '/images/funnything3.jpg',
    '/images/funnything4cropped.jpg',
    '/images/funnything5cropped.jpg',
    '/images/funnything6.jpg',
    '/images/funnything7.jpg',
    '/images/funnything8.jpg',
    '/images/funnything9cropped.jpg',
    '/images/harburgate1cropped.jpg',
    '/images/harburgate2cropped.jpg',
    '/images/harburgate3cropped.jpg',
    '/images/harburgate4.jpg',
    '/images/saturdays_voyeur_2017_ensemble_dance.jpeg',
    '/images/slac_bullsharkattack_090416~4.jpg',
    '/images/sleepinggiant1cropped.jpg',
    '/images/sleepinggiant2cropped.jpg',
    '/images/sleepinggiant3cropped.jpg',
    '/images/tiltedplace2.jpg',
    '/images/tiltedplace3.jpg',
    // Newly added assets
    '/images/bullshark3.JPG',
    '/images/cheat1.jpg',
    '/images/cheat2.JPG',
    '/images/funnything10.JPG',
    '/images/goodbody1.JPG',
    '/images/goodbody2.JPG',
    '/images/goodbody3.JPG',
    '/images/inthenextroom1.JPG',
    '/images/inthenextroom1.webp',
    '/images/midsummer1.JPG',
    '/images/midsummer2.JPG',
    '/images/midsummer3.JPG',
    '/images/midsummer4.JPG',
    '/images/midsummer5.JPG',
    '/images/midsummer6.JPG',
    '/images/midsummer7.JPG',
    '/images/midsummer8.JPG',
    '/images/playwrightslab1.JPG',
    '/images/playwrightslab2.JPG',
    '/images/tiltedplace1.JPG',
    '/images/tiltedplace2_copy.JPG',
    '/images/vibratorplay1.JPG',
    '/images/vibratorplay2.JPG',
    '/images/vibratorplay3.JPG',
    '/images/vibratorplay4.JPG',
    '/images/vibratorplay5.JPG',
    '/images/vibratorplay6.JPG',
    '/images/vibratorplay7.JPG',
    '/images/vibratorplay8.JPG',
    '/images/vibratorplay9.JPG',
    '/images/vibratorplay10.JPG',
    '/images/vibratorplay11.JPG',
    '/images/voyeur1.JPG',
    '/images/voyeur2.JPG',
    '/images/voyeur3.JPG',
    '/images/voyeur4.JPG',
  ];

  // Prefer a lightweight first image; shuffle the rest
  const preferredFirst = '/images/sleepinggiant1cropped.jpg';
  const heroImages = useMemo(() => {
    const rest = baseImages.filter((src) => src !== preferredFirst);
    for (let i = rest.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [rest[i], rest[j]] = [rest[j], rest[i]];
    }
    return [preferredFirst, ...rest];
  }, []);

  const [index, setIndex] = useState(0);
  const [orientations, setOrientations] = useState({}); // src -> 'portrait' | 'landscape'

  useEffect(() => {
    if (!heroImages || heroImages.length <= 1) return undefined;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [heroImages]);

  const handleLoad = (src, e) => {
    const { naturalWidth: w, naturalHeight: h } = e.target;
    setOrientations((prev) => ({ ...prev, [src]: h >= w ? 'portrait' : 'landscape' }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden p-4 md:p-8 lg:p-12 pb-24">
      {/* Rotating Background Images with portrait-aware fit (pillarbox) */}
      <div className="absolute inset-0 z-0 bg-black">
        {heroImages.map((src, i) => {
          const fitClass = orientations[src] === 'portrait' ? 'object-contain' : 'object-cover';
          return (
            <img
              key={src}
              src={src}
              alt=""
              onLoad={(e) => handleLoad(src, e)}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${fitClass} ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchpriority={i === 0 ? 'high' : 'auto'}
              decoding="async"
            />
          );
        })}
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="relative section-container text-left z-20 max-w-4xl">
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
