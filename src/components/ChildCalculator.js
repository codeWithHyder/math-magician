import React from 'react';

function ChildCalculator() {
  return (
    <div className="app-containerchild">
      <button type="button" id="ac" className="ac">AC</button>
      <button type="button" id="plusminus" className="plusminus">+/-</button>
      <button type="button" id="percent" className="percent">%</button>
      <button type="button" id="division" className="operator">&divide;</button>
      <button type="button" id="digit7" className="digit">7</button>
      <button type="button" id="digit8" className="digit">8</button>
      <button type="button" id="digit9" className="digit">9</button>
      <button type="button" id="multi" className="operator">&times;</button>
      <button type="button" id="digit4" className="digit">4</button>
      <button type="button" id="digit5" className="digit">5</button>
      <button type="button" id="digit6" className="digit">6</button>
      <button type="button" id="minus" className="operator">-</button>
      <button type="button" id="digit1" className="digit">1</button>
      <button type="button" id="digit2" className="digit">2</button>
      <button type="button" id="digit3" className="digit">3</button>
      <button type="button" id="plus" className="operator">+</button>
      <button type="button" id="digit0" className="digit0">0</button>
      <button type="button" id="decimalpt" className="decimalpt">.</button>
      <button type="button" id="equal" className="operator">=</button>

    </div>
  );
}

export default ChildCalculator;
