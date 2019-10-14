import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import Controls from './Controls';

test('renders without crashing', () => {
  const { baseElement } = render(<Controls />);
  expect(baseElement).toBeTruthy();
});

test('has buttons', () => {
  const { baseElement } = render(<Controls />);
  const buttons = baseElement.querySelectorAll('button');
  expect(buttons).toBeTruthy();
});

test("buttons' text reflect state", () => {
  const { getByText } = render(<Controls locked closed />);

  const unlock_button = getByText(/unlock gate/i);
  expect(unlock_button).toBeInTheDocument();

  const open_button = getByText(/open gate/i);
  expect(open_button).toBeInTheDocument();
});

test('the closed toggle button is disabled if the gate is locked', () => {
  const { getByText } = render(<Controls locked closed />);
  const open_button = getByText(/open gate/i) as HTMLButtonElement;
  expect(open_button.disabled).toBeTruthy();
});

test('the locked toggle button is disabled if the gate is open', () => {
  const { getByText } = render(<Controls />);
  const lock_button = getByText(/lock gate/i) as HTMLButtonElement;
  expect(lock_button.disabled).toBeTruthy();
});

test('toggleLocked is called', () => {
  const toggleLockedMock = jest.fn();
  const { getByText } = render(<Controls closed toggleLocked={toggleLockedMock} />);

  const toggleLockedButton = getByText(/lock gate/i);
  fireEvent.click(toggleLockedButton);
  expect(toggleLockedMock).toHaveBeenCalledTimes(1);
});

test('toggleClosed is called', () => {
  const toggleClosedMock = jest.fn();
  const { getByText } = render(<Controls toggleClosed={toggleClosedMock} />);

  const toggleClosedButton = getByText(/close gate/i);
  fireEvent.click(toggleClosedButton);
  expect(toggleClosedMock).toHaveBeenCalledTimes(1);
});
