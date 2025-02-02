import { Component } from 'react';

interface MyInputProps {
  onChange: (value: string) => void;
  value: string;
}

class MyInput extends Component<MyInputProps> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  };

  render() {
    return (
      <label className="search-label">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default MyInput;
