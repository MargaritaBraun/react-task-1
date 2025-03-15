import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import EmptyContainer from '../../src/MainComponents/EmptyContainer';
import React from 'react';

describe('проверка на наличие EmptyContainer', () => {
  beforeEach(() => {
    render(<EmptyContainer />);
  });

  it('No result. Please search должен отображать заголовок', () => {
    const heading: HTMLHeadingElement = screen.getByText(
      /No result. Please search/i
    );
    expect(heading).toBeInTheDocument();
  });
});
