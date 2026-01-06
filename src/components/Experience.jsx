import { useState } from 'react';
import LocationTag from './LocationTag.jsx';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      company: 'Salt Lake Acting Company',
      title: 'Literary Manager',
      dates: 'January 2018 – April 2024',
      location: 'Salt Lake City, UT',
      highlights: [
        'Oversaw season planning, auditions and casting, and production scheduling for multiple mainstage productions',
        'Directed cross-departmental coordination to ensure alignment of artistic and production goals',
        'Negotiated and administered contracts with artists, playwrights, and agents',
        'Managed budgets and facilitated offers for creative team members',
        'Evaluated production needs for dialects, intimacy coaching, and fight choreography',
        'Hired creative teams and coordinated travel accommodations for visiting artists',
        'Developed community engagement initiatives and built partnerships with local organizations',
        'Designed operational workflows to streamline departmental processes',
      ],
    },
    {
      id: 2,
      company: 'Brotherhood Synagogue Nursery School',
      title: 'Operations Manager',
      dates: 'October 2014 – September 2017',
      location: 'New York City, NY',
      highlights: [
        'Coordinated school events, administrative calendars, and daily operations',
        'Served as primary contact for parents and maintained strong community relationships',
      ],
    },
    {
      id: 3,
      company: 'Salt Lake Acting Company',
      title: 'Development & Outreach Coordinator',
      dates: 'October 2011 – June 2013',
      location: 'Salt Lake City, UT',
      highlights: [
        'Researched, wrote, and submitted foundation and government grant proposals, letters of intent, and reports',
        'Tracked grant deliverables, timelines, and compliance in coordination with program and finance staff',
        'Supported donor stewardship through meetings, follow-ups, and outreach initiatives',
        'Developed community engagement programs connecting youth, schools, and artists',
      ],
    },
    {
      id: 4,
      company: 'Salt Lake Acting Company',
      title: 'Communications & Audience Development',
      dates: 'June 2010 – September 2011',
      location: 'Salt Lake City, UT',
      highlights: [
        'Led and managed audience services and front-of-house operations',
        'Served as key liaison between internal teams and audiences to strengthen community relationships',
      ],
    },
  ];

  const additionalExperience = [
    {
      id: 5,
      company: 'DataAnnotation',
      title: 'AI Model Evaluator & Prompt Engineer',
      dates: 'April 2024 – Present',
      location: 'Remote',
      highlights: [
        'Assess AI model responses for safety, accuracy, and adherence to guidelines',
        'Developed adaptable technical communication skills in a rapidly evolving field',
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
          {experiences.map((exp) => (
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

        {/* Additional Experience */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mt-12 mb-6 text-primary">
          Additional Experience
        </h3>
        <div className="space-y-6">
          {additionalExperience.map((exp) => (
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
