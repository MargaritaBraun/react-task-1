import { Component } from 'react';

interface btnSearchProps {
  onClick: (value: string) => void;
}

class ButtonForSearch extends Component<btnSearchProps> {
  constructor(props: btnSearchProps) {
    super(props);
  }

  render() {
    return (
      <button
        type="submit"
        className="search-btn"
        onClick={() => this.props.onClick('')}
      >
        Search
      </button>
    );
  }
}

export default ButtonForSearch;
