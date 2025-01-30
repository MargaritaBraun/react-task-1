import { Component } from 'react';
import ButtonForClearLocalStorage from './localStorageBtn';
import ButtonErrorOpen from './createErrorBtn';
// import MyInput from './inputTop';
// import '../css/search.css';
// import bookFindSvg from '../assets/book-education-find-svgrepo-com.svg';

interface FooterSectionInter {
  onClearLocalStori: () => void;
  onError: () => void;
}

class FooterSection extends Component<FooterSectionInter> {
  handleButtonClick = () => {
    console.log('Button clicked');
    this.props.onClearLocalStori();
  };

  handleButtonError = () => {
    console.log('Button clicked');
    this.props.onError();
  };

  render() {
    return (
      <div className="footer-section">
        <ButtonForClearLocalStorage onClick={this.handleButtonClick} />
        <ButtonErrorOpen onClick={this.handleButtonError} />
        {/* <div className='head-block'>
        <h1>You can find a book</h1>
        <a href="https://openlibrary.org/dev/docs/api/search" target="_blank" rel="noopener">
          <img src={bookFindSvg} className="logo book-find-svg" alt="book Find Svg logo" />
        </a>
        </div> */}
        {/* <MyInput onChange={this.props.onInputChange} />{' '} */}
        {/* Передаем onChange как пропс */}
        {/* <ButtonForSearch onClick={this.props.onButtonClick} />{' '} */}
        {/* Передаем onChange как пропс */}
      </div>
    );
  }
}

export default FooterSection;
