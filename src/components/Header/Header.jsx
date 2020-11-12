import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import burger from '../../assets/menu icon.svg';
import { Navbar } from '../Navbar/Navbar';
import './Header.scss';

const navLinks = ['About me', 'Relationships', 'Requirements',
  'Users', 'Sign up'];

const navLinksWithId = navLinks.map((link, index) => ({
  name: link,
  id: index + 1,
}));

const navLinksMobile = ['About me', 'Relationships',
  'Users', 'Sign up', 'Terms and Conditions', 'How it works',
  'Partnership', 'Help', 'Leave Testimonial', 'Contact Us',
  'Articles', 'Our News', 'Testimonials', 'Licenses', 'Privacy policy'];

const navLinksMobileWithId = navLinksMobile.map((link, index) => ({
  name: link,
  id: index + 1,
}));

export const Header = () => {
  const [currentNav, setCurrentNav] = useState([navLinksWithId]);
  const [screenWidth, setScreenWidht] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
  }, []);

  useEffect(() => {
    if (screenWidth < 769) {
      setCurrentNav(navLinksMobileWithId);
    } else {
      setCurrentNav(navLinksWithId);
    }
  }, [screenWidth]);

  const updateWindowWidth = () => {
    setScreenWidht(window.innerWidth);
  };

  return (
    <header className="header app__header">
      <div className="header__logo-container">
        <img
          className="header__logo"
          src={logo}
          alt="test logo"
        />
      </div>

      <label
        className="header__burger"
        htmlFor="menu-checker"
      >
        <img
          src={burger}
          alt="menu button"
        />
      </label>
      <input
        type="checkbox"
        id="menu-checker"
        className="header__checkbox"
      />

      <Navbar currentNav={currentNav} />
    </header>
  );
};
