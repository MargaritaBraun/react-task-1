import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Paginations from './MainComponents/Pagination';
import ShowRezult from './ShowRezult';
import useMyFetch from './useMyFetch';
import cocktailSvg from './assets/cocktail-svgrepo-com.svg';
import useLocalStorage from './useLocalStorage';

const SearchContainer = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const savedValueSearch = useLocalStorage().valueSearch;
  const valueSearch = savedValueSearch ? savedValueSearch : '';
  const pageParam = searchParams.get('page');
  const page: number = pageParam ? parseInt(pageParam, 10) : 1;

  const [currentPage, setCurrentPage] = useState<number>(page);
  const [hasData, setHasData] = useState<boolean>(false);

  const { data, loading, error, totalResults } = useMyFetch({
    valueOfSearch: valueSearch,
    localpage: currentPage,
    setHasData,
  });

  useEffect(() => {
    setCurrentPage(page);
  }, [location.search, page]);

  return (
    <div>
      {loading && (
        <div className="load-container">
          <img
            src={cocktailSvg}
            alt="cocktail Svg loading data"
            className="svg-loading"
          />
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
      {!valueSearch && !hasData ? (
        <div className="no-data-message">
          <p className="text">
            Нет сохраненных данных. Пожалуйста, выполните поиск.
          </p>
        </div>
      ) : (
        <>
          <Paginations
            currentPage={currentPage}
            allResults={totalResults}
            handlePageChange={(page) => setCurrentPage(page)}
          />
          <ShowRezult data={data} />
        </>
      )}
    </div>
  );
};

export default SearchContainer;
