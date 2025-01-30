// import React, { Component } from 'react';
import { Component } from 'react';
import BookInterface from './types/booksType';
import Card from './CardView';

interface RenderBooksInterface {
  results: BookInterface[];
}

class RenderBooks extends Component<RenderBooksInterface> {
  render() {
    const { results } = this.props;
    console.log('this.props', this.props);

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
  }
}

export default RenderBooks;

//   <div key={item.key}>{item.title}</div> // Замените 'key' и 'title' на актуальные поля из вашего API

// class DataFetcher extends Component {
//   constructor(props: string) {
//     super(props);
//     this.state = {
//       data: null,
//       loading: true,
//       error: null,
//     };
//   }

//   strToResponce = (value: string): string => {
//     const arrWords = value.trim().split(' ');

//     if (arrWords.length === 1) {
//       return arrWords[0];
//     } else if (arrWords.length > 1) {
//       return arrWords.join('+');
//     } else {
//       return '';
//     }
//   };
//   createresponse = async () => {
//     const url = 'https://openlibrary.org/search.json?';
//     const titleString = 'title=';
//     const titleParamentes = this.strToResponce(this.props.searchValue);
//     console.log('titleParamentes', titleParamentes);
//     // const url = 'https://stapi.co/api/v1/rest/bookCollection/search';
//     const response = await fetch(
//       `${url}${titleString}${titleParamentes}&page=2`
//     );
//     const data = await response.json();
//     console.log(data);
//     localStorage.setItem('searchResults', JSON.stringify(data));
//     this.setState({ searchResults: data });
//   };

//   async componentDidMount() {
//     try {
//       const url = 'https://openlibrary.org/search.json?';
//       const titleString = 'title=';
//       const titleParamentes = this.strToResponce(this.props.searchValue);
//       const response = await fetch(
//         `${url}${titleString}${titleParamentes}&page=2`
//       );
//       const data = await response.json();
//       this.setState({ data, loading: false });
//     } catch (error) {
//       this.setState({ error, loading: false });
//     }
//   }

//   render() {
//     const { data, loading, error } = this.state;

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     if (error) {
//       return <div>Error: {error.message}</div>;
//     }

//     return (
//       <div>
//         {data.map((item) => (
//           <div key={item.id}>{item.name}</div>
//         ))}
//       </div>
//     );
//   }
// }

// export default DataFetcher;
