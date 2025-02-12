import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonForSearch from '../../src/topComponents/ButtonForSearch';

describe('ButtonForSearch testing', () => {
  const inputTestId = 'test-search-button';
  const onClick = vi.fn();

  beforeEach(() => {
    render(
      <ButtonForSearch
        onClick={onClick}
        data-testid={inputTestId}
      />
    );
  });

  test('Проверка, что onClick вызывается при клике на кнопку', () => {
    const button = screen.getByTestId(inputTestId);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});