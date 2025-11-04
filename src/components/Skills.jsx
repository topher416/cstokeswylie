const Skills = () => {
  const skillCategories = [
    {
      title: 'Arts Administration',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      skills: [
        'Literary Management',
        'Season Planning',
        'Artistic Direction',
        'Script Evaluation',
        'Playwright Relations',
      ],
    },
    {
      title: 'Operations & Management',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      skills: [
        'Project Management',
        'Process Improvement',
        'Budget Management',
        'Vendor Relations',
        'Workflow Optimization',
      ],
    },
    {
      title: 'Development & Fundraising',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      skills: [
        'Grant Writing',
        'Donor Stewardship',
        'Campaign Management',
        'Foundation Relations',
        'Event Planning',
      ],
    },
    {
      title: 'Communication & Engagement',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
      skills: [
        'Strategic Communication',
        'Community Outreach',
        'Audience Development',
        'Public Speaking',
        'Relationship Building',
      ],
    },
    {
      title: 'Marketing & Digital',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
      skills: [
        'Marketing Strategy',
        'Social Media Management',
        'Content Creation',
        'Data Analysis',
        'Brand Development',
      ],
    },
    {
      title: 'Technical Proficiency',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      skills: [
        'Microsoft Office Suite',
        'Google Workspace',
        'Project Management Tools',
        'Database Management',
        'AI & Prompt Engineering',
      ],
    },
  ];

  return (
    <section id="skills" className="section-container bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Skills & Competencies
        </h2>
        <p className="text-center text-text-light text-lg mb-12 max-w-3xl mx-auto">
          A comprehensive skill set combining creative expertise with operational excellence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
