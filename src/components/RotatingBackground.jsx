import { useEffect, useState } from 'react';

const RotatingBackground = ({ desktopImages, mobileImages, intervalMs = 4000 }) => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [orientations, setOrientations] = useState({});

  // Select images based on viewport and shuffle
  useEffect(() => {
    const select = () => {
      const mq = window.matchMedia('(max-width: 768px)');
      const base = mq.matches ? mobileImages : desktopImages;
      if (!base || !base.length) {
        setImages([]);
        return;
      }
      const preferred = base.includes('/images/sleepinggiant1cropped.jpg')
        ? '/images/sleepinggiant1cropped.jpg'
        : base[0];
      const rest = base.filter((s) => s !== preferred);
      for (let i = rest.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [rest[i], rest[j]] = [rest[j], rest[i]];
      }
      setImages([preferred, ...rest]);
    };
    select();
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = () => select();
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, [desktopImages, mobileImages]);

  // Rotate images at interval
  useEffect(() => {
    if (!images || images.length <= 1) return undefined;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images, intervalMs]);

  const handleLoad = (src, e) => {
    const { naturalWidth: w, naturalHeight: h } = e.target;
    setOrientations((prev) => ({ ...prev, [src]: h >= w ? 'portrait' : 'landscape' }));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 bg-black">
      {images.map((src, i) => {
        const fitClass = orientations[src] === 'portrait' ? 'object-contain' : 'object-cover';
        return (
          <img
            key={src}
            src={src}
            alt=""
            onLoad={(e) => handleLoad(src, e)}
            onError={(e) => {
              const el = e.currentTarget;
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
  );
};

export default RotatingBackground;
