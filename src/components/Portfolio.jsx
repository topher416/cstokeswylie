const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Season Curation (2018-2024)',
      category: 'Literary Management',
      description:
        'Curated six seasons at Salt Lake Acting Company, reading 500+ scripts annually. Championed [specific play titles to be added], which [specific outcomes - attendance %, critical acclaim, awards].',
      image: null,
    },
    {
      id: 2,
      title: 'Playwright Development Programs',
      category: 'New Play Development',
      description:
        'Launched workshop series for emerging playwrights. Nurtured [X] new works from first draft to production, including collaborations with [playwright names to be added].',
      image: null,
    },
    {
      id: 3,
      title: '[Specific Production Title]',
      category: 'Production Highlight',
      description:
        'Championed this production from script selection through opening night. Result: [specific metrics - sold out X% of performances, brought in X new audience demographic, won X awards].',
      image: null,
    },
    {
      id: 4,
      title: 'Grant Success: [Foundation Name]',
      category: 'Fundraising',
      description:
        'Wrote successful grant application securing [$X amount] from [foundation name] to support [specific program]. This funding enabled [specific artistic outcome].',
      image: null,
    },
    {
      id: 5,
      title: 'Community Access Initiatives',
      category: 'Audience Development',
      description:
        'Created programs bringing theatre to underserved communities. Increased accessibility through [specific initiatives], resulting in [X% growth in diverse audiences].',
      image: null,
    },
    {
      id: 6,
      title: '[Notable Reading or Workshop]',
      category: 'New Play Development',
      description:
        'Organized staged reading/workshop of [play title] by [playwright]. Brought together [X artists/community members], leading to [outcome - full production, publication, etc.].',
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
        <p className="text-center text-text-light text-lg mb-12 max-w-3xl mx-auto">
          Highlights from my work championing new plays, supporting playwrights, and building audiences.
          <span className="block mt-2 text-sm italic">(Placeholders below - ready to customize with your specific achievements!)</span>
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
