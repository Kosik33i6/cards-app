import React from 'react';

import PropTypes from 'prop-types';

import styles from './Input.scss';

const Input = ({placeholder, value, change, name}) => {
  return (
    <input className={styles.component}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={change}
      name={name}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.func,
  name: PropTypes.string,
};

export default Input;
