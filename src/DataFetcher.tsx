import { Component } from 'react';
import BookInterface from './MainComponents/types/booksType';
import RenderBooks from './MainComponents/resultMain';
import cocktailSvg from './assets/cocktail-svgrepo-com.svg';

interface DataFetcherProps {
  searchValue: string;
  // onError: () => void;
  onError: (errorMessage: string) => void;
}

interface DataFetcherState {
  data: BookInterface[];
  loading: boolean;
  error: string | null;
  //   initialLoad: boolean;
}

class DataFetcher extends Component<DataFetcherProps, DataFetcherState> {
  constructor(props: DataFetcherProps) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: null,
      //   initialLoad: true,
    };
  }

  strToResponce = (value: string): string => {
    console.log('trToResponce',value);
    const arrWords = value.trim().split(' ');
    return arrWords.length > 1 ? arrWords.join('+') : arrWords[0] || '';
  };

  fetchData = async () => {
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

      // Сохраняем результаты в локальное хранилище
      localStorage.setItem('searchResults', JSON.stringify(data.docs || []));
      localStorage.setItem(
        'searchValue',
        JSON.stringify(this.props.searchValue || '')
      );
    } catch (error) {
      // this.setState({ loading: false });
      // const errorMessage = (error as Error).message; // Получаем сообщение об ошибке
      console.log('в DataFetcher', error);
      // this.props.onError(errorMessage); // Передаем ошибку в родительский компонент
      this.props.onError((error as Error).message); // Передаем ошибку
    }
  }

  resetData = () => {
    // this.setState({ data: [], initialLoad: true }); // Сбрасываем данные и устанавливаем начальное состояние
    return (
      <div className="no-data-message">
        <p className="text">
          Нет сохраненных данных. Пожалуйста, выполните поиск.
        </p>
      </div>
    );
  };

  componentDidMount() {
    // Проверяем локальное хранилище при монтировании компонента
    const storedResults = localStorage.getItem('searchResults');
    if (storedResults) {
      this.setState({
        data: JSON.parse(storedResults),
        loading: false,
        // initialLoad: false,
      });
    }
  }

  //   checkInitLoad() {
  //     const storedResults = localStorage.getItem('searchResults');
  //     return storedResults !== null;
  //   }
  //   checkInitLoad() {
  //     const storedResults = localStorage.getItem('searchResults');
  //     if (storedResults) {
  //         // this.setState({ initialLoad: true });
  //         return true;
  //     } else {
  //         return false;
  //     }
  //   }
  render() {
    //   initialLoad
    const { data, loading, error } = this.state;

    //   initialLoad
    //   if (!this.checkInitLoad() && !loading) {
    // if (!localStorage.getItem('searchResults') && initialLoad) {
    //   return (
    //     <div className="no-data-message">
    //       <p className="text">
    //         Нет сохраненных данных. Пожалуйста, выполните поиск.
    //       </p>
    //     </div>
    //   );
    // }
    //   if (initialLoad) { }
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
