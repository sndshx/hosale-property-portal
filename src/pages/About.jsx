import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import PageHero from '../components/PageHero';
import PageTransition from '../components/PageTransition';

const scrollRevealOption = { distance: '40px', origin: 'bottom', duration: 900 };

const values = [
  { icon: 'ri-shield-check-line', title: 'Integrity', desc: 'We operate with complete transparency and honesty in every transaction, building trust that lasts a lifetime.' },
  { icon: 'ri-heart-line', title: 'Client First', desc: 'Your goals are our priority. We tailor every service to match your unique needs and aspirations.' },
  { icon: 'ri-award-line', title: 'Excellence', desc: 'We consistently deliver exceptional results through market expertise and dedicated professionalism.' },
  { icon: 'ri-global-line', title: 'Innovation', desc: 'We leverage the latest technology and market insights to give you a competitive advantage.' },
  { icon: 'ri-team-line', title: 'Collaboration', desc: 'Our team-driven approach ensures every client benefits from a full suite of specialized expertise.' },
  { icon: 'ri-leaf-line', title: 'Sustainability', desc: 'We promote eco-friendly properties and green living practices for a better future.' },
];

const team = [
  { initials: 'JR', name: 'James Reynolds', role: 'Founder & CEO' },
  { initials: 'SM', name: 'Sarah Mitchell', role: 'Head of Sales' },
  { initials: 'DK', name: 'David Kim', role: 'Lead Architect' },
  { initials: 'AL', name: 'Amanda Lee', role: 'Client Relations' },
  { initials: 'MT', name: 'Marcus Turner', role: 'Legal Advisor' },
  { initials: 'PG', name: 'Priya Gupta', role: 'Marketing Director' },
];

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.about__mission__image', { ...scrollRevealOption, origin: 'left' });
    sr.reveal('.about__mission__content', { ...scrollRevealOption, origin: 'right' });
    sr.reveal('.value__card', { ...scrollRevealOption, interval: 150 });
    sr.reveal('.team__card', { ...scrollRevealOption, interval: 120 });
  }, []);

  return (
    <PageTransition>
      <PageHero
        title="About Hosale"
        subtitle="We've been turning real estate dreams into reality for over 20 years with passion and expertise."
        breadcrumb="About"
      />

      {/* Mission Section */}
      <div className="section__container">
        <div className="about__mission">
          <div className="about__mission__image">
            <img src="/assets/experience.png" alt="Our Mission" />
          </div>
          <div className="about__mission__content">
            <h2>Built on Trust, Driven by Results</h2>
            <p>
              Founded in 2005, Hosale has grown from a small local agency into a
              nationally recognized real estate brand. Our mission is simple: make
              property ownership accessible, transparent, and joyful for everyone.
            </p>
            <p>
              With over 550 successful transactions and 30+ industry awards, our
              track record speaks for itself. We combine deep local expertise with
              cutting-edge technology to match buyers with their perfect homes.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn">Our Properties</button>
              <button className="btn btn-outline">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="about__values">
        <div style={{ maxWidth: '1200px', margin: 'auto', padding: '0 1rem' }}>
          <h2 className="section__header">Our Core Values</h2>
          <div className="about__values__grid">
            {values.map((v) => (
              <div className="value__card" key={v.title}>
                <i className={v.icon}></i>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="section__container">
        <h2 className="section__header">Meet Our Team</h2>
        <div className="team__grid">
          {team.map((member) => (
            <div className="team__card" key={member.name}>
              <div className="team__avatar">{member.initials}</div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
