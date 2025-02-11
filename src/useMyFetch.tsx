import { useState, useEffect } from 'react';
import ResponceType from './MainComponents/types/responce';
import BookInterface from './MainComponents/types/booksType';

interface DataFetcherProps {
  valueOfSearch: string;
  localpage: number;
  setHasData: (hasData: boolean) => void;
}

interface DataFetcherState {
  data: BookInterface[] | null;
  loading: boolean;
  error: string | null;
  totalResults: number;
}

const url: string = 'https://openlibrary.org/search.json?';

function useMyFetch({
  valueOfSearch,
  localpage,
  setHasData,
  //   setLocalPage,
}: DataFetcherProps): DataFetcherState {
  const [data, setData] = useState<BookInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState<number>(10);

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
        localStorage.setItem(
          'searchResults',
          JSON.stringify(result.docs || [])
        );

        localStorage.setItem(
          'searchValue',
          JSON.stringify(valueOfSearch || '')
        );

        setTotalResults(result.numFound || 10);
      } catch (err) {
        if (typeof err === 'object' && err !== null && 'message' in err) {
          setError((err as { message: string }).message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
        setHasData(true);
      }
    };

    fetchData();
  }, [valueOfSearch, localpage, setHasData]);

  return { data, loading, error, totalResults };
}

export default useMyFetch;
