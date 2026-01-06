const GrantsDevelopment = () => {
  const highlights = [
    {
      title: 'Season Planning & Execution',
      description:
        'Guided season planning and project execution for multiple mainstage productions and the New Play Sounding Series. Directed scheduling, milestone tracking, and cross-departmental coordination to align artistic and production goals.',
    },
    {
      title: 'Contract & Budget Management',
      description:
        'Negotiated and administered contracts with artists, playwrights, and agents. Managed budgets and facilitated offers for creative team members.',
    },
    {
      title: 'Production Support',
      description:
        'Evaluated production needs for dialects, intimacy coaching, and fight choreography. Coordinated travel accommodations for visiting artists. Hired creative teams and facilitated auditions.',
    },
    {
      title: 'Workflow Design',
      description:
        'Designed operational workflows to streamline departmental processes and enhance production efficiency.',
    },
  ];

  return (
    <section id="production-operations" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Production & Operations
        </h2>
        <p className="text-center text-text-light text-lg mb-12 max-w-3xl mx-auto">
          Bridging artistic vision and administrative execution to bring productions to life.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
