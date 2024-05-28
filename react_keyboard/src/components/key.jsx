import React from 'react';
import PropTypes from 'prop-types';
import './key.css';

const Key = ({ value, onClick }) => {

  const content = ['shift', 'enter', 'delete'].includes(value) ? 
  <img src={'./img/'+value+'.png'} alt={value} /> 
  : value;


  return (
    <button className="key" id={value} 
    onClick={() => onClick(value)}>
      {content}    </button>
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
