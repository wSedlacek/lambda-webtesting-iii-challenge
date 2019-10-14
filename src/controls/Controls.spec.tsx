import React from 'react';
import { render, getByText } from '@testing-library/react';

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

test("buttons' text reflect state", async () => {
  const { findByText } = render(<Controls locked closed />);

  const unlock_button = await findByText(/unlock gate/i);
  expect(unlock_button).toBeInTheDocument;

  const open_button = await findByText(/open gate/i);
  expect(open_button).toBeInTheDocument();
});

test('the closed toggle button is disabled if the gate is locked', () => {
  const { getByText } = render(<Controls locked closed />);
  const lock_button = getByText(/open gate/i) as HTMLButtonElement;
  expect(lock_button.disabled).toBeTruthy();
});

test('the locked toggle button is disabled if the gate is open', () => {
  const { getByText } = render(<Controls locked={false} closed={false} />);
  const lock_button = getByText(/lock gate/i) as HTMLButtonElement;
  expect(lock_button.disabled).toBeTruthy();
});
