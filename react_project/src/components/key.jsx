import React from 'react';
import PropTypes from 'prop-types';
// import './key.css'; // You can add custom styling for the key component here

const Key = ({ value, onClick }) => {
  return (
    <button className="key" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

Key.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function onClick(value) {
  console.log(value);
}
export default Key;
