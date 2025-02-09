// import React from 'react';
// import { Component } from 'react';
// import { useState } from 'react';
interface btnSearchProps {
  onButtonClick: () => void;
}
const ButtonForSearch = ({ onButtonClick }: btnSearchProps): JSX.Element => {
  // const ButtonForSearch = (): JSX.Element => {
  // const [value, setValue] = useState('');
  // const handleClick = () => {
  //   onButtonClick();
  // }
  return (
          <button
            type="submit"
            className="search-btn"
            onClick={onButtonClick}
          >
            Search
          </button>
        );
}

export default ButtonForSearch;
// class ButtonForSearch extends Component<btnSearchProps> {
//   constructor(props: btnSearchProps) {
//     super(props);
//   }

//   render() {
//     return (
//       <button
//         type="submit"
//         className="search-btn"
//         onClick={() => this.props.onClick('')}
//       >
//         Search
//       </button>
//     );
//   }
// }
