import React from 'react';
import './Info.scss';
import { Button } from '../Button/Button';

export const Info = () => (
  <section className="info app__info">
    <h2 className="info__title">
      test assignment for front end developer position
    </h2>
    <p className="info__description">
      We kindly remind you that your test assignment should be submitted
      as a link to github/bitbucket repository. Please be patient, we consider
      and respond to every application that meets minimum requirements.
      We look forward to your submission. Good luck! The photo has to scale
      in the banner area on different screens.
    </p>
    <Button title="Sign up now" />
  </section>
);
