import { Component } from 'react';
import ButtonForClearLocalStorage from './localStorageBtn';
import ButtonErrorOpen from './createErrorBtn';

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
      </div>
    );
  }
}

export default FooterSection;
