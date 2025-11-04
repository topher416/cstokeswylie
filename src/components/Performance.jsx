const Performance = () => {
  const performances = [
    {
      id: 1,
      title: '[Production Title]',
      role: 'Role Name',
      company: 'Theatre Company',
      year: '20XX',
      description: 'Description of the role and production. Add any notable reviews, awards, or achievements.',
    },
    {
      id: 2,
      title: '[Production Title]',
      role: 'Role Name',
      company: 'Theatre Company',
      year: '20XX',
      description: 'Description of the role and production.',
    },
    {
      id: 3,
      title: '[Production Title]',
      role: 'Role Name',
      company: 'Theatre Company',
      year: '20XX',
      description: 'Description of the role and production.',
    },
    // Add more performances as needed
  ];

  return (
    <section id="performance" className="section-container bg-background-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Performance Work
        </h2>
        <p className="text-center text-text-light text-lg mb-12 max-w-3xl mx-auto">
          Selected acting roles and performances.
          <span className="block mt-2 text-sm italic">(Ready to add your performance history, headshots, and reels!)</span>
        </p>

        <div className="space-y-6">
          {performances.map((performance) => (
            <div
              key={performance.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {performance.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-text-light mb-3">
                    <span className="font-medium text-accent">{performance.role}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{performance.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{performance.year}</span>
                  </div>
                  <p className="text-text leading-relaxed">{performance.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call out for video/images */}
        <div className="mt-12 text-center p-8 bg-white rounded-lg">
          <h3 className="text-xl font-semibold text-primary mb-3">Performance Reels & Media</h3>
          <p className="text-text-light mb-4">
            This section can showcase performance videos, headshots, production photos, and reviews.
          </p>
          <p className="text-sm text-text-lighter italic">
            Placeholder for: performance reel embed, production photos gallery, press quotes, etc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Performance;
