import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import RoutesComponent from './RoutesComponent';
import './css/index.css';
// import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <RoutesComponent /> */}
    <RouterProvider router={RoutesComponent} />
    {/* <App /> */}
    {/* </BrowserRouter> */}
  </StrictMode>
);
