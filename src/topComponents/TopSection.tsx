import { Component } from 'react';
import MyInput from './inputTop';
import ButtonForSearch from './search-btn';
import '../css/search.css';
import bookFindSvg from '../assets/book-education-find-svgrepo-com.svg';

interface TopSectionProps {
  onInputChange: (value: string) => void;
  onButtonClick: () => void;
  searchValue: string; // Передаем значение инпута
}

class TopSection extends Component<TopSectionProps> {
  //   handleInputChange = (value: string) => {
  //     console.log(value); // Здесь вы можете использовать значение по своему усмотрению
  //   }

  //   handleButtonClick = () => {
  //       console.log('Button clicked');
  //       this.createresponse();
  //     }

  //     createresponse = async () => {
  //         const url = 'https://openlibrary.org/search.json?';
  //         const titleString = 'title=';
  //         // const url = 'https://stapi.co/api/v1/rest/bookCollection/search';
  //         const response = await fetch(`${url}${titleString}Salvador+Dali&page=2`); //await fetch(url);
  //         const data = await response.json();
  //         console.log(data);
  //     }
  render() {
    return (
      <div className="top-section">
        <div className='head-block'>
        <h1>You can find a book</h1>
        <a href="https://openlibrary.org/dev/docs/api/search" target="_blank" rel="noopener">
          <img src={bookFindSvg} className="logo book-find-svg" alt="book Find Svg logo" />
        </a>
        </div>
        <MyInput onChange={this.props.onInputChange} value={this.props.searchValue} />{' '}
        {/* Передаем onChange как пропс */}
        <ButtonForSearch onClick={this.props.onButtonClick} />{' '}
        {/* Передаем onChange как пропс */}
      </div>
    );
  }
}

export default TopSection;
