import { Component } from 'react';

interface LikesProps {
  initialLikes: number;
}

interface MyInputState {
  likes: number;
}

class Likes extends Component<LikesProps, MyInputState> {
  constructor(props: LikesProps) {
    super(props);
    this.state = { likes: props.initialLikes }; // Инициализация состояния likes из пропсов
  }

  // Метод для увеличения likes
  plusLikes = () => {
    this.setState((prevState) => ({ likes: prevState.likes + 1 }));
  };

  // Метод для уменьшения likes
  minusLikes = () => {
    this.setState((prevState) => ({ likes: prevState.likes - 1 }));
  };

  render() {
    return (
      <div>
        <h2>{this.state.likes}</h2>
        <button onClick={this.plusLikes}>Increment</button>
        <button onClick={this.minusLikes}>Decrement</button>
      </div>
    );
  }
}

export default Likes;