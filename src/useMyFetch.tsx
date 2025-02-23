import { useState, useEffect } from 'react';
import ResponceType from './MainComponents/types/responce';
import BookInterface from './MainComponents/types/booksType';
// import useLocalStorage from './useLocalStorage';

export interface DataFetcherProps {
  valueOfSearch: string;
  localpage: number;
}

export interface DataFetcherState {
  data: BookInterface[] | null;
  loading: boolean;
  error: string | null;
  totalResults: number;
}

const url: string = 'https://openlibrary.org/search.json?';

function useMyFetch({
  valueOfSearch,
  localpage,
}: DataFetcherProps): DataFetcherState {
  const [data, setData] = useState<BookInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState<number>(0);

  // const localStorageData = useLocalStorage();

  const strToResponce = (value: string): string => {
    const arrWords = value.trim().split(' ');
    return arrWords.length > 1 ? arrWords.join('+') : arrWords[0] || '';
  };

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    const fetchData = async () => {
      const titleParameters = strToResponce(valueOfSearch);

      try {
        const response = await fetch(
          `${url}title=${titleParameters}&limit=10&page=${localpage}`
        );
        if (!response.ok) throw new Error('Network response was not ok');
        const result: ResponceType = await response.json();
        setData(result.docs || []);
        setTotalResults(result.numFound || 0);

        window.localStorage.setItem(
          'searchResults',
          JSON.stringify(result.docs || [])
        );
        window.localStorage.setItem('searchValue', valueOfSearch);
        window.localStorage.setItem('page', localpage.toString());
      } catch (err) {
        if (typeof err === 'object' && err !== null && 'message' in err) {
          setError((err as { message: string }).message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [valueOfSearch, localpage]); // Убедитесь, что зависимости не изменяются на каждом рендере

  return { data, loading, error, totalResults };
}

export default useMyFetch;

// import { useState, useEffect } from 'react';
// import ResponceType from './MainComponents/types/responce';
// import BookInterface from './MainComponents/types/booksType';

// export interface DataFetcherProps {
//   valueOfSearch: string;
//   localpage: number;
// }

// export interface DataFetcherState {
//   data: BookInterface[] | null;
//   loading: boolean;
//   error: string | null;
//   totalResults: number;
// }

// const url: string = 'https://openlibrary.org/search.json?';

// function useMyFetch({
//   valueOfSearch,
//   localpage,
// }: DataFetcherProps): DataFetcherState {
//   const [data, setData] = useState<BookInterface[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [totalResults, setTotalResults] = useState<number>(0);

//   // const localStorageData = useLocalStorage();

//   const strToResponce = (value: string): string => {
//     const arrWords = value.trim().split(' ');
//     return arrWords.length > 1 ? arrWords.join('+') : arrWords[0] || '';
//   };

//   useEffect(() => {
//     setLoading(true);
//     setData(null);
//     setError(null);

//     const fetchData = async () => {
//       const titleParameters = strToResponce(valueOfSearch);

//       try {
//         // const response = await fetch(
//         //   `${url}title=${titleParameters}&limit=10&page=${localpage}`
//         // );
//         // const response = await fetch(`/api/search.json?title=${titleParameters}&limit=10&page=${localpage}`);
//         // if (!response.ok) throw new Error('Network response was not ok');
//         // const result: ResponceType = await response.json();
//         fetch('https://openlibrary.org/search.json?title=big&limit=10&page=1')
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error('Network response was not ok');
//             }
//             const contentType = response.headers.get('content-type');
//             if (!contentType || !contentType.includes('application/json')) {
//               throw new TypeError("Oops, we haven't got JSON!");
//             }
//             const result: ResponceType = await response.json();
//             return result;
//           })
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((error) => {
//             console.error('Error:', error);
//           });
//         setData(result.docs || []);
//         setTotalResults(result.numFound || 0);

//         window.localStorage.setItem(
//           'searchResults',
//           JSON.stringify(result.docs || [])
//         );

//         window.localStorage.setItem('page', localpage.toString());
//       } catch (err) {
//         if (typeof err === 'object' && err !== null && 'message' in err) {
//           setError((err as { message: string }).message);
//         } else {
//           setError('An unknown error occurred.');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [valueOfSearch, localpage]);

//   return { data, loading, error, totalResults };
// }

// export default useMyFetch;
