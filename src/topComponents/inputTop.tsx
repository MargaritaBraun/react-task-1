import { Component } from 'react';

interface MyInputProps {
  onChange: (value: string) => void; // Определяем тип для пропса onChange
  value: string;
}

// interface MyInputState {
//   value: string;
// }

class MyInput extends Component<MyInputProps> {
// class MyInput extends Component<MyInputProps, MyInputState> {
  // constructor(props: MyInputProps) {
  //   super(props);
  //   this.state = { value: '' }; // Инициализация состояния
  // }

  // componentDidMount() {
  //   this.loadValueFromLocalStorage(); // Загружаем значение из локального хранилища при монтировании
  // }

  // loadValueFromLocalStorage() {
  //   const storedValue = localStorage.getItem('searchValue');
  //   if (storedValue) {
  //     this.setState({ value: storedValue });
  //     this.props.onChange(storedValue); // Вызываем onChange с загруженным значением
  //   }
  // }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    this.setState({ value: newValue });
    this.props.onChange(newValue); // Вызываем функцию обратного вызова с новым значением
  };

  // setValueOnInput = (newValue: string): void => {
  //   this.setState({ value: newValue });
  // }

  // deleteValueOnInput = (newValue: string): void => {
  //   this.setState({ value: newValue });
  // }

  // clearInput = () => {
  //   this.setState({ value: '' });
  //   this.props.onChange(''); // Вызываем onChange с пустым значением
  //   // localStorage.removeItem('searchValue'); // Удаляем значение из локального хранилища
  // };

  // setValueOnInput = (newValue: string): void => {
  //   this.setState({ value: newValue });
  //   this.props.onChange(newValue); // Вызываем onChange с новым значением
  //   // localStorage.setItem('searchValue', newValue); // Сохраняем значение в локальное хранилище
  // };
  render() {
    return (
      <label className="search-label">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={this.props.value}
          onChange={this.handleChange} // Используем метод для обработки изменения
        />
      </label>
    );
  }
}

export default MyInput;
