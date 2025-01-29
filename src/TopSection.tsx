import { Component } from 'react';
import MyInput from './topComponents/inputTop';
import ButtonForSearch from './topComponents/search-btn';
import './css/search.css';

interface TopSectionProps {
    onInputChange: (value: string) => void;
    onButtonClick: () => void;
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
        <h1>Top Section</h1>
        <MyInput onChange={this.props.onInputChange} /> {/* Передаем onChange как пропс */}
        <ButtonForSearch onClick={this.props.onButtonClick} /> {/* Передаем onChange как пропс */}
      </div>
    );
  }
}

export default TopSection;
