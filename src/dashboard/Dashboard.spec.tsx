import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('renders without crashing', () => {
  const { baseElement } = render(<Dashboard />);
  expect(baseElement).toBeTruthy();
});

test('shows display', async () => {
  const { findByText } = render(<Dashboard />);
  expect(await findByText(/unlocked/i)).toBeInTheDocument();
  expect(await findByText(/open/i)).toBeInTheDocument();
});

test('shows controls', async () => {
  const { findByText } = render(<Dashboard />);
  expect(await findByText(/lock gate/i)).toBeInTheDocument();
  expect(await findByText(/close gate/i)).toBeInTheDocument();
});
