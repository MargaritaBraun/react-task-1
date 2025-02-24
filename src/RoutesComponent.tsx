import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './ErrorPage';
import SearchContainer from './SearchContainer';

export const NoDataContainer = () => {
  return (
    <div className="no-data-container">
      <p className="no-data-text">No data available</p>
    </div>
  );
};

export const AboutContainer = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>Something about us</p>
      <p>La - la - la</p>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/search',
        element: <SearchContainer />,
      },
      {
        path: '/nodata',
        element: <NoDataContainer />,
      },
    ],
  },
  {
    path: '/about',
    element: <AboutContainer />,
  },
]);

export const routes = router.routes;

const RoutesComponent = () => <RouterProvider router={router} />;

export default RoutesComponent;
