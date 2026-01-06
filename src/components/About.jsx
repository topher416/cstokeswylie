const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Professional Headshot */}
          <div className="order-1 md:order-1">
            <div className="aspect-[3/4] rounded-lg shadow-2xl overflow-hidden">
              <img
                src="/images/cassandra_stokes_wylie_backstage_headshot.jpeg"
                alt="Cassandra Stokes-Wylie professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="order-2 md:order-2 space-y-6">
            <div className="prose prose-lg">
              <p className="text-text leading-relaxed text-lg font-medium">
                An actor by trade, I am also an arts administrator and literary professional with a decade of experience supporting nonprofit theater at Salt Lake Acting Company (SLAC) through thoughtful programming, operational leadership, and development strategy. 
              </p>

              <p className="text-text leading-relaxed">
                As Literary Manager, I oversaw season planning, auditions and casting, production scheduling, and cross-departmental coordination for mainstage productions and new-play development initiatives. As Development & Outreach Coordinator, I played a key role in researching funding opportunities, writing and reporting on grants, coordinating narratives and timelines, managing program budgets, and fostering genuine relationships with community partners and funders. Across all areas of my work, I bridge artistic vision and administrative execution, translating stories and themes into clear, compelling language that resonates with audiences, funders, and the community at large.
              </p>
            </div>

            {/* Education & Training */}
            <div className="mt-8 p-6 bg-background-dark rounded-lg border-l-4 border-accent">
              <h3 className="text-xl font-semibold mb-3 text-primary">Education & Training</h3>
              <div className="space-y-3 text-text-light">
                <p>
                  <span className="font-medium">BFA in Theatre</span>
                  <br />
                  University of Utah — Actor Training Program (2005)
                </p>
                <div>
                  <div className="font-medium text-primary mb-1">Additional Training</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Steppenwolf West (2006)</li>
                    <li>Stella Adler Academy (2007)</li>
                    <li>Milwaukee Repertory Theater (2008-2009)</li>
                    <li>Shakespeare &amp; Company (2014)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Specialties */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">What I Do Best</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Grant Writing & Reporting',
                  'Institutional Fundraising',
                  'New Play Development',
                  'Community Partnerships',
                  'Season Programming',
                  'Board & Donor Communications',
                  'Audience Development',
                  'EDI Implementation',
                  'Arts Education',
                ].map((specialty) => (
                  <span
                    key={specialty}
                    className="px-4 py-2 bg-accent/10 text-accent-dark rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
