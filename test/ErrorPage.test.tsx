import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useRouteError } from 'react-router-dom';
import ErrorPage from '../src/ErrorPage';
import React from 'react';

vi.mock('react-router-dom', () => ({
  useRouteError: vi.fn(),
}));

describe('ErrorPage', () => {
  it('отображает сообщение об ошибке', () => {
    useRouteError.mockReturnValue(new Error('Test error'));

    render(<ErrorPage />);

    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Sorry, an unexpected error has occurred./i)
    ).toBeInTheDocument();
  });
});
