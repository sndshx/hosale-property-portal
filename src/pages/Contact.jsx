import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import PageHero from '../components/PageHero';
import PageTransition from '../components/PageTransition';

const contactDetails = [
  {
    icon: 'ri-phone-fill',
    title: 'Call Us',
    value: '+1 (555) 019-2834',
  },
  {
    icon: 'ri-mail-fill',
    title: 'Email Us',
    value: 'support@hosale.com',
  },
  {
    icon: 'ri-map-pin-fill',
    title: 'Visit Office',
    value: '784 Coastal Drive, Suite 100, Miami, FL',
  },
  {
    icon: 'ri-time-fill',
    title: 'Working Hours',
    value: 'Mon - Sat: 9:00 AM - 6:00 PM',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.contact__info__card', {
      distance: '40px',
      origin: 'left',
      duration: 900,
      interval: 120,
    });
    sr.reveal('.contact__form', {
      distance: '40px',
      origin: 'right',
      duration: 1000,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 8000);
    }
  };

  return (
    <PageTransition>
      <PageHero
        title="Contact Us"
        subtitle="Have questions or ready to find your next home? Reach out to us anytime."
        breadcrumb="Contact"
      />

      <div className="section__container">
        <div className="contact__grid">
          {/* Info cards */}
          <div className="contact__info">
            {contactDetails.map((detail) => (
              <div className="contact__info__card" key={detail.title}>
                <div className="contact__info__icon">
                  <i className={detail.icon}></i>
                </div>
                <div className="contact__info__text">
                  <h5>{detail.title}</h5>
                  <p>{detail.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="contact__form">
            <h3>Send A Message</h3>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', animation: 'fadeInUp 0.5s ease both' }}>
                <i className="ri-checkbox-circle-fill" style={{ fontSize: '4rem', color: 'var(--accent)', display: 'block', marginBottom: '1.5rem' }}></i>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Thank You!</h4>
                <p style={{ color: 'var(--text-light)', fontWeight: 500 }}>
                  Your message has been successfully sent. An agent will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form__row">
                  <div className="form__group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form__row">
                  <div className="form__group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="form__group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Buy Property">Buying a Property</option>
                      <option value="Sell Property">Selling a Property</option>
                      <option value="Rent Property">Renting a Property</option>
                    </select>
                  </div>
                </div>

                <div className="form__group" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements or questions..."
                    required
                  ></textarea>
                </div>

                <button className="btn" type="submit" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
