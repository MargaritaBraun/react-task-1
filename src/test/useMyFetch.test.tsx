import { beforeAll, beforeEach, describe, expect, Mock, it, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import useMyFetch from '../src/useMyFetch';

describe('useMyFetch', () => {
  const testValueOfSearch: string = 'var1';
  const testLocalpage: number = 3;

  beforeAll(() => {
    global.fetch = vi.fn();
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('должен успешно получать данные', async () => {
    const mockResponse = {
      docs: [
        { title: 'Test Book', author_name: ['David Linch'] },
        { title: 'Wear Book', author_name: ['Margaret Green'] },
      ],
      numFound: 2,
    };

    (fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockResponse),
    });

    const { result } = renderHook(() =>
      useMyFetch({
        valueOfSearch: testValueOfSearch,
        localpage: testLocalpage,
      })
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual(mockResponse.docs);
      expect(result.current.totalResults).toBe(mockResponse.numFound);
    });
  });

  it('должен устанавливать ошибку при неудачном fetch', async () => {
    (fetch as Mock).mockResolvedValueOnce({ ok: false });

    const { result } = renderHook(() =>
      useMyFetch({
        valueOfSearch: testValueOfSearch,
        localpage: testLocalpage,
      })
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeDefined();
      expect(result.current.data).toBeNull();
    });
  });

  it('должен обрабатывать исключения', async () => {
    (fetch as Mock).mockImplementationOnce(() => {
      throw new Error('Fetch error');
    });

    const { result } = renderHook(() =>
      useMyFetch({
        valueOfSearch: testValueOfSearch,
        localpage: testLocalpage,
      })
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe('Fetch error');
    });
  });
});
