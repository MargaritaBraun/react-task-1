import { Component } from 'react';

interface MyInputProps {
  onChange: (value: string) => void; // Определяем тип для пропса onChange
}

interface MyInputState {
  value: string;
}

class MyInput extends Component<MyInputProps, MyInputState> {
  constructor(props: MyInputProps) {
    super(props);
    this.state = { value: '' }; // Инициализация состояния
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    this.setState({ value: newValue });
    this.props.onChange(newValue); // Вызываем функцию обратного вызова с новым значением
  };

  render() {
    return (
      <label className="search-label">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={this.state.value}
          onChange={this.handleChange} // Используем метод для обработки изменения
        />
      </label>
    );
  }
}

export default MyInput;
