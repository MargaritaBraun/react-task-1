import React, { ReactNode, Component } from 'react';
import './css/App.css';
import Header from './topComponents/TopSection';
// import RenderBooksInterface from './MainComponents/resultMain';

import DataFetcher from './DataFetcher';
import FooterSection from './foooter/Footer';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  state = {
    searchValue: '',
    searchResults: [],
    initResp: true,
    error: null,
    // hasStoredData: false, // Новый флаг для отслеживания наличия данных
  };
  dataFetcherRef = React.createRef<DataFetcher>();

  componentDidMount() {
    this.getLocalStorageData();
  }

  handleInputChange = (value: string) => {
    // this.setState({ searchValue: value });
    this.setState({ searchValue: value });
    console.log('value', value);
  };

  handleButtonClick = () => {
    console.log('Button clicked, search value:', this.state.searchValue);
    // initResp: true
    // this.setState({ initResp: false });
    // this.dataFetcherRef.current?.fetchData();
    this.setState({ initResp: false }, () => {
      this.dataFetcherRef.current?.fetchData(); // Вызов fetchData после обновления состояния
    });
  };

  getLocalStorageData() {
    const searchResults = localStorage.getItem('searchResults');
    const searchValue = localStorage.getItem('searchValue');
    if (searchResults) {
      this.setState({
        searchResults: JSON.parse(searchResults),
        // hasStoredData: true, // Устанавливаем флаг, если данные есть
      });
      this.setState({ initResp: false });
    }
    if (searchValue) {
      this.setState({ searchValue: JSON.parse(searchValue) });
    }
  }

  onupdateClearLocalStori = () => {
    console.log('For Clearning LocalStorage and delete Error');
    this.setState({ searchValue: '', searchResults: [] });
    this.setState({ initResp: true });
    this.setState({ error: null });
    // this.dataFetcherRef.current?.fetchData();
    // this.dataFetcherRef.current?.resetData();
  };

  openToHorror = () => {
    console.log('HOrrroooo rr ');
    // localStorage.setItem('searchResults', JSON.stringify(null));
    // this.dataFetcherRef.current?.fetchData(); 
    // this.setState({ searchValue: value });
    this.setState({ searchValue: {aaanull: 934930-5} }, () => {
      this.dataFetcherRef.current?.fetchData(); // Вызов fetchData после обновления состояния
    });

    // try {
    //   // Ваш код, который может выбрасывать ошибку
    //   throw new Error('Я сломался!'); // Это выбросит ошибку
    // } catch (error) {
    //   console.error('Ошибка поймана:', error);
    //   this.setState({ hasError: true }); // Устанавливаем состояние ошибки
    // }
    throw new Error('This is Terrible'); // выбрасываем ошибку
    // const errorMessage = 'This is Terrible';
    // console.error(errorMessage);
    // this.setState({ error: errorMessage }); // Устанавливаем состояние ошибки
    // const errorMessage = 'This is Terrible';
    // console.error(errorMessage); // Логирование ошибки
    // this.setState({ error: errorMessage }); // Установка состояния ошибки
    // return throw Error
  };
  render(): ReactNode {
    // const { searchValue, searchResults } = this.state;
    // const showDataFetcher = searchValue !== '' || searchResults.length > 0;
    // const { error, initResp, searchValue } = this.state;
    return (
      // <>
      <ErrorBoundary>
        <Header
          onInputChange={this.handleInputChange}
          onButtonClick={this.handleButtonClick}
          searchValue={this.state.searchValue} // Передаем значение инпута
        />
        {!this.state.initResp && typeof this.state.searchValue === 'string' ? (
            <DataFetcher
              ref={this.dataFetcherRef}
            searchValue={this.state.searchValue}
            onError={this.openToHorror} // Передаем функцию для обработки ошибок
            />
          ) : (
            <div className="no-data-message">
              <p className="text">
                Нет сохраненных данных. Пожалуйста, выполните поиск.
              </p>
            </div>
          )}
          {/* <FooterSection
            onClearLocalStori={this.onupdateClearLocalStori}
            onError={this.openToHorror}
          /> */}

        {/* {error ? (
          <div className="error-message">
            <h1>{error}</h1>
          </div>
        ) : !initResp ? (
          <DataFetcher
            ref={this.dataFetcherRef}
            searchValue={searchValue}
            onError={this.openToHorror} // Передаем функцию для обработки ошибок
          />
        ) : (
          <div className="no-data-message">
            <p className="text">
              Нет сохраненных данных. Пожалуйста, выполните поиск.
            </p>
          </div>
        )} */}
        <FooterSection
          onClearLocalStori={this.onupdateClearLocalStori}
          onError={this.openToHorror}
        />
      </ErrorBoundary>
      // </>
    );
  }
}

export default App;

// import { ReactNode } from 'react';
// import { Component } from 'react';
// import reactLogo from './assets/react.svg';
// import './css/App.css';
// import Header from './topComponents/TopSection';
// // import Paginations from './MainComponents/page';
// import RenderBooksInterface from './MainComponents/resultMain';

// import DataFetcher from './DataFetcher';

// class App extends Component {
//   state = {
//     searchValue: '',
//     searchResults: [],
//     // page: 1,
//     // resultsPerPage: 10,
//   };

//   componentDidMount() {
//     this.getLocalStorageData();
//   }

//   handleInputChange = (value: string) => {
//     this.setState({ searchValue: value });
//   };

//   handleButtonClick = async () => {
//     console.log('Button clicked');
//     // await this.createresponse();
//   };

//   // strToResponce = (value: string): string => {
//   //   const arrWords = value.trim().split(' ');

//   //   if (arrWords.length === 1) {
//   //     return arrWords[0];
//   //   } else if (arrWords.length > 1) {
//   //     return arrWords.join('+');
//   //   } else {
//   //     return '';
//   //   }
//   // };

//   // createresponse = async () => {
//   //   const url = 'https://openlibrary.org/search.json?';
//   //   const titleString = 'title=';
//   //   const titleParamentes = this.strToResponce(this.state.searchValue);
//   //   console.log('titleParamentes', titleParamentes);
//   //   const response = await fetch(
//   //     `${url}${titleString}${titleParamentes}&page=2`
//   //   );
//   //   const data = await response.json();
//   //   console.log(data);
//   //   localStorage.setItem('searchResults', JSON.stringify(data.docs));
//   //   localStorage.setItem('searchValue', JSON.stringify(this.state.searchValue));
//   //   this.setState({ searchResults: data.docs || [], page: 1 }); // Сохраняем результаты
//   // };

//   getLocalStorageData() {
//     const searchResults = localStorage.getItem('searchResults');
//     const searchValue = localStorage.getItem('searchValue');
//     if (searchResults) {
//       this.setState({ searchResults: JSON.parse(searchResults) });
//     }
//     if (searchValue) {
//       this.setState({ searchValue: JSON.parse(searchValue) });
//     }
//     // this.render();
//   }

//   // handlePageChange = (newPage: number) => {
//   //   this.setState({ page: newPage });
//   // }

//   render(): ReactNode {
//     // const { searchResults, page, resultsPerPage } = this.state;
//     // const indexOfLastResult = page * resultsPerPage;
//     // const indexOfFirstResult = indexOfLastResult - resultsPerPage;
//     // const currentResults = searchResults.slice(
//     //   indexOfFirstResult,
//     //   indexOfLastResult
//     // )
//     return (
//       <>
//         <Header
//           onInputChange={this.handleInputChange}
//           onButtonClick={this.handleButtonClick}
//         />
//         <a href="https://vitejs.dev" target="_blank" rel="noopener">
//           Hallod djg klfm
//         </a>
//         <a href="https://react.dev" target="_blank" rel="noopener">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//         {/* <Paginations
//           currentPage={page}
//           onPageChange={this.handlePageChange}
//           totalResults={searchResults.length}
//           resultsPerPage={resultsPerPage}
//         /> */}
//         {/* {this.state.page } */}
//         <DataFetcher {searchValue} >
//         <RenderBooksInterface results={this.state.searchResults} />
//         </DataFetcher>
//         {/* <RenderBooksInterface results={currentResults} /> */}
//       </>
//     );
//   }
// }

// export default App;
