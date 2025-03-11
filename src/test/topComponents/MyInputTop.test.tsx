import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyInputTop from '../../src/topComponents/MyInputTop';

describe('Тестирование MyInputTop', () => {
  describe('Тестирование базовых свойств MyInputTop', () => {
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

describe('img myInput', () => {
  const inputTestId = 'test-search-input';
  const inputValue = 'New';
  const onChange = vi.fn();

  it('check imgElement', () => {
    expect(() => {
      render(
        <MyInputTop
          value={inputValue}
          onChange={onChange}
          data-testid={inputTestId}
        />
      );
      const imgElement = screen.getByAltText(`book Find Svg logo`);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveClass('logo book-find-svg');
    });
  });
});
