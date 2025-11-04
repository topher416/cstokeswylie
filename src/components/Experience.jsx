import { useState } from 'react';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      company: 'DataAnnotation',
      title: 'AI Model Evaluator & Prompt Engineer',
      dates: 'April 2024 – Present',
      highlights: [
        'Evaluate and refine AI model outputs for accuracy and relevance in specialized domains',
        'Design and test prompts to improve model performance across diverse use cases',
        'Collaborate with cross-functional teams to enhance AI training processes',
        'Apply critical thinking and subject matter expertise to quality assurance workflows',
      ],
    },
    {
      id: 2,
      company: 'Salt Lake Acting Company',
      title: 'Literary Manager',
      dates: 'January 2018 – April 2024',
      highlights: [
        'Managed literary operations for a renowned regional theatre company',
        'Curated and evaluated 500+ script submissions annually for season selection',
        'Facilitated playwright workshops, readings, and new play development initiatives',
        'Collaborated with Artistic Director to shape programming and artistic vision',
        'Built and maintained relationships with agents, playwrights, and publishers',
        'Led community engagement initiatives connecting audiences with new works',
        'Organized and moderated post-show discussions and educational programming',
      ],
    },
    {
      id: 3,
      company: 'Brotherhood Synagogue Nursery School',
      title: 'Operations Manager',
      dates: 'October 2014 – September 2017',
      highlights: [
        'Oversaw daily operations for early childhood education program serving 100+ families',
        'Managed budgets, vendor relationships, and facility maintenance',
        'Streamlined enrollment processes and improved parent communication systems',
        'Coordinated special events, fundraisers, and community programming',
        'Supervised administrative staff and optimized operational workflows',
      ],
    },
    {
      id: 4,
      company: 'Salt Lake Acting Company',
      title: 'Development & Outreach Coordinator',
      dates: 'October 2011 – June 2013',
      highlights: [
        'Coordinated fundraising campaigns and donor stewardship initiatives',
        'Managed grant writing and foundation relations',
        'Developed and implemented community outreach programs',
        'Organized special events and cultivation activities for major donors',
        'Tracked and reported on fundraising metrics and campaign outcomes',
      ],
    },
    {
      id: 5,
      company: 'Salt Lake Acting Company',
      title: 'Communications & Audience Development Associate',
      dates: 'June 2010 – September 2011',
      highlights: [
        'Developed and executed marketing strategies across multiple channels',
        'Managed social media presence and digital content creation',
        'Coordinated audience development initiatives to expand patron base',
        'Created promotional materials and season brochures',
        'Analyzed audience data to inform marketing and programming decisions',
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
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-primary">
                      {exp.title}
                    </h3>
                    <span className="text-sm md:text-base text-accent font-medium mt-1 md:mt-0">
                      {exp.dates}
                    </span>
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
