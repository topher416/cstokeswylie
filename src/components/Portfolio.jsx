const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Season Programming & Literary Curation',
      category: 'Arts Administration',
      description:
        'Led season planning and script evaluation for 6+ play seasons, curating diverse programming that balanced artistic excellence with audience engagement.',
      image: null,
    },
    {
      id: 2,
      title: 'New Play Development',
      category: 'Literary Management',
      description:
        'Facilitated playwright workshops, staged readings, and development processes for emerging and established playwrights, fostering innovative theatrical voices.',
      image: null,
    },
    {
      id: 3,
      title: 'Community Engagement Initiatives',
      category: 'Outreach',
      description:
        'Designed and implemented community programs connecting diverse audiences with theatre, including post-show discussions, educational workshops, and accessibility initiatives.',
      image: null,
    },
    {
      id: 4,
      title: 'Fundraising Campaigns',
      category: 'Development',
      description:
        'Coordinated successful fundraising campaigns, grant applications, and donor cultivation events supporting artistic programming and organizational growth.',
      image: null,
    },
    {
      id: 5,
      title: 'Strategic Communication',
      category: 'Marketing',
      description:
        'Developed comprehensive marketing strategies and audience development plans across digital and traditional channels to expand patron base and community reach.',
      image: null,
    },
    {
      id: 6,
      title: 'Operational Excellence',
      category: 'Operations',
      description:
        'Streamlined organizational workflows, improved operational systems, and managed complex projects across multiple departments and stakeholder groups.',
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
          Featured Work
        </h2>
        <p className="text-center text-text-light text-lg mb-12 max-w-3xl mx-auto">
          A selection of projects and initiatives that showcase my expertise in theatre
          administration, literary management, and community engagement.
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
