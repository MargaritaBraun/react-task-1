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

  const data: BookInterface[] = savedData ? JSON.parse(savedData) : [];
  const valueSearch: string = savedValueSearch || '';
  const page: number = nowPage ? Number(nowPage) : 1;

  return { data, valueSearch, page };
};

export default useLocalStorage;