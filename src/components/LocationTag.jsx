const LocationTag = ({ text }) => {
  if (!text) return null;
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-white text-xs md:text-sm font-medium shadow-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 opacity-90"
      >
        <path d="M11.47 3.84a6.5 6.5 0 0 1 7.54 7.54c-.52 2.31-2.32 4.89-5.38 7.73l-.98.89a1.25 1.25 0 0 1-1.66 0l-.98-.9c-3.06-2.83-4.85-5.41-5.38-7.72a6.5 6.5 0 0 1 7.54-7.54Zm.53 8.91a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z" />
      </svg>
      {text}
    </span>
  );
};

export default LocationTag;
