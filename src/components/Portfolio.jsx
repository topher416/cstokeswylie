const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: '"Harbur Gate" - Edgerton Award Winner',
      category: 'Award-Winning Production',
      description:
        'World premiere by Kathleen Cahill that won the prestigious Edgerton Foundation New Play Award. Commissioned by National New Play Network. Critically acclaimed: "Stokes-Wylie really digs in here and turns Cahill\'s words into an intense jousting match that enlightens and provokes" - Salt Lake Magazine.',
      image: null,
    },
    {
      id: 2,
      title: '"Sleeping Giant" - World Premiere (2022)',
      category: 'New Play Development',
      description:
        'World premiere by Steve Yockey (creator of HBO\'s "The Flight Attendant"). Participated in developmental reading (May 2022) then originated role in full production (Sept-Oct 2022). Gephardt Daily praised the cast\'s ability to "seamlessly slide into the surreal" with "beautiful" multi-character performances.',
      image: null,
    },
    {
      id: 3,
      title: '"Death of a Driver" - Lead Role',
      category: 'Production Highlight',
      description:
        'Lead role as Sarah in this political thriller by Will Snider, following its Off-Broadway world premiere at Urban Stages NYC. Two-person show exploring American-African relationships, developed through SLAC\'s 2018 Playwrights\' Lab.',
      image: null,
    },
    {
      id: 4,
      title: 'SLAC New Play Sounding Series',
      category: 'New Play Development',
      description:
        'Extensive participation in staged readings of developing scripts, working directly with playwrights to shape new works before production. Key part of SLAC\'s commitment to developing original theatre.',
      image: null,
    },
    {
      id: 5,
      title: 'SLAC Playwrights\' Lab Leadership',
      category: 'Literary Management',
      description:
        'Worked with directors Kareem Fahmy, Tamilla Woodard, and dramaturg Alexandra Harbold in writer-focused laboratory settings, helping develop new plays from conception through production. Championed emerging voices and original works.',
      image: null,
    },
    {
      id: 6,
      title: 'Digital Shorts - Director',
      category: 'Directing',
      description:
        'Created and directed two short films for SLAC\'s Digital Shorts program: "Bleep" and "Dial-A-Laugh." Expanded artistic range beyond performance and literary management into directing and digital content.',
      image: null,
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
              {/* Placeholder Image */}
              <div className="aspect-video bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative text-5xl font-serif text-white/50">
                  {item.category.substring(0, 2)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm font-medium text-accent mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-light leading-relaxed">{item.description}</p>
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

// Add useState import at the top
import { useState } from 'react';

export default Portfolio;
