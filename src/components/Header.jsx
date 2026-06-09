import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.header__content h1', { ...scrollRevealOption });
    sr.reveal('header form', { ...scrollRevealOption, delay: 500 });
  }, []);

  return (
    <header id="home" ref={headerRef}>
      <div className="header__image">
        <div className="header__floating-card card-1">
          <i className="ri-home-heart-line"></i>
          <div>
            <h5>1.2k+</h5>
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="header__floating-card card-2">
          <i className="ri-shield-check-line"></i>
          <div>
            <h5>100%</h5>
            <p>Safe &amp; Secured</p>
          </div>
        </div>
      </div>
      <div className="header__content">
        <div className="header__badge">
          <i className="ri-map-pin-2-fill"></i>
          Trusted Real Estate Partner
        </div>
        <h1>Easy way to find your dream property</h1>
      </div>
      <form action="/" onSubmit={(e) => e.preventDefault()}>
        <div className="input__group">
          <label htmlFor="location">
            <i className="ri-map-pin-line"></i> Location
          </label>
          <input id="location" type="text" placeholder="City, State, ZIP..." />
        </div>
        <div className="input__group">
          <label htmlFor="propertyType">
            <i className="ri-building-line"></i> Property Type
          </label>
          <input id="propertyType" type="text" placeholder="House, Apartment..." />
        </div>
        <div className="input__group">
          <label htmlFor="price">
            <i className="ri-money-dollar-circle-line"></i> Max Price
          </label>
          <input id="price" type="text" placeholder="$500,000" />
        </div>
        <button className="btn" type="submit">
          <i className="ri-search-line"></i>
        </button>
      </form>
    </header>
  );
};

export default Header;
