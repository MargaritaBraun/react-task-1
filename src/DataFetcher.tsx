import { Component } from 'react';
import BookInterface from './MainComponents/types/booksType';
import RenderBooks from './MainComponents/resultMain';
import cocktailSvg from './assets/cocktail-svgrepo-com.svg';

interface DataFetcherProps {
  searchValue: string;
  onError: (errorMessage: string) => void;
}

interface DataFetcherState {
  data: BookInterface[];
  loading: boolean;
  error: string | null;
}

class DataFetcher extends Component<DataFetcherProps, DataFetcherState> {
  constructor(props: DataFetcherProps) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: null,
    };
  }

  strToResponce = (value: string): string => {
    console.log('trToResponce', value);
    const arrWords = value.trim().split(' ');
    return arrWords.length > 1 ? arrWords.join('+') : arrWords[0] || '';
  };

  fetchData = async () => {
    console.log('fetchData', this.props.searchValue);
    if (!this.props.searchValue) {
      throw new Error('Search value is empty');
    }
    this.setState({ loading: true, error: null });
    try {
      const url = 'https://openlibrary.org/search.json?';
      const titleString = 'title=';
      const titleParameters = this.strToResponce(this.props.searchValue);
      const response = await fetch(`${url}${titleString}${titleParameters}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ data: data.docs || [], loading: false });

      localStorage.setItem('searchResults', JSON.stringify(data.docs || []));
      localStorage.setItem(
        'searchValue',
        JSON.stringify(this.props.searchValue || '')
      );
    } catch (error) {
      this.props.onError((error as Error).message);
    }
  };

  resetData = () => {
    return (
      <div className="no-data-message">
        <p className="text">
          Нет сохраненных данных. Пожалуйста, выполните поиск.
        </p>
      </div>
    );
  };

  componentDidMount() {
    const storedResults = localStorage.getItem('searchResults');
    if (storedResults) {
      this.setState({
        data: JSON.parse(storedResults),
        loading: false,
      });
    }
  }
  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (
        <div className="load-container">
          <img
            src={cocktailSvg}
            alt="cocktail Svg loading data"
            className="svg-loading"
          />
        </div>
      );
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return <RenderBooks results={data} />;
  }
}

export default DataFetcher;
