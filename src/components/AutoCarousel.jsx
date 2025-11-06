import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// fit: 'cover' | 'contain' | 'auto'
const AutoCarousel = ({
  images = [],
  interval = 5000,
  className = '',
  imgClassName = '',
  fit = 'auto',
}) => {
  const [index, setIndex] = useState(0);
  const [orientations, setOrientations] = useState({}); // src -> 'portrait' | 'landscape'
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1) return undefined;
    if (isPaused) return undefined;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval, isPaused]);

  const handleLoad = (src, e) => {
    const { naturalWidth: w, naturalHeight: h } = e.target;
    setOrientations((prev) => ({ ...prev, [src]: h >= w ? 'portrait' : 'landscape' }));
  };

  const goToPrevious = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), interval);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), interval);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      {images.map((src, i) => {
        let fitClass = 'object-cover';
        if (fit === 'contain') fitClass = 'object-contain';
        else if (fit === 'auto') fitClass = orientations[src] === 'portrait' ? 'object-contain' : 'object-cover';

        return (
          <img
            key={src}
            src={src}
            alt=""
            onLoad={(e) => handleLoad(src, e)}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${fitClass} ${imgClassName} ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchpriority={i === 0 ? 'high' : 'auto'}
            decoding="async"
          />
        );
      })}

      {/* Navigation Arrows - only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image indicator dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), interval);
              }}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                i === index ? 'bg-white w-3' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCarousel;
