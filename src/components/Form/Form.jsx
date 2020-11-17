import React, { useState, useEffect } from 'react';
import './Form.scss';
import classnames from 'classnames';
import { getPositions, getToken } from '../../api/api';
import { Button } from '../Button/Button';

export const Form = () => {
  const [positions, setPositions] = useState([]);
  const [image, setImage] = useState(null);

  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
  });

  const [formFieldsErrors, setFormFieldsErrors] = useState({
    nameError: false,
    emailError: false,
    phoneError: false,
    positionError: false,
  });

  useEffect(() => {
    getPositions().then(result => setPositions(result));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields(prevFields => ({
      ...prevFields,
      [name]: value,
    }));

    setFormFieldsErrors(prevFields => ({
      ...prevFields,
      [`${name}Error`]: false,
    }));
  };

  const handleUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleNameError = () => {
    if (formFields.name.length < 3) {
      setFormFieldsErrors(prevFields => ({
        ...prevFields,
        nameError: true,
      }));
    }
  };

  const handleEmailError = () => {
    if (!formFields.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      setFormFieldsErrors(prevFields => ({
        ...prevFields,
        emailError: true,
      }));
    }
  };

  const handlePhoneError = () => {
    if (
      !formFields.phone
        .match(/^[+]{0,1}380([0-9]{9})$/g)
    ) {
      setFormFieldsErrors(prevFields => ({
        ...prevFields,
        phoneError: true,
      }));
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    const imageInput = document.querySelector('input[type="file"]');

    formData.append('position_id', formFields.position);
    formData.append('name', formFields.name);
    formData.append('email', formFields.email);
    formData.append('phone', formFields.phone);
    formData.append('photo', imageInput.files[0]);

    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST', body: formData, headers: { Token: getToken() },
    })
      .then(response => response.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
        if (data.success) {
          // eslint-disable-next-line no-console
          console.log('success');
        } else {
          // eslint-disable-next-line no-console
          console.log('server error');
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  return (
    <form
      id="registration-form"
      className="form"
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit();
      }}
    >
      <div className="form-group">
        <label htmlFor="name" className="form__label">Name</label>
        <input
          type="text"
          name="name"
          value={formFields.name}
          onChange={handleChange}
          onBlur={handleNameError}
          id="name"
          className={classnames('form-control', {
            form__input_danger: formFieldsErrors.nameError,
          })}
          placeholder="Your name"
          required
        />
        {formFieldsErrors.nameError && (
          <small className="input__helper text-danger">
            Your Name should contain at least 3 Characters
          </small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form__label">Your email</label>
        <input
          type="email"
          name="email"
          value={formFields.email}
          onChange={handleChange}
          onBlur={handleEmailError}
          id="email"
          className={classnames('form-control', {
            form__input_danger: formFieldsErrors.emailError,
          })}
          placeholder="Your name"
          required
        />
        {formFieldsErrors.emailError && (
          <small className="input__helper text-danger">
            Please enter valid email address
          </small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form__label">Phone number</label>
        <input
          type="text"
          name="phone"
          value={formFields.phone}
          onChange={handleChange}
          onBlur={handlePhoneError}
          id="phone"
          className={classnames('form-control', {
            form__input_danger: formFieldsErrors.phoneError,
          })}
          placeholder="+380 XX XXX XX XX"
          required
        />
        {formFieldsErrors.phoneError ? (
          <small className="input__helper text-danger">
            Your phone number should be &apos;+380XXXXXXXXX&apos; format
          </small>
        ) : (
          <small className="input__helper">
            Enter a phone number in international format
          </small>
        )}
      </div>
      <div className="form__radio">
        {positions.map(position => (
          <div className="form-check" key={position.id}>
            <input
              type="radio"
              value={position.id}
              onChange={handleChange}
              name="position"
              id={position.name}
              className="form-check-input"
              required
            />
            <label
              className="form-check-label form__label"
              htmlFor={position.name}
            >
              {position.name}
            </label>
          </div>
        ))}
      </div>

      {image ? (
        <img
          src={image}
          alt="Your uploaded img"
          className="form__image"
        />
      ) : (
        <label
          htmlFor="image"
          className="form__label form__image-label"
        >
          Photo
        </label>
      )
      }
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="image"
          onChange={handleUpload}
          required
        />
        <label className="custom-file-label" htmlFor="image">
          Browse
        </label>
      </div>

      <Button title="Sign up Now" type="submit" />
    </form>
  );
};
