import { beforeAll, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
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

  it('должен инициализировать значения по умолчанию, если данные отсутствуют', () => {
    (localStorage.getItem as Mock).mockReturnValueOnce(null);
    (localStorage.getItem as Mock).mockReturnValueOnce(null);
    (localStorage.getItem as Mock).mockReturnValueOnce(null);

    const { result } = renderHook(() => useLocalStorage());

    expect(result.current.data).toEqual([]);
    expect(result.current.valueSearch).toBe('');
    expect(result.current.page).toBe(1);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'searchResults',
      JSON.stringify([])
    );
    expect(localStorage.setItem).toHaveBeenCalledWith('searchValue', '');
    expect(localStorage.setItem).toHaveBeenCalledWith('page', '1');
  });

  it('должен вызывать localStorage.getItem с правильными ключами', () => {
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

    renderHook(() => useLocalStorage());

    expect(localStorage.getItem).toHaveBeenCalledWith('searchResults');
    expect(localStorage.getItem).toHaveBeenCalledWith('searchValue');
    expect(localStorage.getItem).toHaveBeenCalledWith('page');
  });

  it('должен возвращать правильные типы данных', () => {
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

    expect(typeof result.current.data).toBe('object');
    expect(Array.isArray(result.current.data)).toBe(true);
    expect(typeof result.current.valueSearch).toBe('string');
    expect(typeof result.current.page).toBe('number');
  });
});
