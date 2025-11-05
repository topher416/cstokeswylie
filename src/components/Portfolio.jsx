import AutoCarousel from './AutoCarousel.jsx';
import LocationTag from './LocationTag.jsx';
import YearTag from './YearTag.jsx';
import { useState } from 'react';

const Portfolio = () => {
  const imageMap = {
    'You Will Get Sick (Regional Premiere, 2024) — Assistant Director — by Noah Diaz': [
      '/images/youwillgetsick1.jpg',
      '/images/youwillgetsick2.jpg',
    ],
    'Sleeping Giant (World Premiere, 2022) — Ensemble/Multiple roles — by Steve Yockey': [
      '/images/sleepinggiant1cropped.jpg',
      '/images/sleepinggiant2cropped.jpg',
      '/images/sleepinggiant3cropped.jpg',
    ],
    'Death of a Driver (Utah Premiere, 2019) — Sarah — by Will Snider': [
      '/images/deathofadriver3cropped.jpg',
      '/images/deathofadriver5cropped.jpg',
      '/images/deathofadriver8cropped.jpg',
    ],
    'A Funny Thing Happened on the Way to the Gynecologic Oncology Unit at Memorial Sloan Kettering Cancer Center of New York City (Utah Premiere, 2018) — Karla — by Halley Feiffer': [
      '/images/funnything4cropped.jpg',
      '/images/funnything5cropped.jpg',
      '/images/funnything9cropped.jpg',
      '/images/funnything10.JPG',
    ],
    'Harbur Gate (World Premiere, 2017) — Alyson Moss — by Kathleen Cahill': [
      '/images/harburgate1cropped.jpg',
      '/images/harburgate2cropped.jpg',
      '/images/harburgate3cropped.jpg',
    ],
    'Bull Shark Attack (World Premiere, 2016) — Tanya — by Troy Deutsch': [
      '/images/bullshark1.jpg',
      '/images/bullshark2.jpg',
      '/images/bullshark3.JPG',
      '/images/slac_bullsharkattack_090416~4.jpg',
    ],
  };
  const portfolioItems = [
    {
      id: 1,
      title: 'You Will Get Sick (Regional Premiere, 2024) — Assistant Director — by Noah Diaz',
      category: 'Assistant Director',
      location: 'Salt Lake City, UT',
      year: '2024',
      description:
        'Assistant director for Noah Diaz’s lyrical meditation on illness, care, and the stories we tell to keep going. Reviews called SLAC’s staging “smartly, directly, solidly acted” and “thought-provoking,” noting how humor and existential dread coexist in the piece.',
      links: [
        { href: 'https://www.saltlakeactingcompany.org/shows-ticketing/play-archive/item/1716-you-will-get-sick' },
        { href: 'https://www.theutahreview.com/noah-diazs-you-will-get-sick-receives-smartly-directly-solidly-acted-regional-premiere-at-salt-lake-acting-company/' },
        { href: 'https://gephardtdaily.com/local/review-you-will-get-sick-at-slac-will-make-you-ponder-the-meaning-of-life-death/' },
        { href: 'https://frontrowreviewers.com/?p=22403' },
        { href: 'https://utahtheatrebloggers.com/913113/slac-provides-a-healthy-dose-of-humanity-with-you-will-get-sick' },
      ],
    },
    {
      id: 2,
      title: 'Sleeping Giant (World Premiere, 2022) — Ensemble/Multiple roles — by Steve Yockey',
      category: 'World Premiere',
      location: 'Salt Lake City, UT',
      year: '2022',
      description:
        'Steve Yockey’s surreal, darkly comic mosaic about belief and the monsters we wake. Originated multiple characters in a four-actor ensemble; the production continued SLAC’s emphasis on new-play development through readings and labs.',
      links: [
        { href: 'https://www.saltlakeactingcompany.org/2022-2023/item/1632-sleeping-giant' },
      ],
    },
    {
      id: 3,
      title: 'Death of a Driver (Utah Premiere, 2019) — Sarah — by Will Snider',
      category: 'Utah Premiere',
      location: 'Salt Lake City, UT',
      year: '2019',
      description:
        'Two-hander by Will Snider about an American engineer and her Kenyan colleague whose friendship buckles under class, politics, and power. Opened SLAC’s 49th season; reviews praised taut pacing and emotionally precise performances.',
      links: [
        { href: 'https://www.saltlakeactingcompany.org/shows-ticketing/play-archive/item/1467-death-of-a-driver' },
        { href: 'https://slco.org/zap/blog/salt-lake-acting-company-and-death-of-a-driver/' },
        { href: 'https://www.theutahreview.com/salt-lake-acting-company-opens-49th-season-with-riveting-utah-premiere-of-death-of-a-driver/' },
        { href: 'https://frontrowreviewersutah.com/?p=13521' },
        { href: 'https://dailyutahchronicle.com/2019/09/14/slacs-death-of-a-driver-confronts-the-rollercoaster-of-friendship/' },
        { href: 'https://www.abc4.com/gtu/sitting-down-with-the-actors-from-death-of-a-driver/' },
      ],
    },
    {
      id: 4,
      title: 'A Funny Thing Happened on the Way to the Gynecologic Oncology Unit at Memorial Sloan Kettering Cancer Center of New York City (Utah Premiere, 2018) — Karla — by Halley Feiffer',
      category: 'Utah Premiere',
      location: 'Salt Lake City, UT',
      year: '2018',
      description:
        'Played Karla in Halley Feiffer’s brash, big-hearted comedy about two adult children colliding beside their hospitalized mothers. SLAC’s archive compiles reviews and production details; simultaneous Tribune coverage spotlighted SLAC’s adoption of intimacy direction practices to keep artists safe during vulnerable scenes.',
      links: [
        { href: 'https://www.saltlakeactingcompany.org/shows-ticketing/play-archive/item/1389-a-funny-thing-happened-on-the-way-to-the-gynecologic-oncology-unit-at-memorial-sloan-kettering-cancer-center-of-new-york-city' },
        { href: 'https://www.sltrib.com/artsliving/2018/09/30/help-actors-feel-safe/' },
        { href: 'https://www.cityweekly.net/BuzzBlog/archives/2018/09/20/theater-review-salt-lake-acting-companys-a-funny-thing-happened' },
      ],
    },
    {
      id: 5,
      title: 'Harbur Gate (World Premiere, 2017) — Alyson Moss — by Kathleen Cahill',
      category: 'World Premiere',
      location: 'Salt Lake City, UT',
      year: '2017',
      description:
        'World premiere of Kathleen Cahill’s triptych about women in the military and the aftermath of war. Originated Alyson Moss; production developed through SLAC’s new-play pipeline and supported by an Edgerton Foundation New Play Award. Press called the staging “powerful,” highlighting stories drawn from Iraq/Afghanistan service members and MST (military sexual trauma).',
      links: [
        { href: 'https://www.saltlakeactingcompany.org/2017/item/1155-harbur-gate' },
        { href: 'http://www.sltrib.com/home/4885212-155/in-salt-lake-world-premiere-kathleen' },
        { href: 'https://saltlakemagazine.com/preview-harbur-gate-slac/' },
        { href: 'http://www.cityweekly.net/TheDailyFeed/archives/2017/02/08/salt-lake-acting-company-harbur-gate' },
        { href: 'https://saltlakemagazine.com/review-harbur-gate/' },
        { href: 'http://www.sltrib.com/entertainment/4942712-155/powerful-salt-lake-production-of-harbur' },
        { href: 'http://dailyutahchronicle.com/2017/02/14/slacs-harbur-gate-heroes-fighting-hope-review/' },
      ],
    },
    {
      id: 6,
      title: 'Bull Shark Attack (World Premiere, 2016) — Tanya — by Troy Deutsch',
      category: 'World Premiere',
      location: 'Salt Lake City, UT',
      year: '2016',
      description:
        'Originated Tanya in Troy Deutsch’s two-hander dark comedy about small-town longing, myth, and menace. The run opened SLAC’s season; coverage framed it as “Shark Week(s) at SLAC),” noting the show’s blend of physical comedy and emotional volatility.',
      links: [
        { href: 'https://www.saltlakeactingcompany.org/2017/item/1152-bull-shark-attack' },
        { href: 'https://saltlakemagazine.com/shark-weeks-slac/' },
        { href: 'http://www.cityweekly.net/TheDailyFeed/archives/2016/09/07/salt-lake-acting-company-bull-shark-attack' },
        { href: 'http://www.sltrib.com/entertainment/4295199-155/salt-lake-acting-company-world-premiere' },
        { href: 'http://www.cityweekly.net/utah/the-essential-aande-picks-for-sept-22-28/Content?oid=3467735' },
      ],
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
              {imageMap[item.title] ? (
                <AutoCarousel images={imageMap[item.title]} interval={5000} className="aspect-video" />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="relative text-5xl font-serif text-white/50">
                    {item.category.substring(0, 2)}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="text-sm font-medium text-accent mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                {(item.year || item.location) && (
                  <div className="mb-2 flex items-center gap-2">
                    {item.year && <YearTag text={item.year} />}
                    {item.location && <LocationTag text={item.location} />}
                  </div>
                )}
                <p className="text-text-light leading-relaxed mb-3">{item.description}</p>
                {item.links && item.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.links.map((l, idx) => {
                      const url = l.href;
                      let host = '';
                      try {
                        host = new URL(url).hostname.replace(/^www\./, '');
                      } catch (e) {
                        host = url;
                      }
                      return (
                        <a
                          key={idx}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white text-primary border border-background-dark text-sm hover:bg-background-dark/60 transition"
                        >
                          <span className="font-medium">{host}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
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

export default Portfolio;
