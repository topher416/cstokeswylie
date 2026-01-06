import { useEffect, useState } from 'react';

const Hero = () => {
  // Restrict hero rotation to curated selections (desktop)
  const desktopBase = [
    '/images/deathofadriver3cropped.jpg',
    '/images/deathofadriver5cropped.jpg',
    '/images/funnything10.JPG',
    '/images/funnything2.jpg',
    '/images/funnything5cropped.jpg',
    '/images/funnything9cropped.jpg',
    '/images/harburgate1cropped.jpg',
    '/images/harburgate3cropped.jpg',
    '/images/harburgate4.jpg',
    '/images/midsummer3.JPG',
    '/images/midsummer5.JPG',
    '/images/sleepinggiant1cropped.jpg',
    '/images/sleepinggiant3cropped.jpg',
    '/images/vibratorplay10.JPG',
    '/images/vibratorplay2.JPG',
    '/images/vibratorplay4.JPG',
  ];

  // Mobile-only curated selections
  const mobileBase = [
    '/images/deathofadriver3cropped_mobile_crop.jpg',
    '/images/funnything10_mobile_crop.JPG',
    '/images/funnything9cropped.jpg',
    '/images/harburgate1cropped_mobile_crop.jpg',
    '/images/midsummer5.JPG',
    '/images/vibratorplay10_mobile_crop.JPG',
  ];

  const [heroImages, setHeroImages] = useState([]);
  // Prefer a lightweight first image; shuffle the rest, and pick set based on viewport
  useEffect(() => {
    const select = () => {
      const mq = window.matchMedia('(max-width: 768px)');
      const base = mq.matches ? mobileBase : desktopBase;
      if (!base.length) { setHeroImages([]); return; }
      const preferred = base.includes('/images/sleepinggiant1cropped.jpg') ? '/images/sleepinggiant1cropped.jpg' : base[0];
      const rest = base.filter((s) => s !== preferred);
      for (let i = rest.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [rest[i], rest[j]] = [rest[j], rest[i]];
      }
      setHeroImages([preferred, ...rest]);
    };
    select();
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = () => select();
    if (mq.addEventListener) mq.addEventListener('change', handler); else mq.addListener(handler);
    return () => { if (mq.removeEventListener) mq.removeEventListener('change', handler); else mq.removeListener(handler); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
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
              onError={(e) => {
                const el = e.currentTarget;
                // Try swapping JPG/jpg case, then fallback to a safe image
                if (/\.JPG$/.test(el.src)) el.src = el.src.replace(/\.JPG$/, '.jpg');
                else if (/\.jpg$/.test(el.src)) el.src = el.src.replace(/\.jpg$/, '.JPG');
                else el.src = '/images/sleepinggiant1cropped.jpg';
              }}
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

      <div className="relative section-container text-left z-20 max-w-4xl p-4 md:p-8 lg:p-12 mb-24 md:mb-28 lg:mb-32">
        <div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 text-white">
            Cassandra Stokes-Wylie
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 md:mb-6 font-light">
            Arts Administrator | New Play Development | Community Engagement
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
