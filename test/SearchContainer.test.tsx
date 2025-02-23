import { MemoryRouter } from 'react-router-dom';
import SearchContainer from '../src/SearchContainer';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

describe('SearchContainer tests', () => {
  it('renders loading state', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchContainer />
      </MemoryRouter>
    );

    expect(container.querySelector('.load-container')).toBeInTheDocument();
  });
});