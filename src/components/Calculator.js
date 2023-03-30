import React, { useState } from 'react';
import ChildCalculator from './ChildCalculator';
import calculate from '../logic/calculate';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);

    // Update the display value
    const newDisplayValue = newData.next || newData.total || '0';
    setDisplayValue(newDisplayValue);
  };

  const renderButton = (label) => (
    <ChildCalculator
      key={label}
      label={label}
      onClick={() => handleClick(label)}
    />
  );

  return (
    <div className="app-container">
      <input type="text" id="calsc" className="calsc" value={displayValue} readOnly />

      <div className="calculator-panel">
        {['AC', '+/-', '%', '÷'].map((label) => renderButton(label))}
      </div>
      <div className="calculator-panel">
        {['7', '8', '9', 'x'].map((label) => renderButton(label))}
      </div>
      <div className="calculator-panel">
        {['4', '5', '6', '-'].map((label) => renderButton(label))}
      </div>
      <div className="calculator-panel">
        {['1', '2', '3', '+'].map((label) => renderButton(label))}
      </div>
      <div className="calculator-panel">
        {['0', '.', '='].map((label) => renderButton(label))}
      </div>

    </div>
  );
}

export default Calculator;
