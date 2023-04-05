import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ChildCalculator from '../components/ChildCalculator';

it('test button render', () => {
  const obj = ['1', '2', '3', '+'];
  const cName = 'calculator-button ';
  const tree = renderer.create(<ChildCalculator label={obj[0]} handleClick={() => handleClick(obj[0])} />).toJSON();

  render(<ChildCalculator label={obj[0]} handleClick={() => handleClick(obj[0])} />);
  const button = screen.getByRole('button');
  expect(button.innerHTML).toBe(obj[0]);

  expect(button.className).toBe(cName);
  expect(button.id).toBeFalsy();
  expect(tree).toMatchSnapshot();
});
