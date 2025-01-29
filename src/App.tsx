// import { ReactNode, useState } from 'react';
import { ReactNode } from 'react';
import { Component } from 'react';
import reactLogo from './assets/react.svg';
import './css/App.css';
import Header from './TopSection';
import ResultMain from './MainComponents/resultMain';

import Likes from './MainComponents/likes';
// import MyInput from './topComponents/inputTop';
// import ButtonForSearch from './topComponents/search-btn';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    searchValue: '',
    searchResults: null,
  }

  handleInputChange = (value: string) => {
    this.setState({ searchValue: value });
    // console.log(value); // Здесь вы можете использовать значение по своему усмотрению
  }

  handleButtonClick = async () => {
    await this.createresponse();
    console.log('Button clicked');
  };

  createresponse = async () => {
    const url = 'https://openlibrary.org/search.json?';
    const titleString = 'title=';
    const titleParamentes = this.state.searchValue.split(' ').join('+');
    // const url = 'https://stapi.co/api/v1/rest/bookCollection/search';
    const response = await fetch(`${url}${titleString}${titleParamentes}&page=2`); //await fetch(url);
    const data = await response.json();
    console.log(data);
    localStorage.setItem('searchResults', JSON.stringify(data));
    this.setState({ searchResults: data });
  };
  render(): ReactNode {
    return (
      <>
        <Header
          onInputChange={this.handleInputChange}
          onButtonClick={this.handleButtonClick}
        />
        {/* <Header>
          <MyInput onChange={this.handleInputChange} />{' '}
          {/* Передаем onChange как пропс */}
          {/* <ButtonForSearch onClick={this.handleButtonClick} />{' '} */}
          {/* Передаем onChange как пропс */}
          {/* </MyInput> */}
        {/* </Header> */}
        <a href="https://vitejs.dev" target="_blank" rel="noopener">
          Hallod djg klfm
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Likes initialLikes={7} />
        <ResultMain results={this.state.searchResults} />
      </>
    );
  }
  // function App() {
  // const [count, setCount] = useState(0);

  // return (
  //   <>
  //     <div>
  //       <TopSection/>
  //       <a href="https://react.dev" target="_blank" rel="noopener">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //   </>
  // );
}

export default App;
