import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

test('Quotes rendering', () => {
  render(<Quotes />);

  const title = screen.getByTestId('quotes');

  expect(title).toBeInTheDocument();
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
