import { Component } from 'react';
import BookInterface from './types/booksType';
import '../css/cards.css';

// interface btnSearchProps {
//   onClick: (value: string) => void;
// }

// interface bookCollection = Book
class Card extends Component {
  title: string;
  autor: string[];
  constructor(props: BookInterface) {
    super(props);
    this.title = props.title;
    //   this.autor = props.author_name.join();
    this.autor = props.author_name;
  }

  render() {
    //   const { title } = this.props;
    return (
      <div className="card-container">
            <h3 className="card-title">{this.title}</h3>
            {this.autor && (
        Array.isArray(this.autor) ? (
          this.autor.map((ItemAutor, index) => (
            <p key={index} className="card-autor">{ItemAutor}</p>
          ))
        ) : (
          <p className="card-autor">{this.autor}</p> // Обработка случая, когда autor — строка
        )
      )}
      </div>
    );
  }
}

export default Card;
