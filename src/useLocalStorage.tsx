import BookInterface from './MainComponents/types/booksType';

interface GetServedParams {
  data: BookInterface[];
  valueSearch: string;
  page: number;
}

const useLocalStorage = (): GetServedParams => {
  const savedData = window.localStorage.getItem('searchResults');
  const savedValueSearch = window.localStorage.getItem('searchValue');
  const nowPage = window.localStorage.getItem('page');

  if (!savedData) {
    window.localStorage.setItem('searchResults', JSON.stringify([]));
  }

  if (!savedValueSearch) {
    window.localStorage.setItem('searchValue', '');
  }

  if (!nowPage) {
    window.localStorage.setItem('page', '1');
  }

  const data: BookInterface[] = JSON.parse(
    window.localStorage.getItem('searchResults') || '[]'
  );
  const valueSearch: string = window.localStorage.getItem('searchValue') || '';
  const page: number = Number(window.localStorage.getItem('page')) || 1;

  return { data, valueSearch, page };
};

export default useLocalStorage;
