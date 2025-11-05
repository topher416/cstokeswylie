import { useState } from 'react';
import LocationTag from './LocationTag.jsx';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      company: 'Currently',
      title: 'Seeking Theatre Leadership Opportunities',
      dates: 'April 2024 – Present',
      location: 'Chicago, IL',
      highlights: [
        'Relocated to Chicago in 2024 to pursue theatre opportunities in a vibrant arts community',
        'Available for literary management, artistic administration, or development roles in theatre',
        'Open to full-time positions, consulting projects, or interim leadership',
        'Freelance AI evaluation work (remote/part-time) to support theatre career transition',
      ],
    },
    {
      id: 2,
      company: 'Salt Lake Acting Company',
      title: 'Literary Manager',
      dates: 'January 2018 – April 2024',
      location: 'Salt Lake City, UT',
      highlights: [
        'Read and evaluated 500+ script submissions annually, discovering emerging playwrights and identifying works for production',
        'Championed new works from development through production, supporting playwrights from first draft to opening night',
        'Curated six seasons of programming in collaboration with Artistic Director, balancing artistic vision with audience development',
        'Built relationships with agents, publishers, and playwrights to source compelling new work',
        'Organized playwright workshops, staged readings, and community engagement events',
        'Moderated post-show discussions and talkbacks, connecting audiences with artists and themes',
        'Secured grant funding and donor support for new play development initiatives',
      ],
    },
    {
      id: 3,
      company: 'Brotherhood Synagogue Nursery School',
      title: 'Operations Manager',
      dates: 'October 2014 – September 2017',
      location: 'New York City, NY',
      highlights: [
        'Managed operations for early childhood education program serving 100+ families in New York City',
        'Oversaw budgets, vendor relationships, facility coordination, and administrative staff',
        'Improved enrollment processes and family communication systems',
        'Coordinated fundraising events and community programming',
      ],
    },
    {
      id: 4,
      company: 'Salt Lake Acting Company',
      title: 'Development & Outreach Coordinator / Director of Development',
      dates: 'October 2011 – June 2013',
      location: 'Salt Lake City, UT',
      highlights: [
        'Led fundraising campaigns and cultivated donor relationships',
        'Wrote grant applications and managed foundation partnerships',
        'Created community outreach programs to expand theatre access',
        'Organized cultivation events and donor stewardship activities',
        'Served in leadership development role building SLAC\'s fundraising capacity',
      ],
    },
    {
      id: 5,
      company: 'Salt Lake Acting Company',
      title: 'Communications & Audience Development Associate',
      dates: 'June 2010 – September 2011',
      location: 'Salt Lake City, UT',
      highlights: [
        'Developed marketing strategies and managed social media presence',
        'Created promotional materials and coordinated audience development initiatives',
        'Grew subscriber base through targeted campaigns and community partnerships',
        'Analyzed audience data to inform programming and marketing decisions',
      ],
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="section-container bg-background-dark">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          Professional Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleExpand(exp.id)}
                className="w-full p-6 text-left flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-primary">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      {exp.location && <LocationTag text={exp.location} />}
                      <span className="text-sm md:text-base text-accent font-medium">
                        {exp.dates}
                      </span>
                    </div>
                  </div>
                  <p className="text-lg text-text-light font-medium">{exp.company}</p>
                </div>

                <svg
                  className={`w-6 h-6 text-accent transition-transform duration-300 flex-shrink-0 mt-1 ${
                    expandedId === exp.id ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedId === exp.id && (
                <div className="px-6 pb-6 animate-fadeIn">
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                        <span className="text-text leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
