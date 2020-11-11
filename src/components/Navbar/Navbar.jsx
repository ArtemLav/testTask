import React from 'react';
import './Navbar.scss';

export const Navbar = () => (
  <nav className="header__nav nav">
    <ul className="nav__list">
      <li className="nav__item">
        <a
          href="#registration-form"
          className="nav__link text-decoration-none"
        >
          About me
        </a>
      </li>
      <li className="nav__item">
        <a
          href="#registration-form"
          className="nav__link text-decoration-none"
        >
          Relationships
        </a>
      </li>
      <li className="nav__item">
        <a
          href="#registration-form"
          className="nav__link text-decoration-none"
        >
          Requirements
        </a>
      </li>
      <li className="nav__item">
        <a
          href="#registration-form"
          className="nav__link text-decoration-none"
        >
          Users
        </a>
      </li>
      <li className="nav__item">
        <a
          href="#registration-form"
          className="nav__link text-decoration-none"
        >
          Sign up
        </a>
      </li>
    </ul>
  </nav>
);
