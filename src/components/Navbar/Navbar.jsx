import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Navbar.scss';

export const Navbar = ({ currentNav }) => {
  const [activeLink, setActiveLink] = useState('');

  const setAsActive = (event) => {
    setActiveLink(event.target.textContent);
  };

  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        {currentNav.map(link => (
          <li className="nav__item" key={link.id}>
            <a
              href="#header"
              className={classnames('nav__link text-decoration-none', {
                nav__link_active: activeLink === link.name,
              })}
              onClick={setAsActive}
            >
              {link.name}
            </a>
            {(currentNav.length > 5
              && (link.id % 5 === 0)
              && link.id !== currentNav.length) && (
              <hr className="nav__link-separator" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  currentNav: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
