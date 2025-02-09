// import React, { ReactNode, Component } from 'react';
import { useState } from 'react';
import './css/App.css';
import TopSection from './topComponents/TopSection';
// import { createBrowserRouter, Outlet } from 'react-router';
// import { createBrowserRouter, Outlet, Routes, Route } from 'react-router';
import { Outlet } from 'react-router';
// import DataFetcher from './DataFetcher';
// import FooterSection from './foooter/Footer';
import ErrorBoundary from './ErrorBoundary';
import ShowRezult from './ShowRezult';
// import ErrorPage from './ErrorPage';
// const BrokenComponent = () => {
//   throw new Error('This is Terrible');
// };



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
// ]);
const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [getValueAfterClick, setValueAfterClick] = useState('2');
  const [currentPage, setCurrentPage] = useState('1');
  // const getValueAfterClick = null;

  const handleInputChange = (value: string) => {
    setSearchValue(value);
    // console.log('Input changed, search value:', value);
  };

  const handlePageChange = () => {
    setCurrentPage(currentPage + 1);
    // console.log('Input changed, search value:', value);
  };
  const handleButtonClick = () => {
    // setSearchValue('');
    // const newValue =
    // getValueAfterClick = setValueAfterClick(searchValue);
    setValueAfterClick(searchValue);
    console.log('Button clicked, search value:', searchValue);
  };
  return (
    <ErrorBoundary>
      <TopSection
        onInputChange={handleInputChange}
        onButtonClick={handleButtonClick}
        searchValue={searchValue}
      />
      <ShowRezult valueOfSearch={getValueAfterClick} />
      <Outlet />
      <p className="text">Value {getValueAfterClick}</p>
      <p className="text">Page {currentPage}</p>
      <button onClick={handlePageChange}>Next Page</button>
    </ErrorBoundary>
  );
};


// class App extends Component {
//   state = {
//     searchValue: '',
//     searchResults: [],
//     initResp: true,
//     isError: false,
//   };

//   dataFetcherRef = React.createRef<DataFetcher>();

//   componentDidMount() {
//     this.getLocalStorageData();
//   }

//   handleInputChange = (value: string) => {
//     this.setState({ searchValue: value });
//   };

//   handleButtonClick = () => {
//     this.setState({ initResp: false }, () => {
//       this.dataFetcherRef.current?.fetchData();
//     });
//   };

//   openToHorror = () => {
//     this.setState({ isError: true });
//     throw new Error('This is Terrible');
//   };

//   getLocalStorageData() {
//     const searchResults = localStorage.getItem('searchResults');
//     const searchValue = localStorage.getItem('searchValue');
//     if (searchResults) {
//       this.setState({
//         searchResults: JSON.parse(searchResults),
//         initResp: false,
//       });
//     }
//     if (searchValue) {
//       this.setState({ searchValue: JSON.parse(searchValue) });
//     }
//   }

//   onupdateClearLocalStori = () => {
//     console.log('For Clearning LocalStorage and delete Error');
//     this.setState({ searchValue: '', searchResults: [] });
//     this.setState({ initResp: true });
//     this.setState({ isError: false });
//   };
//   render(): ReactNode {
//     const { initResp, searchValue, isError } = this.state;

//     return (
//       <ErrorBoundary>
//         <Header
//           onInputChange={this.handleInputChange}
//           onButtonClick={this.handleButtonClick}
//           searchValue={searchValue}
//         />

//         {searchValue}
//         {/* {isError ? (
//           <div className="no-data-message no-data-message-error">
//             <h1>Что-то пошло не так.</h1>
//           </div>
//         ) : !initResp && typeof searchValue === 'string' ? (
//           <DataFetcher
//             ref={this.dataFetcherRef}
//             searchValue={searchValue}
//             onError={this.openToHorror}
//           />
//         ) : (
//           <div className="no-data-message">
//             <p className="text">
//               Нет сохраненных данных. Пожалуйста, выполните поиск.
//             </p>
//           </div>
//         )} */}
//         <FooterSection
//           onClearLocalStori={this.onupdateClearLocalStori}
//           onError={this.openToHorror}
//         />
//       </ErrorBoundary>
//     );
//   }
// }

export default App;
