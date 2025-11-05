import { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (!images || images.length <= 1) return undefined;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  const handleLoad = (src, e) => {
    const { naturalWidth: w, naturalHeight: h } = e.target;
    setOrientations((prev) => ({ ...prev, [src]: h >= w ? 'portrait' : 'landscape' }));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
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
          />
        );
      })}
    </div>
  );
};

export default AutoCarousel;
