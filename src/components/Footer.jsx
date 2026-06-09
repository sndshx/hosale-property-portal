import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="footer__logo">
            <Link to="/">Hosale<span style={{ color: 'var(--accent)' }}>.</span></Link>
          </div>
          <p>
            At Hosale, we make buying, selling, and investing in properties easy
            and stress-free. Let's turn your real estate goals into reality!
          </p>
          <ul className="footer__socials">
            <li><a href="#" aria-label="Facebook"><i className="ri-facebook-fill"></i></a></li>
            <li><a href="#" aria-label="Twitter"><i className="ri-twitter-fill"></i></a></li>
            <li><a href="#" aria-label="Instagram"><i className="ri-instagram-line"></i></a></li>
            <li><a href="#" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Our Company</h4>
          <ul className="footer__links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">Our Services</Link></li>
            <li><Link to="/">How It Works</Link></li>
            <li><Link to="/blog">Testimonials</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Support</h4>
          <ul className="footer__links">
            <li><Link to="/contact">FAQs</Link></li>
            <li><Link to="/properties">Property Listings</Link></li>
            <li><Link to="/blog">Buyer's Guide</Link></li>
            <li><Link to="/blog">Seller's Guide</Link></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Properties</h4>
          <div className="footer__property__detail">
            <img src="/assets/footer.jpg" alt="Sunset Heights" />
            <div>
              <h5>Sunset Heights</h5>
              <p>1256 Maple Avenue, Los Angeles</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright &copy; 2026 Sandy Frontend xx. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
