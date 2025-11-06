import AutoCarousel from './AutoCarousel.jsx';
import LocationTag from './LocationTag.jsx';

const Performance = () => {
  const imageMap = {
    'Sleeping Giant': [
      '/images/sleepinggiant1cropped.jpg',
      '/images/sleepinggiant2cropped.jpg',
      '/images/sleepinggiant3cropped.jpg',
    ],
    'Death of a Driver': [
      '/images/deathofadriver1.jpg',
      '/images/deathofadriver2.jpg',
      '/images/deathofadriver4.jpg',
      '/images/deathofadriver6.jpg',
      '/images/deathofadriver7.jpg',
      '/images/deathofadriver8cropped.jpg',
    ],
    'A Funny Thing Happened on the Way to the Gynecologic Oncology Unit...': [
      '/images/funnything1.jpg',
      '/images/funnything3.jpg',
      '/images/funnything4cropped.jpg',
      '/images/funnything6.jpg',
      '/images/funnything7.jpg',
      '/images/funnything8.jpg',
    ],
    'Harbur Gate': [
      '/images/harburgate2cropped.jpg',
      '/images/harburgate7.jpg',
      '/images/harburgate8.jpg',
    ],
    "Saturday's Voyeur": [
      '/images/saturdays_voyeur_2017_ensemble_dance.jpeg',
      '/images/voyeur1.JPG',
      '/images/voyeur2.JPG',
      '/images/voyeur3.JPG',
      '/images/voyeur4.JPG',
      '/images/voyeur5.jpg',
      '/images/voyeur6.jpg',
      '/images/voyeur7.jpg',
      '/images/voyeur8.jpg',
      '/images/voyeur9.jpg',
      '/images/voyeur10.jpg',
      '/images/voyeur11.jpg',
      '/images/voyeur12.jpg',
    ],
    'Bull Shark Attack': [
      '/images/bullshark1.jpg',
      '/images/bullshark2.jpg',
      '/images/slac_bullsharkattack_090416~4.jpg',
      '/images/bullshark3.JPG',
    ],
    'In a Tilted Place': [
      '/images/tiltedplace1.JPG',
      '/images/tiltedplace2.jpg',
      '/images/tiltedplace3.jpg',
      '/images/tiltedplace4.jpg',
      '/images/tiltedplace5.jpg',
      '/images/tiltedplace6.jpg',
      '/images/tiltedplace7.jpg',
      '/images/troydeutsch1.jpg',
      '/images/troydeutsch2.jpg',
    ],
    'The Crucible': ['/images/crucible1.jpg', '/images/crucible2.jpg', '/images/crucible3.webp'],
    "The Fairy Queen with A Midsummer Night's Dream": [
      '/images/midsummer1.JPG',
      '/images/midsummer2.JPG',
      '/images/midsummer4.JPG',
      '/images/midsummer6.JPG',
      '/images/midsummer7.JPG',
      '/images/midsummer8.JPG',
      '/images/midsummer9.jpg',
    ],
    'In the Next Room (or the vibrator play)': [
      '/images/at_oct13_pygmalion1.jpg',
      '/images/inthenextroom1.JPG',
      '/images/inthenextroom1.webp',
      '/images/vibratorplay1.JPG',
      '/images/vibratorplay2.JPG',
      '/images/vibratorplay3.JPG',
      '/images/vibratorplay4.JPG',
      '/images/vibratorplay5.JPG',
      '/images/vibratorplay6.JPG',
      '/images/vibratorplay7.JPG',
      '/images/vibratorplay8.JPG',
      '/images/vibratorplay9.JPG',
      '/images/vibratorplay10.JPG',
      '/images/vibratorplay11.JPG',
    ],
    'The Good Body': [
      '/images/goodbody1.JPG',
      '/images/goodbody2.JPG',
      '/images/goodbody3.JPG',
    ],
    Cheat: [
      '/images/cheat1.jpg',
      '/images/cheat2.JPG',
      '/images/cheat3.jpg',
    ],
    'The Exit Interview': [
      '/images/exitinterview1.jpg',
      '/images/exitinterview2.jpg',
      '/images/exitinterview3.png',
    ],
    'The Turn of the Screw': [
      '/images/turnofthescrew1.jpg',
    ],
    'The Shape of Things': [
      '/images/shapeofthings1.jpg',
      '/images/shapeofthings2.jpg',
    ],
    'Stags and Hens': [
      '/images/stagsandhens2003.jpg',
    ],
    'The Comedy of Errors': [
      '/images/comedyoferrors20051.jpg',
    ],
  };
  const performances = [
    {
      id: 1,
      title: 'Sleeping Giant',
      playwright: 'Steve Yockey',
      role: 'The Convert (4 characters)',
      company: 'Salt Lake Acting Company',
      year: '2022',
      location: 'Salt Lake City, UT',
      description: 'World premiere by Steve Yockey (creator of HBO\'s "The Flight Attendant"). Played four distinct characters within a single role. Participated in developmental reading (May 2022) before originating the role in full production (Sept-Oct 2022). Critics praised the cast\'s ability to "seamlessly slide into the surreal... beautifully." Co-directed by Emilio Casillas and Shawn Francis Saunders.',
      reviewLink: 'https://gephardtdaily.com/local/review-sleeping-giant-at-salt-lake-acting-company-will-haunt-your-dreams/',
    },
    {
      id: 2,
      title: 'Death of a Driver',
      playwright: 'Will Snider',
      role: 'Sarah (Lead)',
      company: 'Salt Lake Acting Company',
      year: '2019',
      location: 'Salt Lake City, UT',
      description: 'Lead role in this political thriller, following its Off-Broadway world premiere at Urban Stages NYC. A riveting counterpoint between an American engineer and a Kenyan driver navigating complex social and political landscapes. Developed through SLAC\'s 2018 Playwrights\' Lab.',
      reviewLink: 'https://www.theutahreview.com/salt-lake-acting-company-opens-49th-season-with-riveting-utah-premiere-of-death-of-a-driver/',
      videoEmbed: 'https://www.youtube.com/embed/Esq0j-UtGb8',
    },
    {
      id: 3,
      title: 'A Funny Thing Happened on the Way to the Gynecologic Oncology Unit...',
      playwright: 'Halley Feiffer',
      role: 'Karla',
      company: 'Salt Lake Acting Company',
      year: '2018',
      location: 'Salt Lake City, UT',
      description: 'Contemporary comedy-drama exploring serious illness with humor and heart.',
      reviewLink: 'https://utahtheatrebloggers.com/27948/gynecologic-oncology-unit-is-both-touching-and-funny',
    },
    {
      id: 4,
      title: 'Harbur Gate',
      playwright: 'Kathleen Cahill',
      role: 'Alyson Moss',
      company: 'Salt Lake Acting Company',
      year: '2017',
      location: 'Salt Lake City, UT',
      description: 'World premiere that won the Edgerton Foundation New Play Award. Two-person convoy truck drama exploring women in the military. Salt Lake Magazine: "Stokes-Wylie really digs in here and turns Cahill\'s words into an intense jousting match that enlightens and provokes." Salt Lake Tribune praised the "seamless transition between prickly animosity and compassionate moments." Directed by Tamilla Woodard.',
      reviewLinks: [
        'https://www.saltlakeactingcompany.org/about/latest-news/item/1230-salt-lake-magazine-harbur-gate-review',
        'https://www.saltlakeactingcompany.org/about/latest-news/item/1233-salt-lake-tribune-review-of-harbur-gate'
      ],
      videoEmbed: 'https://www.youtube.com/embed/bqcdJ8zemXI',
    },
    {
      id: 5,
      title: 'Saturday\'s Voyeur',
      playwright: 'Allen Nevins & Nancy Borgenicht',
      role: 'Various Characters',
      company: 'Salt Lake Acting Company',
      year: '2017',
      location: 'Salt Lake City, UT',
      description: 'Utah\'s beloved annual satirical musical revue. Performed multiple characters in this long-running political satire and comedy. Directed by Cynthia Fleming.',
      reviewLink: 'https://www.saltlakeactingcompany.org/about/latest-news/item/1260-utah-theater-bloggers-review-saturday-s-voyeur-2017',
    },
    {
      id: 6,
      title: 'Bull Shark Attack',
      playwright: 'Troy Deutsch',
      role: 'Tanya',
      company: 'Salt Lake Acting Company',
      year: '2016',
      location: 'Salt Lake City, UT',
      description: 'Dark comedy. Two-person show requiring physical comedy and dramatic range. Directed by Sandra Shotwell.',
      reviewLink: 'https://www.cityweekly.net/BuzzBlog/archives/2016/09/07/salt-lake-acting-company-bull-shark-attack',
    },
    {
      id: 7,
      title: 'In a Tilted Place',
      playwright: 'Troy Deutsch',
      role: 'Various Roles',
      company: 'IRT Theatre (Irondale), New York',
      year: '2015',
      location: 'New York City, NY',
      description: 'New York City production showcasing versatility in multiple roles. Directed by Ashley Monroe and Courtney Ulrich.',
      reviewLink: 'http://www.theasy.com/Reviews/2015/I/inatiltedplace.php',
    },
    {
      id: 8,
      title: 'The Fairy Queen with A Midsummer Night\'s Dream',
      playwright: 'Henry Purcell / William Shakespeare',
      role: 'Helena',
      company: 'dell\'Arte Opera Ensemble, East 13th Street Theatre, New York City',
      year: '2014',
      location: 'New York City, NY',
      description: 'Purcell\'s baroque opera paired with Shakespeare. Performed Helena, showcasing vocal and acting abilities in this fusion of opera and classical theatre. Directed by Christopher Caines.',
      reviewLink: 'https://seenandheard-international.com/2014/08/the-fairy-queen-a-production-evoking-the-spirit-of-purcell/',
    },
    {
      id: 9,
      title: 'Cheat',
      playwright: 'Julie Jensen',
      role: 'Roxy',
      company: 'Pygmalion Theatre Company',
      year: '2013',
      location: 'Salt Lake City, UT',
      description: 'Production at Pygmalion Theatre Company.',
      reviewLink: 'https://utahtheatrebloggers.com/14841/solid-acting-and-design-anchor-pygmalions-cheat',
    },
    {
      id: 10,
      title: 'The Exit Interview',
      playwright: 'William Missouri Downs',
      role: 'Actress 2',
      company: 'Salt Lake Acting Company',
      year: '2013',
      location: 'Salt Lake City, UT',
      description: 'Rolling World Premiere from the National New Play Network. A raucous comedy about a professor\'s exit interview.',
    },
    {
      id: 11,
      title: 'The Last Word',
      playwright: 'David Kranes',
      role: 'Reader',
      company: 'Salt Lake Acting Company',
      year: '2013',
      location: 'Salt Lake City, UT',
      description: 'New Play Sounding Series reading.',
    },
    {
      id: 10,
      title: 'The Crucible',
      playwright: 'Arthur Miller',
      role: 'Elizabeth Proctor',
      company: 'The Grand Theatre',
      year: '2012',
      location: 'Salt Lake City, UT',
      description: 'Classic drama. Portrayed the morally resolute Elizabeth Proctor in this powerful examination of truth, integrity, and persecution. A demanding dramatic role requiring emotional depth and restraint. Directed by Mark Fossen.',
    },
    {
      id: 11,
      title: 'In the Next Room (or the vibrator play)',
      playwright: 'Sarah Ruhl',
      role: 'Mrs. Givings',
      company: 'Pygmalion Theatre Company',
      year: '2012',
      location: 'Salt Lake City, UT',
      description: 'Tony-nominated comedy. Lead role as Mrs. Givings exploring Victorian attitudes toward intimacy with wit and poignancy. Directed by Fran Pruyn.',
      reviewLink: 'https://utahtheatrebloggers.com/11072/in-the-next-room-or-the-vibrator-play-is-electric',
    },
    {
      id: 12,
      title: 'Angels in America: Perestroika',
      playwright: 'Tony Kushner',
      role: 'Reader',
      company: 'Salt Lake Acting Company',
      year: '2012',
      location: 'Salt Lake City, UT',
      description: 'New Play Sounding Series reading of Part 2 of Tony Kushner\'s epic.',
    },
    {
      id: 13,
      title: 'The Good Body',
      playwright: 'Eve Ensler',
      role: 'Actor',
      company: 'Pygmalion Theatre Company',
      year: '2011',
      location: 'Salt Lake City, UT',
      description: 'Production at Pygmalion Theatre Company.',
      reviewLink: 'https://www.cityweekly.net/ae/review-pygmalion-theatre-companys-the-good-body-2155142',
    },
    {
      id: 14,
      title: 'Turquoise Wind',
      playwright: 'Kurt Proctor',
      role: 'Reader',
      company: 'Salt Lake Acting Company',
      year: '2011',
      location: 'Salt Lake City, UT',
      description: 'New Play Sounding Series reading.',
    },
    {
      id: 15,
      title: 'Burn This',
      playwright: 'Lanford Wilson',
      role: 'Anna (Lead)',
      company: 'Utah Theatre Artists Co.',
      year: '2010',
      location: 'Salt Lake City, UT',
      description: 'Passionate drama. Lead role as Anna, a choreographer navigating grief and unexpected attraction. A complex, emotionally demanding performance. Directed by Lane Richins.',
      reviewLink: 'https://utahtheatrebloggers.com/1641/burn-this-is-a-strong-production-from-the-utac',
    },
    {
      id: 16,
      title: 'The Harvey Girls',
      playwright: 'Julie Jensen',
      role: 'Stella/Shudder',
      company: 'Salt Lake Acting Company',
      year: '2010',
      location: 'Salt Lake City, UT',
      description: 'Fearless Fringe Festival production.',
    },
    {
      id: 17,
      title: 'A Night With the Family',
      playwright: 'Matthew Ivan Bennett',
      role: 'Bree',
      company: 'Salt Lake Acting Company',
      year: '2010',
      location: 'Salt Lake City, UT',
      description: 'New Play Sounding Series reading. A comedy about a dysfunctional family gathering.',
    },
    {
      id: 18,
      title: 'The Turn of the Screw',
      playwright: 'Henry James (adapted)',
      role: 'Governess (Lead)',
      company: 'Utah Theater Artists Co.',
      year: '2009',
      location: 'Salt Lake City, UT',
      description: 'Gothic psychological thriller. Lead role as the Governess in this haunting tale of ambiguity and terror. Directed by Lane Richins.',
      reviewLink: 'https://www.deseret.com/2009/9/28/20342872/ghostly-turn-of-the-screw-offers-great-acting/',
    },
    {
      id: 19,
      title: 'State of the Union',
      playwright: 'Howard Lindsay and Russel Crouse',
      role: 'Jenny/Ensemble',
      company: 'Milwaukee Repertory Theater',
      year: '2009',
      location: 'Milwaukee, WI',
      description: 'Production at Milwaukee Repertory Theater.',
    },
    {
      id: 20,
      title: 'Mirandolina',
      playwright: 'Carlo Goldoni',
      role: 'u/s Ortensia',
      company: 'Milwaukee Repertory Theater',
      year: '2009',
      location: 'Milwaukee, WI',
      description: 'Production at Milwaukee Repertory Theater.',
    },
    {
      id: 21,
      title: 'Clarence',
      playwright: 'Booth Tarkington',
      role: 'Violet Pinney',
      company: 'Milwaukee Rep/Ten Chimneys',
      year: '2009',
      location: 'Milwaukee, WI',
      description: 'Ten Chimneys reading.',
    },
    {
      id: 22,
      title: 'Idiot\'s Delight',
      playwright: 'Robert E. Sherwood',
      role: 'Irene',
      company: 'Milwaukee Rep/Ten Chimneys',
      year: '2009',
      location: 'Milwaukee, WI',
      description: 'Pulitzer Prize-winning play. Ten Chimneys reading.',
    },
    {
      id: 23,
      title: 'O Mistress Mine',
      playwright: 'Terence Rattigan',
      role: 'Diana Fletcher',
      company: 'Milwaukee Rep/Ten Chimneys',
      year: '2009',
      location: 'Milwaukee, WI',
      description: 'Ten Chimneys reading.',
    },
    {
      id: 24,
      title: 'Pride and Prejudice',
      playwright: 'Jane Austen (adapted)',
      role: 'Ensemble, u/s Elizabeth Bennett & Caroline Bingley (performed)',
      company: 'Milwaukee Repertory Theater',
      year: '2009',
      location: 'Milwaukee, WI',
      description: 'Major regional theatre production. Understudied and performed the lead role of Elizabeth Bennett and Caroline Bingley, demonstrating range and reliability. Directed by JR Sullivan.',
    },
    {
      id: 25,
      title: 'The Cherry Orchard',
      playwright: 'Anton Chekhov',
      role: 'Ensemble, u/s Lyubov Ranyevskaya (performed)',
      company: 'Milwaukee Repertory Theater',
      year: '2009',
      location: 'Milwaukee, WI',
      description: 'Masterwork at one of America\'s leading regional theatres. Understudied the lead role of Lyubov Ranyevskaya. Directed by Ben Barnes.',
      reviewLink: 'https://www.milwaukeemag.com/Review_TheCherryOrchard/',
    },
    {
      id: 26,
      title: 'The Blonde, The Brunette and The Vengeful Redhead',
      playwright: 'Robert Hewett',
      role: 'Ensemble, u/s',
      company: 'Milwaukee Repertory Theater',
      year: '2008',
      location: 'Milwaukee, WI',
      description: 'Production at Milwaukee Repertory Theater.',
    },
    {
      id: 27,
      title: 'Macbeth',
      playwright: 'William Shakespeare',
      role: 'Witch 2/Lady Macduff',
      company: 'Salt Lake Shakespeare',
      year: '2006',
      location: 'Salt Lake City, UT',
      description: 'Production at Salt Lake Shakespeare.',
    },
    {
      id: 28,
      title: 'Taming of the Shrew',
      playwright: 'William Shakespeare',
      role: 'Bianca',
      company: 'Salt Lake Shakespeare',
      year: '2006',
      location: 'Salt Lake City, UT',
      description: 'Production at Salt Lake Shakespeare.',
    },
    {
      id: 29,
      title: 'The Comedy of Errors',
      playwright: 'William Shakespeare',
      role: '',
      company: 'University of Utah Actor Training Program',
      year: '2005',
      location: 'Salt Lake City, UT',
      description: 'University of Utah Actor Training Program production.',
    },
    {
      id: 30,
      title: 'The Shape of Things',
      playwright: 'Neil LaBute',
      role: '',
      company: 'University of Utah Actor Training Program',
      year: '2004',
      location: 'Salt Lake City, UT',
      description: 'University of Utah Actor Training Program production.',
    },
    {
      id: 31,
      title: 'Stags and Hens',
      playwright: 'Willy Russell',
      role: '',
      company: 'University of Utah Actor Training Program',
      year: '2003',
      location: 'Salt Lake City, UT',
      description: 'University of Utah Actor Training Program production.',
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
                    {performance.title} by {performance.playwright}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-text-light mb-3">
                    {performance.role && (
                      <>
                        <span className="font-medium text-accent">{performance.role}</span>
                        <span className="hidden sm:inline">•</span>
                      </>
                    )}
                    <span>{performance.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{performance.year}</span>
                    {performance.location && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <LocationTag text={performance.location} />
                      </>
                    )}
                  </div>
                  <p className="text-text leading-relaxed">{performance.description}</p>
                  {(performance.reviewLink || performance.reviewLinks) && (
                    <div className="mt-4">
                      {performance.reviewLink && (
                        <a
                          href={performance.reviewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-accent hover:text-accent-dark transition-colors text-sm font-medium"
                        >
                          Read Review →
                        </a>
                      )}
                      {performance.reviewLinks && (
                        <div className="flex flex-wrap gap-3">
                          {performance.reviewLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-accent hover:text-accent-dark transition-colors text-sm font-medium"
                            >
                              Read Review {index + 1} →
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {performance.videoEmbed && (
                    <div className="mt-6">
                      <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          width="100%"
                          height="100%"
                          src={performance.videoEmbed}
                          title={`${performance.title} video`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Reel */}
        <div className="mt-12 bg-white rounded-lg p-8">
          <h3 className="text-xl font-semibold text-primary mb-6 text-center">Performance Reels & Media</h3>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/AIQ4o1MXWHk"
                title="Performance Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
