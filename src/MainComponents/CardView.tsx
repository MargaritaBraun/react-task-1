import { Component } from 'react';
import BookInterface from './types/booksType';
import '../css/cards.css';

class Card extends Component {
  title: string;
  autor: string[];
  constructor(props: BookInterface) {
    super(props);
    this.title = props.title;
    this.autor = props.author_name;
  }

  render() {
    return (
      <div className="card-container">
        <h3 className="card-title">{this.title}</h3>
        {this.autor &&
          (Array.isArray(this.autor) ? (
            this.autor.map((ItemAutor, index) => (
              <p key={index} className="card-autor">
                {ItemAutor}
              </p>
            ))
          ) : (
            <p className="card-autor">{this.autor}</p>
          ))}
      </div>
    );
  }
}

export default Card;
