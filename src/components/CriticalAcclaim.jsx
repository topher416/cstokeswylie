const CriticalAcclaim = () => {
  const reviews = [
    {
      id: 1,
      quote: "Stokes-Wylie really digs in here and turns Cahill's words into an intense jousting match that enlightens and provokes.",
      source: "Salt Lake Magazine",
      production: "Harbur Gate",
      reviewer: "Jeremy Pugh",
    },
    {
      id: 2,
      quote: "[They] make a seamless transition between prickly animosity and the compassionate moments that unite them at the play's end, where they become like mother and child.",
      source: "Salt Lake Tribune",
      production: "Harbur Gate",
      reviewer: "Barbara M. Bannon",
    },
    {
      id: 3,
      quote: "[The cast] seamlessly slide into the surreal... they do so beautifully.",
      source: "Gephardt Daily",
      production: "Sleeping Giant",
      reviewer: null,
    },
  ];

  return (
    <section id="acclaim" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Critical Acclaim
        </h2>
        <p className="text-center text-text-light text-lg mb-12 max-w-3xl mx-auto">
          Reviews from regional theatre critics and publications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-background-dark rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote mark decoration */}
              <div className="text-6xl text-accent/20 font-serif absolute top-4 left-4">"</div>

              <div className="relative pt-8">
                <p className="text-text italic leading-relaxed mb-4">
                  {review.quote}
                </p>

                <div className="border-t border-accent/20 pt-4">
                  <p className="font-semibold text-primary">{review.source}</p>
                  {review.reviewer && (
                    <p className="text-sm text-text-light">— {review.reviewer}</p>
                  )}
                  <p className="text-sm text-accent mt-2">Re: {review.production}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards highlight */}
        <div className="mt-12 text-center p-8 bg-accent/10 rounded-lg border-2 border-accent/30">
          <h3 className="text-2xl font-bold text-primary mb-3">Award Recognition</h3>
          <p className="text-lg text-text mb-2">
            <strong className="text-accent">Edgerton Foundation New Play Award</strong>
          </p>
          <p className="text-text-light">
            "Harbur Gate" - World premiere commissioned by National New Play Network
          </p>
        </div>
      </div>
    </section>
  );
};

export default CriticalAcclaim;
