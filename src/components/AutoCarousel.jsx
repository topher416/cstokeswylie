import { useEffect, useState } from 'react';

const AutoCarousel = ({ images = [], interval = 5000, className = '', imgClassName = 'object-cover' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return undefined;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${imgClassName} ${i === index ? 'opacity-100' : 'opacity-0'}`}
          loading={i === 0 ? 'eager' : 'lazy'}
        />)
      )}
    </div>
  );
};

export default AutoCarousel;

