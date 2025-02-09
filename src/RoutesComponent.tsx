import { createBrowserRouter } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import ErrorPage from './ErrorPage';

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
  
//   const RoutesComponent = () => {
//     return <RouterProvider router={router} />;
//   };
  
  export default RoutesComponent;
// const RoutesComponent = () => {
//   return (
//       <Routes>
//           <Route path="/" element={<App />}>
              
//       {/* <Route path="/" element={<div>Welcome to the Home Page</div>} /> */}
//       <Route path="nodata" element={<NoDataContainer />} />
//       <Route path="about" element={<AboutContainer />} />
//           </Route>
//       <Route path="*" element={<ErrorPage />} /> {/* Обработчик ошибок */}
//     </Routes>
//   );
// };

// export default RoutesComponent;