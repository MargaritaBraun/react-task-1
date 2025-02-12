import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyInputTop from '../../src/topComponents/MyInputTop'; // Проверьте, что путь правильный

describe('111 Тестирование MyInputTop', () => {
  describe('222 Тестирование базовых свойств MyInputTop', () => {
    const inputTestId = 'test-search-input';
    const inputValue = 'sea';
    const onChange = vi.fn();
    let input: HTMLInputElement;

    beforeEach(() => {
      render(<MyInputTop value={inputValue} onChange={onChange} data-testid={inputTestId} />);
      input = screen.getByTestId(inputTestId);
    });

    test('Проверка, что MyInputTop отображается без ошибок', () => {
      expect(input).toBeInTheDocument(); // Проверяем, что элемент найден
      expect(input.value).toBe(inputValue); // Проверяем, что значение корректное
    });
  });
});

describe('negative myInput', () => {
  const inputTestId = 'test-search-input';
    const inputValue = ['1', '2', '3'];
    const onChange = vi.fn();
    // let input: HTMLInputElement;
  it('check throw error', () => {
    expect(() => {
      render(<MyInputTop value={inputValue} onChange={onChange} data-testid={inputTestId} />);
    }).toThrow();
  })
  it('check throw error type', () => {
    expect(() => {
      render(<MyInputTop value={inputValue} onChange={onChange} data-testid={inputTestId} />);
      // expectTypeOf(inputValue).toBe('string');
      expectTypeOf(inputValue).toEqualTypeOf<string>(); // проверка на тип данных
    }).toThrow();
  })
 })

// // import '@testing-library/jest-dom';
// import { beforeEach, describe, expect, test, vi } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import MyInputTop from '../../src/topComponents/MyInputTop';
// // import React from 'react';

// describe('Тестирование MyInputTop', () => {
//   describe('Тестирование базовых свойств MyInputTop', () => {
//     const inputTestId = 'test-search-input';
//     const inputValue = 'sea';
//     const onChange = vi.fn();
//     let input: HTMLInputElement;

//     beforeEach(() => {
//       render(<MyInputTop value={inputValue} onChange={onChange} data-testid={inputTestId} />);
//       input = screen.getByTestId(inputTestId);
//     });

//     test('Проверка, что MyInputTop отображается без ошибок', () => {
//         expect(input).toBeInTheDocument(); // Теперь должно работать
//         expect(input.value).toBe(inputValue);
//     });
//   });
// });


// import { beforeEach, describe, expect, test, vi } from 'vitest';
// import {render, screen} from '@testing-library/react';
// import MyInputTop from '../../src/topComponents/MyInputTop';
// import React from 'react';
// import '@testing-library/jest-dom';
// describe('Тестирование MyInputTop', () => {
//   describe('Тестирование базовых свойств MyInputTop', () => { 
//     const inputTestId = 'test-search-input';
//     const inputValue = 'sea';
//     const onChange = vi.fn();
//     let input: HTMLInputElement;
//     beforeEach(() => {
//       render(<MyInputTop data-testing-id={inputTestId} value={inputValue} onChange={onChange} />)
//       input = screen.getByTestId(inputTestId)
//     })
//     test('Проверка, что MyInputTop отображается без ошибок', () => {
//       // expect(input.value).toBe(inputValue)
//       // expect(element).toBeInTheDocument(); // Используем матчеры
//         expect(input).toBeInTheDocument();

//     })
// })
//   })



// import React from 'react';
// import { useState } from 'react';

// interface MyInputProps {
//   onChange: (value: string) => void;
//   value: string;
// }

// const MyInputTop = ({ value, onChange }: MyInputProps): ReactNode => {
//   const [addvalue, setValue] = useState(value);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     setValue(newValue);
//     onChange(newValue);
//   };
//   return (
//     <label className="search-label">
//       <input
//         type="text"
//         placeholder="Search"
//         className="search-input"
//         value={addvalue}
//         onChange={handleChange}
//       />
//     </label>
//   );
// };

// export default MyInputTop;
