import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useRouteError } from 'react-router-dom';
import ErrorPage from '../src/ErrorPage';
import React from 'react';

// Мокаем useRouteError
vi.mock('react-router-dom', () => ({
  useRouteError: vi.fn(),
}));

describe('ErrorPage', () => {
  it('отображает сообщение об ошибке', () => {
    // Мокаем возвращаемое значение useRouteError
    useRouteError.mockReturnValue(new Error('Test error'));

    render(<ErrorPage />);

    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Sorry, an unexpected error has occurred./i)
    ).toBeInTheDocument();
  });

  //   it('логирует ошибку в консоль', () => {
  //     const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

  //     // Мокаем возвращаемое значение useRouteError
  //     const testError = new Error('Test error');
  //     useRouteError.mockReturnValue(testError);

  //     render(<ErrorPage />);

  //     expect(consoleSpy).toHaveBeenCalledWith(testError);

  //     consoleSpy.mockRestore();
  //   });
});
