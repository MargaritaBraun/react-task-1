import { beforeEach, describe, expect, it, vi } from 'vitest';
// fireEvent,
import { render, screen } from '@testing-library/react';
import TopSection from '../../src/topComponents/TopSection';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('проверка на наличие TopSection', () => {
  const testonInputChange = vi.fn();
  const testonClick = vi.fn();
  const testsearchValue: string = 'Word';

  beforeEach(() => {
    render(
      <TopSection
        onInputChange={testonInputChange}
        onClick={testonClick}
        searchValue={testsearchValue}
      />
    );
  });

  it('должен отображать заголовок', () => {
    const heading: HTMLHeadingElement =
      screen.getByText(/you can find a book/i);
    expect(heading).toBeInTheDocument();
  });

  it('должен отображать MyInput c правильным значением', () => {
    const input: HTMLInputElement = screen.getByRole('textbox');
    expect(input).toHaveValue(testsearchValue);
  });

  // it('eer', async () => {
  //     // const input = screen.getByTestId('test-search-input');
  //     const input: HTMLInputElement = screen.getByRole('textbox');
  //     await userEvent.type(input, 'v2')
  //     expect(testonInputChange).toBeCalledWith('v')
  //     expect(testonInputChange).toBeCalledWith('2')
  // })

  it('должен вызывать onInputChange при вводе текста', async () => {
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'v2');
    // console.log('input', input)
    expect(testonInputChange).toHaveBeenCalledTimes(2);
    expect(testonInputChange).toHaveBeenCalledWith('Wordv');
    expect(testonInputChange).toHaveBeenCalledWith('Wordv2');
  });

  it('должен вызывать onClick при нажатии на кнопку', async () => {
    const button = screen.getByRole('button', { name: /search/i }); // замените на фактическое название кнопки
    await userEvent.click(button);
    expect(testonClick).toHaveBeenCalled();
  });

  // it('должен вызывать onInputChange при изменении ввода', () => {
  //     const input: HTMLInputElement = screen.getByRole('textbox');
  //     fireEvent.change(input, { target: { value: 'lord' } })
  //     expect(testonInputChange).toHaveBeenCalledWith('lord');
  // })
});
