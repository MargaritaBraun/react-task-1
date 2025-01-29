import { Component } from 'react';
import BookInterface from './types/booksType';
interface MainProps {
  results: Array<BookInterface> | null; // Замените 'any' на более конкретный тип, если возможно
}
class ResultMain extends Component<MainProps> {
  // constructor() {
  //     super();
  // }

  render() {
    const { results } = this.props;
    return (
      <div className="main">
        <h2>Search Results</h2>
        <p className="result"></p>
        {results ? (
          <ul>
            {results.map((doc: BookInterface) => (
              <li key={doc.title}>{doc.author_name.join(', ')}</li> // Замените 'key' и 'title' на актуальные поля из вашего API
            ))}
            {/* {results.docs.map((doc: any) => (
              <li key={doc.key}>{doc.title}</li> // Замените 'key' и 'title' на актуальные поля из вашего API
            ))} */}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );
  }
}

export default ResultMain;
