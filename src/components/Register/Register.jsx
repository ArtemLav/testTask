import React from 'react';
import './Register.scss';
import { Form } from '../Form/Form';

export const Register = () => (
  <section className="register app__register">
    <h2 className="register__title">
      Register to get a work
    </h2>
    <p className="register__subtitle">
      Attention! After successful registration and alert, update
      the list of users in the block from the top
    </p>
    <Form />
  </section>
);
