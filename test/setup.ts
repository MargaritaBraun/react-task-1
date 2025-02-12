// expect,
// import { expect, afterEach } from 'vitest';
// import { cleanup } from '@testing-library/react';
// import matchers from '@testing-library/jest-dom/matchers';
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
// Расширяем expect метод с методами из react-testing-library
// expect.extend(matchers);

// Запускаем очистку после каждого теста
afterEach(() => {
  cleanup();
});

// import { expect } from 'vitest';
// import '@testing-library/jest-dom'; // Импортируем матчеры

// // runs a cleanup after each test case (e.g. clearing jsdom)
// afterEach(() => {
//   cleanup();
// });