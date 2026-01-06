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
                I build the infrastructure that lets artists make transformative theatre.
              </p>

              <p className="text-text leading-relaxed">
                As Literary Manager at Salt Lake Acting Company (2018–2024), I read hundreds of scripts annually,
                championed world premieres by nationally recognized playwrights, and helped shape six seasons of
                programming. I worked directly with playwrights in developmental labs, built donor partnerships for
                new work, and created community engagement initiatives that connected productions to the organizations
                and audiences they spoke to.
              </p>

              <p className="text-text leading-relaxed">
                My background as an AEA actor informs everything I do—I know what artists need because I've been in
                their shoes. But my focus is on the operational and relational work that makes great theatre possible:
                managing budgets, writing grants, coordinating logistics, cultivating partnerships, and creating
                inclusive spaces where artists can do their best work.
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
                  'New Play Development',
                  'Playwright Relationships',
                  'Season Curation',
                  'Grant Writing & Fundraising',
                  'Audience Development',
                  'Theatre Operations',
                  'Community Partnerships',
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
