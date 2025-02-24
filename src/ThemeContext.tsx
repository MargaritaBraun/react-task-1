import { createContext, ReactNode, useState } from 'react';
// , ReactNode, useState
// const ThemeContext = createContext('light');
const ThemeContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(['light', () => {}]);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>('light');

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
