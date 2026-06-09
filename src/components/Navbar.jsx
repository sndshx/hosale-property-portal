import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <div className="nav__container">
        <div className="nav__logo">
          <NavLink to="/" onClick={closeMenu}>Hosale<span>.</span></NavLink>
        </div>
        <div className="nav__menu__btn" onClick={toggleMenu}>
          <i className={isOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
        </div>
        <ul className={`nav__links${isOpen ? ' open' : ''}`} onClick={closeMenu}>
          <li><NavLink to="/" end>HOME</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <li><NavLink to="/properties">PROPERTIES</NavLink></li>
          <li><NavLink to="/blog">BLOG</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
          <li className="nav__auth__li">
            <NavLink to="/login" className="nav__login__btn">
              <i className="ri-user-line"></i> Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

