import { useState, useEffect } from 'react';
import ResponceType from './MainComponents/types/responce';
import BookInterface from './MainComponents/types/booksType';

interface DataFetcherProps {
  valueOfSearch: string;
}

interface DataFetcherState {
  //   data: ResponceType | null;
  data: BookInterface[] | null;
  loading: boolean;
  error: string | null;
}

const url: string = 'https://openlibrary.org/search.json?';

function useFetch({ valueOfSearch }: DataFetcherProps): DataFetcherState {
  const [data, setData] = useState<BookInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          `${url}title=${titleParameters}&limit=10&page=1`
        );
        if (!response.ok) throw new Error('Network response was not ok');
        const result: ResponceType = await response.json();
          setData(result.docs || []);
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
  }, [valueOfSearch]);

  return { data, loading, error };
}

export default useFetch;