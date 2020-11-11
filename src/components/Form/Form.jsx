import React, { useState, useEffect } from 'react';
import './Form.scss';
import { getPositions } from '../../api/api';
import { Button } from '../Button/Button';

export const Form = () => {
  const [positions, setPositions] = useState([]);
  const [image, setImage] = useState(null);

  const handleUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    getPositions().then(result => setPositions(result));
  }, []);

  return (
    <form
      id="registration-form"
      className="form"
    >
      <div className="form-group">
        <label htmlFor="name" className="form__label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form__label">Your email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form__label">Phone number</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="+380 XX XXX XX XX"
        />
        <small className="input__helper">
          Enter a phone number in international format
        </small>
      </div>
      <div className="form__radio">
        {positions.map(position => (
          <div className="form-check" key={position.id}>
            <input
              className="form-check-input"
              type="radio"
              name="position"
              id={position.name}
              value={position.name}
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
