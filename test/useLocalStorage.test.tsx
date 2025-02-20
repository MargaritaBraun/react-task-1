import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import useLocalStorage from '../src/useLocalStorage';
import { renderHook } from '@testing-library/react';

describe('useLocalStorage test', () => {
  beforeAll(() => {
    global.localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      clear: vi.fn(),
      removeItem: vi.fn(),
    };
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('должны возвращать ключи', () => {
    const mockData = JSON.stringify([
      { title: 'Test Book', author_name: ['David Linch'] },
      { title: 'Wear Book', author_name: ['Margaret Green'] },
    ]);
    const mockValueSearch = 'town';
    const mockPage = '3';

    (localStorage.getItem as Mock)
      .mockReturnValueOnce(mockData)
      .mockReturnValueOnce(mockValueSearch)
      .mockReturnValueOnce(mockPage);

    const { result } = renderHook(() => useLocalStorage());

    expect(result.current.data).toEqual([
      { title: 'Test Book', author_name: ['David Linch'] },
      { title: 'Wear Book', author_name: ['Margaret Green'] },
    ]);
    expect(result.current.valueSearch).toBe('town');
    expect(result.current.page).toBe(3);
  });
});
