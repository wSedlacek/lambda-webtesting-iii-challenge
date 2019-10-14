import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('renders without crashing', () => {
  const { baseElement } = render(<Display closed locked />);
  expect(baseElement).toBeTruthy();
});

test('shows closed when closed', async () => {
  const { findByText } = render(<Display closed />);
  expect(await findByText(/closed/i)).toBeInTheDocument();
});

test('shows open when opened', () => {
  const { getByText } = render(<Display />);
  expect(getByText(/open/i)).toBeInTheDocument();
});

test('shows locked when locked', () => {
  const { getByText } = render(<Display closed locked />);
  expect(getByText(/locked/i)).toBeInTheDocument();
});

test('shows unlocked when unlocked', () => {
  const { getByText } = render(<Display closed />);
  expect(getByText(/unlocked/i)).toBeInTheDocument();
});

test('when `closed` use the `red-led` class', () => {
  const { baseElement } = render(<Display closed />);
  const element = baseElement.querySelector('.red-led');
  expect(element).toBeTruthy();
});

test('when `locked` use the `red-led` class', () => {
  const { baseElement } = render(<Display locked />);
  const element = baseElement.querySelector('.red-led');
  expect(element).toBeTruthy();
});

test('when `unlocked` use the `green-led` class', () => {
  const { baseElement } = render(<Display closed />);
  const element = baseElement.querySelector('.green-led');
  expect(element).toBeTruthy();
});

test('when `open` use the `green-led` class', () => {
  const { baseElement } = render(<Display locked />);
  const element = baseElement.querySelector('.green-led');
  expect(element).toBeTruthy();
});
