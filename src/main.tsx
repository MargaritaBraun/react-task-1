import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { RouterProvider } from 'react-router';
import RoutesComponent from './RoutesComponent';
import './css/index.css';
// import ThemeContext from './ThemeContext';
// const [theme, setTheme] = useState('light');
import { Provider } from 'react-redux';
import store from './Redux/Redux-main';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <ThemeContext.Provider value={[theme, setTheme]}> */}
      {/* <RouterProvider router={RoutesComponent} /> */}
      <RoutesComponent />
      {/* </ThemeContext.Provider> */}
    </Provider>
  </StrictMode>
);
