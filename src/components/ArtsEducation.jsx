const ArtsEducation = () => {
  return (
    <section id="education-programs" className="section-container bg-background-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Arts Education
        </h2>
        <p className="text-center text-text-light text-lg mb-12 max-w-3xl mx-auto">
          Designing curriculum that builds confidence and connection through theatre.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-accent">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Eva Carlston Academy
            </h3>
            <p className="text-accent font-medium mb-4">Therapeutic Acting Program</p>
            <p className="text-text leading-relaxed">
              Redesigned curriculum for teenage girls healing from trauma. Transformed a theater-games
              class into a structured confidence-building program: grounding exercises, ensemble play,
              monologue work, and reflection. Six-week rotating cohorts, 18-20 students each.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtsEducation;
