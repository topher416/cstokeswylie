const ArtsEducation = () => {
  const programs = [
    {
      title: 'Eva Carlston Academy',
      subtitle: 'Therapeutic Acting Program',
      description:
        'Designed and taught an acting curriculum for teenage girls at a therapeutic school for survivors of trauma. Transformed a theater-games format into a structured confidence-building program emphasizing grounding, ensemble trust, and personal agency. Six-week rotating cohorts of 18-20 students.',
    },
    {
      title: 'Title I School Performances',
      subtitle: 'Salt Lake Acting Company',
      description:
        'Coordinated SLAC\'s annual children\'s play free performances for Title I schools. Worked to create inclusive casts so that every child in the audience could see themselves reflected on stage.',
    },
  ];

  return (
    <section id="education-programs" className="section-container bg-background-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Arts Education & Youth Programs
        </h2>
        <p className="text-center text-text-light text-lg mb-12 max-w-3xl mx-auto">
          Designing curriculum that builds confidence and connection through theatre.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md border-l-4 border-accent hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">
                {program.title}
              </h3>
              <p className="text-accent font-medium mb-4">{program.subtitle}</p>
              <p className="text-text leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtsEducation;
