const abbreviateLocation = (text) => {
  if (!text) return '';
  // Expect formats like "Salt Lake City, UT" or "New York City, NY"
  // Apply requested abbreviations:
  // - Salt Lake City, UT -> SLC, UT
  // - New York City, NY -> NYC, NY
  // - Chicago, IL stays as-is
  const normalized = text.trim();
  if (/^Salt Lake City,\s*UT/i.test(normalized)) return 'SLC, UT';
  if (/^New York City,\s*NY/i.test(normalized)) return 'NYC, NY';
  // Leave any other cities unchanged (e.g., Milwaukee, WI)
  return normalized;
};

const LocationTag = ({ text }) => {
  if (!text) return null;
  const display = abbreviateLocation(text);
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-white text-xs md:text-sm font-medium shadow-sm">
      {display}
    </span>
  );
};

export default LocationTag;
