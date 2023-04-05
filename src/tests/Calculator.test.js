import { render, screen, queryByAttribute } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

const getById = queryByAttribute.bind(null, 'id');

it('test Calculator component rendering', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  const dom = render(<Calculator />);
  const buttons = screen.getAllByRole('button');
  const value = getById(dom.container, 'bottom-value');
  expect(buttons).toHaveLength(19);
  expect(value?.textContent).toBe('0'); // use optional chaining operator to check for null
  expect(tree).toMatchSnapshot();
});
