import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};

const services = [
  {
    id: 1,
    img: '/assets/service-1.png',
    step: '01',
    title: 'Evaluate Property',
    description:
      "Get a detailed assessment of your property's market value and potential. Our experts ensure you have the right insights to make informed decisions.",
  },
  {
    id: 2,
    img: '/assets/service-2.png',
    step: '02',
    title: 'Meet Your Agent',
    description:
      'Connect with a professional real estate agent who will guide you every step of the way. Personalized support makes your journey effortless.',
  },
  {
    id: 3,
    img: '/assets/service-3.png',
    step: '03',
    title: 'Close The Deal',
    description:
      'Complete your transaction with confidence and ease. We ensure a smooth process so you can secure your dream property without hassle.',
  },
];

const Service = () => {
  useEffect(() => {
    ScrollReveal().reveal('.service__card', {
      ...scrollRevealOption,
      interval: 200,
    });
  }, []);

  return (
    <section className="service">
      <div className="section__container service__container" id="service">
        <h2 className="section__header">How It Works</h2>
        <div className="service__grid">
          {services.map((service) => (
            <div className="service__card" key={service.id}>
              <span className="service__step">{service.step}</span>
              <img src={service.img} alt={service.title} />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
