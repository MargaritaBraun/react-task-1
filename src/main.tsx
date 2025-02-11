import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import RoutesComponent from './RoutesComponent';
import './css/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={RoutesComponent} />
  </StrictMode>
);
