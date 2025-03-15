// import { useRouteError } from 'react-router-dom';
import Layout from '../components/Layout';
const ErrorPage = () => {
  // const error = useRouteError();

  // if (error instanceof Error) {
  //   return (
  //     <div id="error-page">
  //       <h1>Oops!</h1>
  //       <p>Sorry, an unexpected error has occurred:</p>
  //       <p>{error.message}</p>
  //     </div>
  //   );
  // }

  return (
    // <div id="error-page">
    <Layout>
      <h1>Oops!</h1>
      <p>Sorry, something went wrong.</p>
      {/* // </div> */}
    </Layout>
  );
};

export default ErrorPage;

// // import React from "react";
// import { useRouteError } from 'react-router-dom';

//  function ErrorPage() {
//    const error = useRouteError();
//    console.error(error);

//    return (
//      <div id="error-page">
//        <h1>Oops!</h1>
//        <p>Sorry, an unexpected error has occurred.</p>
//      </div>
//    );
//  }

// export default ErrorPage;
