import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '..//src/ErrorBoundary';
import React from 'react';

describe('проверка на работы ErrorBoundary', () => {
  const TestCrowdedDiv = () => {
    throw Error('Terrible');
  };

  beforeEach(() => {
    render(
      <ErrorBoundary>
        <TestCrowdedDiv />
      </ErrorBoundary>
    );
  });

  it('должен отображать заголовок при ошибке', () => {
    const heading: HTMLHeadingElement =
      screen.getByText(/что-то пошло не так./i);
    expect(heading).toBeInTheDocument();
  });

  // it('check throw error', () => {
  //     expect(() => {
  //       render(
  //         <ErrorBoundary>
  //         <TestCrowdedDiv/>
  //     </ErrorBoundary>
  //       );
  //     }).toThrow();
  //   });
});
