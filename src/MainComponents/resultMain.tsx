// import { Component } from 'react';
import BookInterface from './types/booksType';
import Card from './CardView';

interface RenderBooksInterface {
  results: BookInterface[];
}

const RenderBooks =({ results }: RenderBooksInterface)  => {
  // return (
    // const { results } = this.props;
    // console.log('this.props', this.props);

    if (results.length === 0) {
      return (
        <div className="result-empty">
          <p className="result-empty-text">No data available.</p>
        </div>
      );
    }

    return (
      <div className="result-container">
        <div className="result-controls">
          <p className="result-controls-text">Book Name</p>
          <p className="result-controls-text">Autor or autors</p>
        </div>
        {results.map((result) => {
          const { key, ...restProps } = result;
          return <Card key={key} {...restProps} />;
        })}
      </div>
    );
  // )
}

export default RenderBooks;
