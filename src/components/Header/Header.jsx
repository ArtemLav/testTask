import React from 'react';
import logo from '../../assets/favicon-32x32.png';
import { Navbar } from '../Navbar/Navbar';
import './Header.scss';

export const Header = () => (
  <header className="header app__header">
    <div className="header__logo-container">
      <img
        className="header__logo"
        src={logo}
        alt="test logo"
      />
      <h2 className="header__title">
        testtask
      </h2>
    </div>

    <Navbar />
  </header>
);
