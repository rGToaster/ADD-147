import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React components with props', () => {
  render(<App />);
  const titleElement = screen.getByText(/Final Project/i);
  expect(titleElement).toBeInTheDocument();

  const authorElement = screen.getByText(/Anthony Cervantes/i);
  expect(authorElement).toBeInTheDocument();
});
