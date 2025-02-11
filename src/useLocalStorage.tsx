import { useState, useEffect } from 'react';
import BookInterface from './MainComponents/types/booksType';

interface GetServedParams {
  data: BookInterface[];
  valueSearch: string;
  page: number;
}

const useLocalStorage = (): GetServedParams => {
  const [data, setData] = useState<BookInterface[]>([]);
  const [valueSearch, setValueSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const savedData = window.localStorage.getItem('searchResults');
    const savedValueSearch = window.localStorage.getItem('searchValue');
    const nowPage = window.localStorage.getItem('page');

    setData(savedData ? JSON.parse(savedData) : []);
    setValueSearch(savedValueSearch || '');
    setPage(nowPage ? Number(nowPage) : 1);
  }, []);

  return { data, valueSearch, page };
};

export default useLocalStorage;
