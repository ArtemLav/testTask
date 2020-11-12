import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, position, email, phone, photo }) => (
  <div className="cheerful-users__user user">
    <img
      src={photo}
      className="user__photo"
      alt={name}
      title={name}
    />
    <h4 className="user__name" title={name}>
      {name}
    </h4>
    <p className="user__position" title={position}>
      {position}
    </p>
    <p className="user__email" title={email}>
      {email}
    </p>
    <p className="user__phone">
      {phone}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  photo: PropTypes.string,
};

User.defaultProps = {
  name: '',
  position: '',
  email: '',
  phone: '',
  photo: '',
};
