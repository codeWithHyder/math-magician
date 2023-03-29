import React from 'react';
import PropTypes from 'prop-types';

function ChildCalculator({ label, onClick }) {
  const isWide = label === '0';
  return (

    <button
      type="button"
      className={`calculator-button ${isWide ? 'wide' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>

  );
}

ChildCalculator.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChildCalculator;
