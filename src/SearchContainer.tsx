import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Paginations from './MainComponents/Pagination';
import ShowRezult from './ShowRezult';
import useMyFetch from './useMyFetch';
import cocktailSvg from './assets/cocktail-svgrepo-com.svg';
import useLocalStorage from './useLocalStorage';
import EmptyContainer from './MainComponents/EmptyContainer';

const SearchContainer = () => {
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get('page');

  const { valueSearch: savedValueSearch, page: savedPage } = useLocalStorage();
  const valueSearch = savedValueSearch || '';
  const initialPage = pageParam ? parseInt(pageParam, 10) : savedPage || 1;

  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const { data, loading, error, totalResults } = useMyFetch({
    valueOfSearch: valueSearch,
    localpage: currentPage,
  });

  return (
    <div className="searchContainer-main">
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

      {loading || error ? null : (
        <>
          {data && data.length > 0 ? (
            <>
              <Paginations
                currentPage={currentPage}
                allResults={totalResults}
                handlePageChange={(page) => setCurrentPage(page)}
              />
              <ShowRezult data={data} />
            </>
          ) : (
            <EmptyContainer />
          )}
        </>
      )}
    </div>
  );
};

export default SearchContainer;
