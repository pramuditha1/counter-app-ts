import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

// Mock the window.alert function
const mockAlert = jest.fn();
window.alert = mockAlert;

test('it should render counter component without any errors', () => {
  render(<Counter />);
});

test('initial count value should be 0', () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
})

test('it should increase counter to 1 when Increase button is clicked', () => {
  render(<Counter />);
  const IncreaseButtonElement = screen.getByText(/Increase/i);
  fireEvent.click(IncreaseButtonElement);
  const countElement = screen.getByText(/Count: 1/i);
  expect(countElement).toBeInTheDocument();
})

test('it should decrease counter to 0 when Decrease button is clicked', () => {
  render(<Counter />);
  //click increment button once
  const IncreaseButtonElement = screen.getByText(/Increase/i);
  fireEvent.click(IncreaseButtonElement);

  //click decrement button once should decrease count by 1
  const DecreaseButtonElement = screen.getByText(/Decrease/i);
  fireEvent.click(DecreaseButtonElement);
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
})

test('it should reset the count to 0 when Reset button is clicked and if current count equals to 1', () => {
  render(<Counter />);
  const IncreaseButtonElement = screen.getByText(/Increase/i);
  const resetButton = screen.getByText(/Reset/i);

  //click increment button twice
  fireEvent.click(IncreaseButtonElement);
  fireEvent.click(IncreaseButtonElement);
  expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();

  //click reset button
  fireEvent.click(resetButton);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test('it should show an alert when count exceeds 10 on increase', () => {
  render(<Counter />);
  const IncreaseButtonElement = screen.getByText(/Increase/i);

  // Increase the count to more than 10
  fireEvent.click(IncreaseButtonElement);
  fireEvent.click(IncreaseButtonElement);
  fireEvent.click(IncreaseButtonElement);
  fireEvent.click(IncreaseButtonElement);
  fireEvent.click(IncreaseButtonElement);
  fireEvent.click(IncreaseButtonElement);
  fireEvent.click(IncreaseButtonElement);
  fireEvent.click(IncreaseButtonElement);
  fireEvent.click(IncreaseButtonElement);
  fireEvent.click(IncreaseButtonElement);
  fireEvent.click(IncreaseButtonElement);

  // Alert should be poped up when count goes above 10
  expect(mockAlert).toHaveBeenCalledWith("Count can't be more than 10");
});

test('it should show an alert when count goes below 0 on decrease', () => {
  render(<Counter />);
  const DecreaseButtonElement = screen.getByText(/Decrease/i);

  //  Initial count is 0 and click Decrease the count
  fireEvent.click(DecreaseButtonElement);

  // Alert should be poped up when count goes below 0
  expect(mockAlert).toHaveBeenCalledWith("Count can't be less than 0");
});
