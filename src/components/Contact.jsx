const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: 'Email',
      value: 'cstokeswylie@gmail.com',
      link: 'mailto:cstokeswylie@gmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: 'Phone',
      value: '801.750.2670',
      link: 'tel:8017502670',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/cassandra-stokes-wylie-8a311a362',
      link: 'https://www.linkedin.com/in/cassandra-stokes-wylie-8a311a362/',
    },
  ];

  return (
    <section id="contact" className="section-container bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>

        {/* Availability Status */}
        <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-accent mb-2">Currently Available</h3>
          <p className="text-text">
            Seeking associate producer, production management, literary management, development, grant writing, or arts administration roles at mission-driven theater organizations.
            <span className="block mt-1">Open to full-time, consulting, or interim positions.</span>
          </p>
        </div>

        <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto">
          Let's connect about opportunities in theatre, creative collaborations, or how I can support your organization.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group bg-background-dark hover:bg-accent/5 border-2 border-transparent hover:border-accent rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-text-light mb-1">{info.label}</div>
                  <div className="text-primary group-hover:text-accent font-medium transition-colors break-all">
                    {info.value}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
            Let's Work Together
          </h3>
          <p className="text-text-light mb-8">
            Whether you're hiring for a literary manager role, need consulting on season programming,
            or want to discuss new play development—I'd love to hear from you.
          </p>
          <a href="mailto:cstokeswylie@gmail.com" className="btn-primary inline-block">
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
