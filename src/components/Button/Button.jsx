import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Button = ({ title, onClick, isFlat, type }) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    className={classnames('button', {
      button_flat: isFlat,
    })}
    onClick={onClick}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isFlat: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  isFlat: false,
  type: 'button',
};
