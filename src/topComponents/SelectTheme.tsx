import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

function SelectTheme() {
  const [theme, setTheme] = useContext(ThemeContext);

  const switchingTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };
  // console.log(window.matchMedia('(prefers-color-scheme: light)').matches);
  return (
    <label>
      <select
        name="themehtml"
        value={theme}
        onChange={switchingTheme}
        aria-label="Select theme"
        className="select_theme_html"
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </label>
  );
}

export default SelectTheme;
