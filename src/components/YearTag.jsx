const YearTag = ({ text }) => {
  if (!text) return null;
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-white text-xs md:text-sm font-medium shadow-sm">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-90">
        <path d="M6.75 2.25a.75.75 0 0 1 .75.75V4.5h9V3a.75.75 0 0 1 1.5 0V4.5h.75A2.25 2.25 0 0 1 21.75 6.75v11.25A2.25 2.25 0 0 1 19.5 20.25H4.5A2.25 2.25 0 0 1 2.25 18V6.75A2.25 2.25 0 0 1 4.5 4.5h.75V3a.75.75 0 0 1 .75-.75ZM3.75 9v9a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V9H3.75Z"/>
      </svg>
      {text}
    </span>
  );
};

export default YearTag;

