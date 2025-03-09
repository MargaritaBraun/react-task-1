import { useState, useEffect } from 'react';

const url: string = 'https://openlibrary.org/search.json?';

const useMyFetch = ({ valueOfSearch, localpage }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let totalResults = 100;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${url}title=${valueOfSearch}&limit=10&page=${localpage}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result.docs || []);
        totalResults = result.numFound;
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [valueOfSearch, localpage]);

  return { data, loading, error, totalResults };
};

export default useMyFetch;