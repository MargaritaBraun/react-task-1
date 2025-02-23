import { MemoryRouter } from 'react-router-dom';
import Pagination from '../../src/MainComponents/Pagination';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

const mockhandlePageChange = vi.fn();
describe('pagination tests', () => {
    afterEach(() => {
        vi.clearAllMocks();
      });
  it('renders pagination', () => {
    const { container } = render(
      <MemoryRouter>
            <Pagination currentPage={1} allResults={100} handlePageChange={ mockhandlePageChange} />
      </MemoryRouter>
    );
      screen.debug(container);
    expect(container.querySelector('.pagination')).toBeInTheDocument();
  });

  it('renders pagination', () => {
    const { container } = render(
      <MemoryRouter>
            <Pagination currentPage={2} allResults={100} handlePageChange={ mockhandlePageChange} />
      </MemoryRouter>
      );
      
    //   screen.debug(container);
      expect(container.querySelector('.pagination')).toBeInTheDocument();
  });
    
  it('проверка страницы 1 из 3', () => {

    render(
      <MemoryRouter>
        <Pagination currentPage={1} allResults={30} handlePageChange={mockhandlePageChange} />
      </MemoryRouter>
    );

    const leftButton = screen.getByRole('button', { name: /left Arrow/i });
    expect(leftButton).toBeDisabled();

    const rightButton = screen.getByRole('button', { name: /right Arrow/i });
    expect(rightButton).toBeEnabled();
  });
    
  it('проверка на кнопки', () => {
    render(
      <MemoryRouter>
        <Pagination currentPage={2} allResults={30} handlePageChange={mockhandlePageChange} />
      </MemoryRouter>
    );

    const leftButton = screen.getByRole('button', { name: /left Arrow/i });
    leftButton.click();

    expect(mockhandlePageChange).toHaveBeenCalledWith(1);

    const rightButton = screen.getByRole('button', { name: /right Arrow/i });
    rightButton.click();

    expect(mockhandlePageChange).toHaveBeenCalledWith(3);
  });

  it('как работает последняя страница', () => {
    render(
      <MemoryRouter>
        <Pagination currentPage={3} allResults={30} handlePageChange={mockhandlePageChange} />
      </MemoryRouter>
    );

    const rightButton = screen.getByRole('button', { name: /right Arrow/i });
    expect(rightButton).toBeDisabled();
  });
});