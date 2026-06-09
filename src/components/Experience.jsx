import { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';

const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};

const stats = [
  { value: 550, suffix: '+', label: 'Property Build' },
  { value: 30,  suffix: '+', label: 'Awards Gained' },
  { value: 20,  suffix: '+', label: 'Years Experience' },
];

const useCountUp = (target, duration = 1800, trigger) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
};

const StatItem = ({ value, suffix, label, trigger }) => {
  const count = useCountUp(value, 1800, trigger);
  return (
    <div>
      <h4>{count}{suffix}</h4>
      <p>{label}</p>
    </div>
  );
};

const Experience = () => {
  const statsRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.experience__content .section__header', { ...scrollRevealOption });
    sr.reveal('.experience__content p', { ...scrollRevealOption, delay: 300 });
    sr.reveal('.experience__btn', { ...scrollRevealOption, delay: 600 });
    sr.reveal('.experience__stats', { ...scrollRevealOption, delay: 900 });

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience">
      <div className="experience__image">
        <div className="experience__floating-card">
          <i className="ri-award-fill"></i>
          <div>
            <h5>#1 Rated</h5>
            <p>Agency in Florida</p>
          </div>
        </div>
      </div>
      <div className="experience__content">
        <h2 className="section__header">
          We Provide You<br />The Best Experience
        </h2>
        <p>
          Finding the perfect property should be an exciting and hassle-free
          journey, and we are here to make that happen. With our expert guidance,
          personalized support, and in-depth market knowledge, we ensure a smooth
          and seamless real estate experience. Whether you are buying, selling, or
          investing, we provide top-notch services, reliable assistance, and the
          best deals to help you make informed decisions.
        </p>
        <div className="experience__btn">
          <button className="btn">ALL PROPERTY</button>
        </div>
      </div>
      <div className="experience__stats" ref={statsRef}>
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} trigger={triggered} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
