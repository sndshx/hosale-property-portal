import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

const scrollRevealOption = { distance: '50px', origin: 'bottom', duration: 1000 };

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.subscribe .section__header', { ...scrollRevealOption });
    sr.reveal('.subscribe form', { ...scrollRevealOption, delay: 500 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <section className="subscribe" id="contact">
      <h2 className="section__header">
        Subscribe<br />Our Newsletter
      </h2>
      {submitted ? (
        <p style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--accent)', fontWeight: 700, fontSize: '1.1rem', animation: 'fadeInUp 0.5s ease both' }}>
          <i className="ri-checkbox-circle-fill" style={{ marginRight: 8 }}></i>
          Thank you! You're subscribed.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="btn" type="submit">Subscribe</button>
        </form>
      )}
    </section>
  );
};

export default Subscribe;
