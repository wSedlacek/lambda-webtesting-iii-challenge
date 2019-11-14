import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('renders without crashing', () => {
  const { baseElement } = render(<Dashboard />);
  expect(baseElement).toBeTruthy();
});

test('shows display', () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText(/unlocked/i)).toBeInTheDocument();
  expect(getByText(/open/i)).toBeInTheDocument();
});

test('shows controls', async () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText(/lock gate/i)).toBeInTheDocument();
  expect(getByText(/close gate/i)).toBeInTheDocument();
});
