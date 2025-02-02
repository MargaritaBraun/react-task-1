import { Component } from 'react';

interface btnCreateErrorInterface {
  onClick: (value: string) => void;
}

class ButtonForError extends Component<btnCreateErrorInterface> {
  constructor(props: btnCreateErrorInterface) {
    super(props);
  }

  onErrorOpen = () => {
    this.props.onClick('Error in module ButtonForError');
  };
  render() {
    return (
      <button
        type="button"
        className="btn error-button"
        onClick={this.onErrorOpen}
      >
        Error
      </button>
    );
  }
}

export default ButtonForError;
