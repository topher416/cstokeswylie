const CriticalAcclaim = () => {
  const reviews = [
    {
      id: 1,
      quote: "...the other actors — Cassandra Stokes-Wylie (splendid as Helena)… strive to create believable characters in this unbelievable realm, keeping matters from degenerating into camp.",
      source: "The New York Times",
      production: "A Midsummer Night's Dream",
      reviewer: "James R. Oestreich",
    },
    {
      id: 2,
      quote: "Cassandra Stokes-Wylie, as Tanya, a big-haired small-town girl with thwarted big-city ambitions, offers a tour de force performance in the tour de force role… Stokes-Wylie is pitch perfect, even mesmerizing…",
      source: "Salt Lake Tribune",
      production: "Crimes of the Heart",
      reviewer: "Ellen Fagg Weist",
    },
    {
      id: 3,
      quote: "As John Proctor, David Hanson reveals the turmoil of a man moving from guilt and uncertainty to discover his inner voice of conscience. Cassandra Stokes-Wylie's Elizabeth makes a parallel journey from cold restraint to compassionate understanding. Their final scene together is a revelation.",
      source: "Salt Lake Tribune",
      production: "The Crucible",
      reviewer: "Barbara M. Bannon",
    },
    {
      id: 4,
      quote: "Stokes-Wylie really digs in here and turns Cahill's words into an intense jousting match that enlightens and provokes.",
      source: "Salt Lake Magazine",
      production: "Harbur Gate",
      reviewer: "Jeremy Pugh",
    },
    {
      id: 5,
      quote: "[They] make a seamless transition between prickly animosity and the compassionate moments that unite them at the play's end, where they become like mother and child.",
      source: "Salt Lake Tribune",
      production: "Harbur Gate",
      reviewer: "Barbara M. Bannon",
    },
    {
      id: 6,
      quote: "Stokes-Wylie's portrayal is filled with nuances of compassion and anger, humor and seriousness that makes her character deep and believable.",
      source: "Front Row Reviewers",
      production: "Death of a Driver",
      reviewer: "Alisha Hagey and Jason Hagey",
    },
    {
      id: 7,
      quote: "Stokes-Wylie is both brazen and suffering… The actors handle the vicissitudes with clarity, purpose, and, above all, truth. You would be hard-pressed to find more real performers. And they are funny too…",
      source: "Front Row Reviewers",
      production: "A Funny Thing Happened on the Way to the Gynecologic Oncology Unit...",
      reviewer: "Jason Hagey and Alisha Hagey",
    },
    {
      id: 8,
      quote: "Stokes-Wylie shines as Mrs. Givings. I found her genuine portrayal of an innocent yet curious woman to contrast beautifully with Crnich's somewhat disengaged scientific approach to life…Stokes-Wylie was lively and engaging, even when she was angry with her husband. My favorite moments of the whole show were when she would say something improper and in an attempt to correct herself only end up getting herself in more trouble. Stokes-Wylie played these pieces with beautiful timing which made me even more of a fan of hers than I already am.",
      source: "Utah Theatre Bloggers",
      production: "The Next Thing",
      reviewer: "Megan B. Pedersen",
    },
    {
      id: 9,
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

        {/* Awards & Recognition */}
        <div className="mt-12 space-y-6">
          <h3 className="text-3xl font-bold text-center text-primary mb-8">Awards & Recognition</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-accent/10 rounded-lg border-2 border-accent/30">
              <p className="text-lg text-text mb-2">
                <strong className="text-accent">Edgerton Foundation New Play Award</strong>
              </p>
              <p className="text-text-light">
                "Harbur Gate" - World premiere commissioned by National New Play Network
              </p>
            </div>

            <div className="text-center p-6 bg-accent/10 rounded-lg border-2 border-accent/30">
              <p className="text-lg text-text mb-2">
                <strong className="text-accent">Best Actress Nomination</strong>
              </p>
              <p className="text-text-light">
                Broadway World Salt Lake City Awards - "Death of a Driver"
              </p>
            </div>

            <div className="md:col-span-2 text-center p-6 bg-accent/10 rounded-lg border-2 border-accent/30">
              <p className="text-lg text-text mb-2">
                <strong className="text-accent">Top Ten Moments of Utah Enlightenment 2019</strong>
              </p>
              <p className="text-text-light">
                Named by Les Roka, Utah Review - For the role of Sarah in "Death of a Driver" by Will Snider
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 bg-background-dark rounded-lg p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary">Professional Testimonial</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-5xl text-accent/30 font-serif mb-4">"</div>

            <div className="space-y-4 text-text leading-relaxed">
              <p>
                I could write pages about her, but in light of the 300-word limit, I will focus on one specific project that exemplifies Cassie's insightful, collaborative, and wholly generous artistic spirit. The SLAC Playwrights' Lab was an intensive developmental workshop process for new plays. I produced the Lab for four years, and Cassie was an actor in it. Actors in the Lab were always a vital part of the process, but there were a small handful who not only brought incredible talent to their roles, but could also see the play as a whole, and through their investigation of the characters, offered the writers deep and meaningful insights into their plays.
              </p>

              <p>
                Cassie was so instrumental in the development of the plays she worked on, that when SLAC decided to fully produce two of them, both of the artistic teams – writers and directors – insisted that Cassie play the roles she helped create.
              </p>

              <p className="font-medium italic">
                She is one of the most compelling actors I have ever watched on stage, and one of the most diligent collaborators I have seen in the rehearsal room. She inspires her colleagues to do their best work, and she takes every opportunity to dig deeper and tell the purest truth. Utah is so lucky to have her.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-accent/20">
              <p className="font-semibold text-primary text-lg">Shannon Musgrave</p>
              <p className="text-text-light">Director of Marketing & Communications</p>
              <p className="text-text-light">Carnegie Mellon University, School of Drama</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriticalAcclaim;
