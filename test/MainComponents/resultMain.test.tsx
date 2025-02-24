import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import store from '../../src/Redux/Redux-main';
import RenderBooks from '../../src/MainComponents/resultMain';
import mockData from './mockDataBook';
import React from 'react';

vi.mock('react-redux', async () => {
  const actual = await vi.importActual('react-redux');
  return {
    ...actual,
    useSelector: vi.fn(),
  };
});

describe('RenderBooks Component', () => {
  it('should display MiniBookCollection when countBookSelect > 0', () => {
    const mockState = {
      length: 5,
    };

    useSelector.mockImplementation((selector) => selector(mockState));

    render(
      <Provider store={store}>
        <RenderBooks results={mockData} />
      </Provider>
    );

    expect(screen.getByTestId('mini-book-collection')).toBeInTheDocument();
  });

  it('should not display MiniBookCollection when countBookSelect === 0', () => {
    const mockState = {
      length: 0,
    };

    useSelector.mockImplementation((selector) => selector(mockState));

    render(
      <Provider store={store}>
        <RenderBooks results={mockData} />
      </Provider>
    );

    expect(
      screen.queryByTestId('mini-book-collection')
    ).not.toBeInTheDocument();
  });
});
