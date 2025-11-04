const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Professional Headshot - Placeholder */}
          <div className="order-2 md:order-1">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="text-9xl font-serif text-accent/40">CSW</div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="prose prose-lg">
              <p className="text-text leading-relaxed">
                My journey in theatre started on stage, earning my BFA in Theatre from the University of Utah.
                But I discovered my true calling wasn't just performing—it was creating the conditions for
                other artists to do their best work.
              </p>

              <p className="text-text leading-relaxed">
                As Literary Manager at Salt Lake Acting Company (2018–2024), I read over 500 scripts annually,
                cultivated relationships with playwrights from first draft to opening night, and helped shape
                six seasons of programming. I built the donor partnerships that made bold artistic choices possible,
                and created community programs that brought new audiences into the theatre for the first time.
              </p>

              <p className="text-text leading-relaxed">
                I believe the best theatre administration is invisible to audiences but essential to artists.
                My work means keeping the trains running—managing budgets, writing grants, coordinating logistics—so
                that playwrights, directors, and actors can focus on what they do best: making transformative theatre.
              </p>
            </div>

            {/* Education Highlight */}
            <div className="mt-8 p-6 bg-background-dark rounded-lg border-l-4 border-accent">
              <h3 className="text-xl font-semibold mb-2 text-primary">Education</h3>
              <p className="text-text-light">
                <span className="font-medium">BFA in Theatre</span>
                <br />
                University of Utah
              </p>
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
