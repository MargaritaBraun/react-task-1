import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import useMyFetch from '../../hooks/useMyFetch';
import ResultMain from '../../components/ResultsContainer/ResultMain';

const SearchPage = () => {
  const router = useRouter();
  const { searchValue } = router.query;
  const [value, setValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (searchValue) {
      setValue(searchValue as string);
    }
  }, [searchValue]);

  // const { data, loading, error, totalResults } = useMyFetch({
  //   valueOfSearch: value || '',
  //   localpage: 1,
  // });

  return (
    <div>
      <h1>Search Results for "{value}"</h1> {/* Используем локальное состояние */}
      <ResultMain
        data={data} 
      />
    </div>
  );
};

export default SearchPage;