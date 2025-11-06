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
              <p className="text-text leading-relaxed">
                I've spent two decades in theatre—both on stage and behind the scenes. As an AEA actor, I've performed
                lead roles in everything from Chekhov to world premieres, including an <strong>Edgerton Foundation New Play
                Award</strong> winner. I know what artists need because I've been in their shoes.
              </p>

              <p className="text-text leading-relaxed">
                As Literary Manager at Salt Lake Acting Company (2018–2024), I read hundreds of scripts annually,
                championed world premieres by nationally recognized playwrights (including Steve Yockey, creator of HBO's
                "The Flight Attendant"), and helped shape six seasons of programming. I worked directly with playwrights
                in developmental labs and built donor partnerships for new work.
              </p>

              <p className="text-text leading-relaxed">
                I believe the best theatre administration is invisible to audiences but essential to artists.
                My work means keeping the trains running—managing budgets, writing grants, coordinating logistics—so
                that playwrights, directors, and actors can focus on making transformative theatre. I bring both artistic
                sensibility and operational expertise, understanding what makes great theatre from both sides of the table.
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
