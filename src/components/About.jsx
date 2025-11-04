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
                With over a decade of experience in theatre arts and administration, I bridge the worlds
                of creative performance and strategic operations. My journey has taken me from the stage
                to the organizational helm, where I've discovered my passion for building vibrant artistic
                communities.
              </p>

              <p className="text-text leading-relaxed">
                As Literary Manager at Salt Lake Acting Company for over six years, I championed new works,
                fostered playwright relationships, and helped shape seasons that resonated deeply with our
                community. My work spans artistic direction, fundraising, audience development, and
                operational excellence—always with an eye toward accessibility and community engagement.
              </p>

              <p className="text-text leading-relaxed">
                What drives me is the belief that theatre has the power to transform communities. Whether
                I'm evaluating scripts, managing complex projects, or building relationships with donors
                and partners, I'm committed to creating spaces where artistic excellence and community
                connection thrive together.
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
              <h3 className="text-xl font-semibold mb-4 text-primary">Core Strengths</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Community Building',
                  'Fundraising',
                  'Artistic Direction',
                  'Operational Excellence',
                  'Literary Management',
                  'Strategic Planning',
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
