import AutoCarousel from './AutoCarousel';

const Performance = () => {
  const imageMap = {
    'Sleeping Giant': [
      '/images/sleepinggiant1cropped.jpg',
      '/images/sleepinggiant2cropped.jpg',
      '/images/sleepinggiant3cropped.jpg',
    ],
    'Death of a Driver': [
      '/images/deathofadriver3cropped.jpg',
      '/images/deathofadriver5cropped.jpg',
      '/images/deathofadriver8cropped.jpg',
    ],
    'A Funny Thing Happened on the Way to the Gynecologic Oncology Unit...': [
      '/images/funnything4cropped.jpg',
      '/images/funnything5cropped.jpg',
      '/images/funnything9cropped.jpg',
    ],
    'Harbur Gate': [
      '/images/harburgate1cropped.jpg',
      '/images/harburgate2cropped.jpg',
      '/images/harburgate3cropped.jpg',
    ],
    "Saturday's Voyeur": ['/images/saturdays_voyeur_2017_ensemble_dance.jpeg'],
    'Bull Shark Attack': [
      '/images/bullshark1.jpg',
      '/images/bullshark2.jpg',
      '/images/slac_bullsharkattack_090416~4.jpg',
    ],
    'In a Tilted Place': ['/images/tiltedplace2.jpg', '/images/tiltedplace3.jpg'],
    'The Crucible': ['/images/crucible1.jpg', '/images/crucible2.jpg', '/images/crucible3.webp'],
    'In the Next Room (or the vibrator play)': ['/images/at_oct13_pygmalion1.jpg'],
  };
  const performances = [
    {
      id: 1,
      title: 'Sleeping Giant',
      role: 'The Convert (4 characters)',
      company: 'Salt Lake Acting Company',
      year: '2022',
      description: 'World premiere by Steve Yockey (creator of HBO\'s "The Flight Attendant"). Played four distinct characters within a single role. Participated in developmental reading (May 2022) before originating the role in full production (Sept-Oct 2022). Critics praised the cast\'s ability to "seamlessly slide into the surreal... beautifully." Co-directed by Emilio Casillas and Shawn Francis Saunders.',
    },
    {
      id: 2,
      title: 'Death of a Driver',
      role: 'Sarah (Lead)',
      company: 'Salt Lake Acting Company',
      year: '2019',
      description: 'Lead role in this political thriller by Will Snider, following its Off-Broadway world premiere at Urban Stages NYC. Two-person show exploring American-African relationships in Kenya. Developed through SLAC\'s 2018 Playwrights\' Lab.',
    },
    {
      id: 3,
      title: 'A Funny Thing Happened on the Way to the Gynecologic Oncology Unit...',
      role: 'Karla',
      company: 'Salt Lake Acting Company',
      year: '2018',
      description: 'Contemporary comedy-drama by Halley Feiffer exploring serious illness with humor and heart.',
    },
    {
      id: 4,
      title: 'Harbur Gate',
      role: 'Alyson Moss',
      company: 'Salt Lake Acting Company',
      year: '2017',
      description: 'World premiere by Kathleen Cahill that won the Edgerton Foundation New Play Award. Two-person convoy truck drama exploring women in the military. Salt Lake Magazine: "Stokes-Wylie really digs in here and turns Cahill\'s words into an intense jousting match that enlightens and provokes." Salt Lake Tribune praised the "seamless transition between prickly animosity and compassionate moments." Directed by Tamilla Woodard.',
    },
    {
      id: 5,
      title: 'Saturday\'s Voyeur',
      role: 'Various Characters',
      company: 'Salt Lake Acting Company',
      year: '2017',
      description: 'Utah\'s beloved annual satirical musical revue. Performed multiple characters in this long-running political satire and comedy. Directed by Cynthia Fleming.',
    },
    {
      id: 6,
      title: 'Bull Shark Attack',
      role: 'Tanya',
      company: 'Salt Lake Acting Company',
      year: '2016',
      description: 'Dark comedy by Troy Deutsch. Two-person show requiring physical comedy and dramatic range. Directed by Sandra Shotwell.',
    },
    {
      id: 7,
      title: 'In a Tilted Place',
      role: 'Various Roles',
      company: 'IRT Theatre (Irondale), New York',
      year: '2015',
      description: 'New York City production showcasing versatility in multiple roles. Directed by Ashley Monroe and Courtney Ulrich.',
    },
    {
      id: 8,
      title: 'The Crucible',
      role: 'Elizabeth Proctor',
      company: 'The Grand Theatre',
      year: '',
      description: 'Arthur Miller\'s classic drama. Portrayed the morally resolute Elizabeth Proctor in this powerful examination of truth, integrity, and persecution. A demanding dramatic role requiring emotional depth and restraint. Directed by Mark Fossen.',
    },
    {
      id: 9,
      title: 'In the Next Room (or the vibrator play)',
      role: 'Mrs. Givings',
      company: 'Pygmalion Theatre Company',
      year: '',
      description: 'Sarah Ruhl\'s Tony-nominated comedy. Lead role as Mrs. Givings exploring Victorian attitudes toward intimacy with wit and poignancy. Directed by Fran Pruyn.',
    },
    {
      id: 10,
      title: 'Burn This',
      role: 'Anna (Lead)',
      company: 'Utah Theatre Artists Co.',
      year: '',
      description: 'Lanford Wilson\'s passionate drama. Lead role as Anna, a choreographer navigating grief and unexpected attraction. A complex, emotionally demanding performance. Directed by Lane Richins.',
    },
    {
      id: 11,
      title: 'The Turn of the Screw',
      role: 'Governess (Lead)',
      company: 'Utah Theater Artists Co.',
      year: '',
      description: 'Gothic psychological thriller adapted from Henry James. Lead role as the Governess in this haunting tale of ambiguity and terror. Directed by Lane Richins.',
    },
    {
      id: 12,
      title: 'The Fairy Queen with A Midsummer Night\'s Dream',
      role: 'Helena',
      company: 'dell\'Arte Opera Ensemble & Classic Stage Company, NYC',
      year: '',
      description: 'Purcell\'s baroque opera paired with Shakespeare at Classic Stage Company. Performed Helena, showcasing vocal and acting abilities in this fusion of opera and classical theatre. Directed by Christopher Caines.',
    },
    {
      id: 13,
      title: 'Pride and Prejudice',
      role: 'Ensemble, u/s Elizabeth Bennett & Caroline Bingley (performed)',
      company: 'Milwaukee Repertory Theater',
      year: '',
      description: 'Major regional theatre production. Understudied and performed the lead role of Elizabeth Bennett and Caroline Bingley, demonstrating range and reliability. Directed by JR Sullivan.',
    },
    {
      id: 14,
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
              className="bg-white rounded-lg p-0 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {imageMap[performance.title] ? (
                <AutoCarousel
                  images={imageMap[performance.title]}
                  interval={5000}
                  className="aspect-video"
                />
              ) : null}
              <div className="p-6">
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
