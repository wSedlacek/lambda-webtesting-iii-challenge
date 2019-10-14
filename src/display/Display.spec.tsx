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

test('shows open when opened', async () => {
  const { findByText } = render(<Display />);
  expect(await findByText(/open/i)).toBeInTheDocument();
});

test('shows locked when locked', async () => {
  const { findByText } = render(<Display closed locked />);
  expect(await findByText(/locked/i)).toBeInTheDocument();
});

test('shows unlocked when unlocked', async () => {
  const { findByText } = render(<Display closed />);
  expect(await findByText(/unlocked/i)).toBeInTheDocument();
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
