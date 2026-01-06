const Skills = () => {
  const skillCategories = [
    {
      title: 'Production & Operations',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      skills: [
        'Production coordination & scheduling',
        'Contract negotiation & administration',
        'Budget management',
        'Workflow & process design',
        'Cross-departmental collaboration',
      ],
    },
    {
      title: 'Literary & Artistic',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      skills: [
        'Season planning & curation',
        'Script evaluation & dramaturgy',
        'Playwright development & mentorship',
        'New play commissioning',
        'Auditions & casting',
      ],
    },
    {
      title: 'Artist Relations',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      skills: [
        'Creative team hiring',
        'Artist liaison & communication',
        'Travel & accommodations coordination',
        'Production needs assessment',
        'Intimacy/fight/dialect coordination',
      ],
    },
    {
      title: 'Community & Audience',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      skills: [
        'Community partnership building',
        'Audience development & outreach',
        'Post-show discussions & talkbacks',
        'Educational programming',
        'Equity, access & inclusion initiatives',
      ],
    },
  ];

  return (
    <section id="skills" className="section-container bg-background-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Areas of Expertise
        </h2>
        <p className="text-center text-text-light text-lg mb-12 max-w-3xl mx-auto">
          Where artistic sensibility meets operational know-how.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-accent">{category.icon}</div>
                <h3 className="text-xl font-bold text-primary">{category.title}</h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-text">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
