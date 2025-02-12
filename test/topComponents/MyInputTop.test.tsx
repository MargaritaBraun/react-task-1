import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyInputTop from '../../src/topComponents/MyInputTop';

describe('111 Тестирование MyInputTop', () => {
  describe('222 Тестирование базовых свойств MyInputTop', () => {
    const inputTestId = 'test-search-input';
    const inputValue = 'sea';
    const onChange = vi.fn();
    let input: HTMLInputElement;

    beforeEach(() => {
      render(
        <MyInputTop
          value={inputValue}
          onChange={onChange}
          data-testid={inputTestId}
        />
      );
      input = screen.getByTestId(inputTestId);
    });

    test('Проверка, что MyInputTop отображается без ошибок', () => {
      expect(input).toBeInTheDocument();
      expect(input.value).toBe(inputValue);
    });
  });
});

describe('negative myInput', () => {
  const inputTestId = 'test-search-input';
  const inputValue = ['1', '2', '3'];
  const onChange = vi.fn();

  it('check throw error', () => {
    expect(() => {
      render(
        <MyInputTop
          value={inputValue}
          onChange={onChange}
          data-testid={inputTestId}
        />
      );
    }).toThrow();
  });
  it('check throw error type', () => {
    expect(() => {
      render(
        <MyInputTop
          value={inputValue}
          onChange={onChange}
          data-testid={inputTestId}
        />
      );

      expectTypeOf(inputValue).toEqualTypeOf<string>(); // проверка на тип данных
    }).toThrow();
  });
});