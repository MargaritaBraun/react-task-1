// localStorage-btn
import { Component } from 'react';

interface btnClearlocalStorage {
  onClick: (value: string) => void;
}

class ButtonForClearlocalStorage extends Component<btnClearlocalStorage> {
  constructor(props: btnClearlocalStorage) {
    super(props);
  }

  onClearLocalStorage = () => {
    localStorage.clear(); // Вызываем метод clear
    this.props.onClick('LocalStorage cleared'); // Вызываем переданный метод onClick, если это необходимо
  };
  render() {
    return (
      <button
        type="button"
        className="btn clear-localStr"
        onClick={this.onClearLocalStorage}
      >
        Clear LocalStorage
      </button>
    );
  }
}

export default ButtonForClearlocalStorage;
