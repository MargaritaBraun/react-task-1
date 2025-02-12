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

// import { useEffect } from 'react';
// import BookInterface from './MainComponents/types/booksType';

// interface GetServedParams {
//   data: BookInterface[];
//   valueSearch: string;
//   page: number;
// }

// const useLocalStorage = (): GetServedParams => {
//   // const [data, setData] = useState<BookInterface[]>([]);
//   // const [valueSearch, setValueSearch] = useState<string>('');
//   // const [page, setPage] = useState<number>(1);

//   useEffect(() => {
//     const savedData = window.localStorage.getItem('searchResults');
//     const savedValueSearch = window.localStorage.getItem('searchValue');
//     const nowPage = window.localStorage.getItem('page');

//     // setData(savedData ? JSON.parse(savedData) : []);
//     const data = savedData ? JSON.parse(savedData) : [];
//     // setValueSearch(savedValueSearch || '');
//     const valueSearch = savedValueSearch || '';

//     // setPage(nowPage ? Number(nowPage) : 1);
//     const page = nowPage ? Number(nowPage) : 1;

//     return { data, valueSearch, page };
//   }, []);

//   return { data, valueSearch, page };
// };

// export default useLocalStorage;
