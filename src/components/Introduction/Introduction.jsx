import React from 'react';
import './Introduction.scss';
import introPicture from '../../assets/man-laptop-v1.svg';
import { Button } from '../Button/Button';

export const Introduction = () => (
  <section className="intro app__intro">
    <h2 className="intro__title">
      Let&apos;s get acquainted
    </h2>
    <div className="intro__content">
      <img
        src={introPicture}
        alt="man with laptop"
        className="intro__img"
      />
      <div className="intro__description">
        <h4 className="intro__heading">
          I am cool frontend developer
        </h4>
        <p className="intro__paragraph">
          We will evaluate how clean your approach to writing CSS and
          Javascript code is. You can use any CSS and Javascript 3rd
          part libraries without any restriction.
        </p>
        <p className="intro__paragraph">
          If 3rd part css/javascript libraries are added to the project
          via bower/npm/yarn you will get bonus points. If you use any task
          runner (gulp/webpack) you will bonus points as well. Slice service
          directory page PSD into HTML5/CSS3.
        </p>
        <Button title="Sign up now" isFlat />
      </div>
    </div>
  </section>
);
