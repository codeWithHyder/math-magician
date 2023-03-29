import React from 'react';
import ChildCalculator from './ChildCalculator';

function Calculator() {
  return (
    <div className="app-container">
      <input type="text" id="calsc" className="calsc" value={0} readOnly />
      <ChildCalculator />
    </div>
  );
}

export default Calculator;
