import AutoCarousel from './AutoCarousel';
import LocationTag from './LocationTag';
import { useState } from 'react';

const Portfolio = () => {
  const imageMap = {
    'Harbur Gate (World Premiere, 2017) — Alyson Moss': [
      '/images/harburgate1cropped.jpg',
      '/images/harburgate2cropped.jpg',
      '/images/harburgate3cropped.jpg',
    ],
    'Bull Shark Attack (World Premiere, 2016) — Tanya': [
      '/images/bullshark1.jpg',
      '/images/bullshark2.jpg',
      '/images/bullshark3.JPG',
      '/images/slac_bullsharkattack_090416~4.jpg',
    ],
    'A Funny Thing Happened on the Way to the Gynecologic Oncology Unit at Memorial Sloan Kettering Cancer Center of New York City (Utah Premiere, 2018) — Karla': [
      '/images/funnything4cropped.jpg',
      '/images/funnything5cropped.jpg',
      '/images/funnything9cropped.jpg',
      '/images/funnything10.JPG',
    ],
    'Death of a Driver (Utah Premiere, 2019) — Sarah': [
      '/images/deathofadriver3cropped.jpg',
      '/images/deathofadriver5cropped.jpg',
      '/images/deathofadriver8cropped.jpg',
    ],
    'Sleeping Giant (World Premiere, 2022) — Ensemble/Multiple roles': [
      '/images/sleepinggiant1cropped.jpg',
      '/images/sleepinggiant2cropped.jpg',
      '/images/sleepinggiant3cropped.jpg',
    ],
  };
  const portfolioItems = [
    {
      id: 1,
      title: 'Harbur Gate (World Premiere, 2017) — Alyson Moss',
      category: 'World Premiere',
      location: 'Salt Lake City, UT',
      description:
        'World premiere of Kathleen Cahill’s triptych about women in the military and the aftermath of war. Originated Alyson Moss; production developed through SLAC’s new-play pipeline and supported by an Edgerton Foundation New Play Award. Press called the staging “powerful,” highlighting stories drawn from Iraq/Afghanistan service members and MST (military sexual trauma).',
      links: [
        { label: 'The Daily Utah Chronicle', count: 4 },
        { label: 'saltlakeactingcompany.org', count: 4 },
        { label: 'The Salt Lake Tribune', count: 4 },
      ],
    },
    {
      id: 2,
      title: 'Bull Shark Attack (World Premiere, 2016) — Tanya',
      category: 'World Premiere',
      location: 'Salt Lake City, UT',
      description:
        'Originated Tanya in Troy Deutsch’s two-hander dark comedy about small-town longing, myth, and menace. The run opened SLAC’s season; coverage framed it as “Shark Week(s) at SLAC),” noting the show’s blend of physical comedy and emotional volatility.',
      links: [
        { label: 'saltlakeactingcompany.org', count: 2 },
        { label: 'The Salt Lake Tribune', count: 2 },
      ],
    },
    {
      id: 3,
      title: 'A Funny Thing Happened on the Way to the Gynecologic Oncology Unit at Memorial Sloan Kettering Cancer Center of New York City (Utah Premiere, 2018) — Karla',
      category: 'Utah Premiere',
      location: 'Salt Lake City, UT',
      description:
        'Played Karla in Halley Feiffer’s brash, big-hearted comedy about two adult children colliding beside their hospitalized mothers. SLAC’s archive compiles reviews and production details; simultaneous Tribune coverage spotlighted SLAC’s adoption of intimacy direction practices to keep artists safe during vulnerable scenes.',
      links: [{ label: 'saltlakeactingcompany.org', count: 1 }],
    },
    {
      id: 4,
      title: 'Death of a Driver (Utah Premiere, 2019) — Sarah',
      category: 'Utah Premiere',
      location: 'Salt Lake City, UT',
      description:
        'Two-hander by Will Snider about an American engineer and her Kenyan colleague whose friendship buckles under class, politics, and power. Opened SLAC’s 49th season; reviews praised taut pacing and emotionally precise performances.',
      links: [
        { label: 'saltlakeactingcompany.org', count: 2 },
        { label: 'The Utah Review', count: 2 },
      ],
    },
    {
      id: 5,
      title: 'Sleeping Giant (World Premiere, 2022) — Ensemble/Multiple roles',
      category: 'World Premiere',
      location: 'Salt Lake City, UT',
      description:
        'Steve Yockey’s surreal, darkly comic mosaic about belief and the monsters we wake. Originated multiple characters in a four-actor ensemble; the production continued SLAC’s emphasis on new-play development through readings and labs.',
      links: [{ label: 'saltlakeactingcompany.org', count: 0 }],
    },
    {
      id: 6,
      title: 'Yoga Play (Utah Premiere, 2023) — Assistant Director',
      category: 'Assistant Director',
      location: 'Salt Lake City, UT',
      description:
        'Assistant director on Dipika Guha’s sharp satire of the wellness apparel industry, identity, and the commodification of “enlightenment.” SLAC’s season page credits the AD role and outlines the creative team and production run.',
      links: [{ label: 'saltlakeactingcompany.org', count: 0 }],
    },
    {
      id: 7,
      title: 'You Will Get Sick (Regional Premiere, 2024) — Assistant Director',
      category: 'Assistant Director',
      location: 'Salt Lake City, UT',
      description:
        'Assistant director for Noah Diaz’s lyrical meditation on illness, care, and the stories we tell to keep going. Reviews called SLAC’s staging “smartly, directly, solidly acted” and “thought-provoking,” noting how humor and existential dread coexist in the piece.',
      links: [
        { label: 'Utah Theatre Bloggers', count: 3 },
        { label: 'saltlakeactingcompany.org', count: 3 },
        { label: 'The Utah Review', count: 3 },
      ],
    },
  ];

  const categories = ['All', ...new Set(portfolioItems.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Featured Projects
        </h2>
        <p className="text-center text-text-light text-lg mb-4 max-w-3xl mx-auto">
          Highlights from championing new plays, supporting playwrights, and building audiences at Salt Lake Acting Company.
        </p>
        <p className="text-center text-accent font-medium mb-12">
          Including an Edgerton Foundation New Play Award winner and world premieres by nationally recognized playwrights
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-background-dark text-text hover:bg-accent/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-background-dark rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {imageMap[item.title] ? (
                <AutoCarousel images={imageMap[item.title]} interval={5000} className="aspect-video" />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="relative text-5xl font-serif text-white/50">
                    {item.category.substring(0, 2)}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="text-sm font-medium text-accent mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                {item.location && (
                  <div className="mb-2"><LocationTag text={item.location} /></div>
                )}
                <p className="text-text-light leading-relaxed mb-3">{item.description}</p>
                {item.links && item.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.links.map((l, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white text-primary border border-background-dark text-sm"
                      >
                        <span className="font-medium">{l.label}</span>
                        {typeof l.count === 'number' && l.count > 0 && (
                          <span className="text-xs text-text-light">+{l.count}</span>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note about adding content */}
        <div className="mt-12 text-center">
          <p className="text-text-light italic">
            This portfolio section can be expanded with performance videos, production photos,
            press mentions, and detailed case studies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
