const CommunityEngagement = () => {
  const initiatives = [
    {
      title: 'YWCA Utah',
      description:
        'Holiday giving drive during annual children\'s play run. Collected clothes, toys, and essentials for the domestic violence shelter\'s pop-up market.',
    },
    {
      title: 'Volunteers of America Youth Resource Center',
      description:
        'Partnership highlighting support for unhoused teens. Organized patron collection drive for toiletries, first aid supplies, and daily essentials.',
    },
    {
      title: 'Flourish Bakery',
      description:
        'Hired for special events—a bakery supporting individuals in addiction recovery learning culinary skills and earning living wages.',
    },
    {
      title: 'Panel Discussions',
      description:
        'Curated university professors, civic leaders, and artists for post-show conversations that elevated productions\' themes beyond the stage.',
    },
  ];

  return (
    <section id="community" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Community Engagement
        </h2>
        <p className="text-center text-text-light text-lg mb-12 max-w-3xl mx-auto">
          Building meaningful connections between theatre and the communities it serves.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-background-dark rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-accent"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{initiative.title}</h3>
              <p className="text-text leading-relaxed">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;
