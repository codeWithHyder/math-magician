import { render, screen, queryByAttribute } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

it('Quotes rendering', () => {
 const num= render(

    <Quotes />,

  );
  const tree = renderer
    .create(

      <Quotes />,

    )
    .toJSON();

//   const title = screen.getByText('hello');
   const value = getById(num.container, 'par');
   expect(value?.textContent).toBe('hello')
  //   const navbars = screen.getAllByRole('link');
  expect(title).toBeInTheDocument();
  //   expect(navbars).toHaveLength(3);
  expect(tree).toMatchSnapshot();
});
