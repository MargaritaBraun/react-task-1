import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './ErrorPage';
import SearchContainer from './SearchContainer';

const NoDataContainer = () => {
  return (
    <div className="no-data-container">
      <p className="no-data-text">No data available</p>
    </div>
  );
};

const AboutContainer = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>Something about us</p>
      <p>La - la - la</p>
    </div>
  );
};

const RoutesComponent = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'search',
        element: <SearchContainer />,
        children: [
          {
            path: 'query=:query/page=:page?', // Убедитесь, что маршруты правильно настроены
            element: <SearchContainer />,
          },
          // {
          //   path: 'query=:query',
          //   element: <SearchContainer />,
          // },
        ],
      },
      {
        path: 'nodata',
        element: <NoDataContainer />,
      },
      {
        path: 'about',
        element: <AboutContainer />,
      },
    ],
  },
]);

export default RoutesComponent;
