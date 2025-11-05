const Performance = () => {
  const performances = [
    {
      id: 1,
      title: 'Saturday\'s Voyeur',
      role: 'Various Characters',
      company: 'Salt Lake Acting Company',
      year: 'Recent',
      description: 'Utah\'s beloved musical comedy revue. Performed multiple characters in this satirical take on local and national politics, showcasing comedic timing and versatility. Directed by Cynthia Fleming.',
    },
    {
      id: 2,
      title: 'Harbur Gate',
      role: 'Moss',
      company: 'Salt Lake Acting Company',
      year: 'Recent',
      description: 'Contemporary drama exploring themes of identity and belonging. Directed by Tamilla Woodard.',
    },
    {
      id: 3,
      title: 'Bull Shark Attack',
      role: 'Tanya',
      company: 'Salt Lake Acting Company',
      year: 'Recent',
      description: 'Dark comedy requiring physical comedy and dramatic range. Directed by Sandra Shotwell.',
    },
    {
      id: 4,
      title: 'The Crucible',
      role: 'Elizabeth Proctor',
      company: 'The Grand Theatre',
      year: '',
      description: 'Arthur Miller\'s classic drama. Portrayed the morally resolute Elizabeth Proctor in this powerful examination of truth, integrity, and persecution. A demanding dramatic role requiring emotional depth and restraint. Directed by Mark Fossen.',
    },
    {
      id: 5,
      title: 'Burn This',
      role: 'Anna',
      company: 'Utah Theatre Artists Co.',
      year: '',
      description: 'Lanford Wilson\'s passionate drama. Lead role as Anna, a choreographer navigating grief and unexpected attraction. A complex, emotionally demanding performance. Directed by Lane Richins.',
    },
    {
      id: 6,
      title: 'The Turn of the Screw',
      role: 'Governess',
      company: 'Utah Theater Artists Co.',
      year: '',
      description: 'Gothic psychological thriller adapted from Henry James. Lead role as the Governess in this haunting tale of ambiguity and terror. Directed by Lane Richins.',
    },
    {
      id: 7,
      title: 'In the Next Room (or the vibrator play)',
      role: 'Mrs. Givings',
      company: 'Pygmalion Theatre Company',
      year: '',
      description: 'Sarah Ruhl\'s witty, poignant comedy about Victorian attitudes toward intimacy. Played the intelligent, searching Mrs. Givings. Directed by Fran Pruyn.',
    },
    {
      id: 8,
      title: 'The Fairy Queen with A Midsummer Night\'s Dream',
      role: 'Helena',
      company: 'dell\'Arte Opera Ensemble & Classic Stage Company',
      year: '',
      description: 'Purcell\'s baroque opera paired with Shakespeare. Performed Helena, showcasing vocal and acting abilities in this fusion of opera and classical theatre. Directed by Christopher Caines.',
    },
    {
      id: 9,
      title: 'Pride and Prejudice',
      role: 'Ensemble, u/s Elizabeth Bennett & Caroline Bingley (performed)',
      company: 'Milwaukee Repertory Theater',
      year: '',
      description: 'Major regional theatre production. Understudied and performed the lead role of Elizabeth Bennett and Caroline Bingley, demonstrating range and reliability. Directed by JR Sullivan.',
    },
    {
      id: 10,
      title: 'The Cherry Orchard',
      role: 'Ensemble, u/s Lyubov Ranyevskaya',
      company: 'Milwaukee Repertory Theater',
      year: '',
      description: 'Chekhov\'s masterwork at one of America\'s leading regional theatres. Understudied the lead role of Lyubov Ranyevskaya. Directed by Ben Barnes.',
    },
  ];

  return (
    <section id="performance" className="section-container bg-background-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Performance Work
        </h2>
        <p className="text-center text-text-light text-lg mb-8 max-w-3xl mx-auto">
          Selected roles from regional theatre, including Salt Lake Acting Company, Milwaukee Repertory Theater,
          and New York companies. Trained at University of Utah (BFA), Milwaukee Rep, Shakespeare & Company,
          and Stella Adler Academy.
        </p>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent-dark rounded-full text-sm font-medium mr-3">
            AEA (Actors' Equity Association)
          </span>
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent-dark rounded-full text-sm font-medium mr-3">
            Mezzo Soprano
          </span>
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent-dark rounded-full text-sm font-medium">
            Stage Combat • Dialects • Singing
          </span>
        </div>

        <div className="space-y-6">
          {performances.map((performance) => (
            <div
              key={performance.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {performance.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-text-light mb-3">
                    <span className="font-medium text-accent">{performance.role}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{performance.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{performance.year}</span>
                  </div>
                  <p className="text-text leading-relaxed">{performance.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call out for video/images */}
        <div className="mt-12 text-center p-8 bg-white rounded-lg">
          <h3 className="text-xl font-semibold text-primary mb-3">Performance Reels & Media</h3>
          <p className="text-text-light mb-4">
            This section can showcase performance videos, headshots, production photos, and reviews.
          </p>
          <p className="text-sm text-text-lighter italic">
            Placeholder for: performance reel embed, production photos gallery, press quotes, etc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Performance;
