import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import MyForm from './MyForm';

test('renders learn react h1', () => {
  render(<MyForm />);
  const tagValue = screen.getByText(/Hello/i);
  expect(tagValue).toBeInTheDocument();
  const pValue = screen.getByText(/Enter your name/i);
  expect(pValue).toBeInTheDocument();
  //const tField = screen.getByRole('text');
  const tField = screen.getByRole('textbox');
  expect(tField).toBeInTheDocument();

});
