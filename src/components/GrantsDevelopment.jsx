const GrantsDevelopment = () => {
  const highlights = [
    {
      title: 'New Play Sounding Series Funding',
      description:
        'Facilitated and secured funding for SLAC\'s signature new play development program, leading 11 workshops from 2019-2024. Managed grant research, proposal writing, reporting, and budget tracking to bring innovative new work to life.',
    },
    {
      title: 'Foundation & Government Grants',
      description:
        'Researched, wrote, and submitted grant proposals and reports for foundation and government funders. Tracked deliverables, timelines, and compliance across program and finance teams.',
    },
    {
      title: 'Narrative Translation',
      description:
        'Translated productions\' artistic vision into compelling, equity-centered language for funders and stakeholders. Adapted voice and tone across materials while centering lived experience and community impact.',
    },
  ];

  return (
    <section id="grants-development" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Grants & Development Work
        </h2>
        <p className="text-center text-text-light text-lg mb-12 max-w-3xl mx-auto">
          Translating artistic vision into compelling narratives that secure funding and build partnerships.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-background-dark rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-accent"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-text leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrantsDevelopment;
