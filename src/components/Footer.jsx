const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Statement', id: 'statement' },
    { label: 'Experience', id: 'experience' },
    { label: 'Performance', id: 'performance' },
    { label: 'Projects', id: 'portfolio' },
    { label: 'Reviews', id: 'acclaim' },
    { label: 'Expertise', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Brand */}
            <div>
              <button
                onClick={scrollToTop}
                className="text-2xl font-serif font-bold mb-4 hover:text-accent transition-colors"
              >
                Cassandra Stokes-Wylie
              </button>
              <p className="text-gray-300 leading-relaxed">
                Actor | Literary Manager | Theatre Administrator
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:cstokeswylie@gmail.com"
                    className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    cstokeswylie@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:8017502670"
                    className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    801.750.2670
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/cassandra-stokes-wylie-8a311a362/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-gray-300">
              © {currentYear} Cassandra Stokes-Wylie. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
