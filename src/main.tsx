import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import RoutesComponent from './RoutesComponent';
import './css/index.css';
// import ThemeContext from './ThemeContext';
// const [theme, setTheme] = useState('light');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ThemeContext.Provider value={[theme, setTheme]}> */}
      <RouterProvider router={RoutesComponent} />
      {/* </ThemeContext.Provider> */}
  </StrictMode>
);
