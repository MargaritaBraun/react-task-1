import leftArrow from '../assets/arrow-left.svg';
import rightArrow from '../assets/arrow-right.svg';
import { useLocation, useNavigate } from 'react-router-dom';

interface PaginationsProps {
  currentPage: number;
  allResults: number;
  handlePageChange: (page: number) => void;
}

const Paginations = ({
  currentPage,
  allResults,
  handlePageChange,
}: PaginationsProps) => {
  const totalPages = Math.ceil(allResults / 10);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const valueSearch = searchParams.get('query') || '';

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;

    searchParams.set('page', page.toString());
    searchParams.set('query', encodeURIComponent(valueSearch));
    navigate(`?${searchParams.toString()}`);

    handlePageChange(page);
  };

  return (
    <div className="pagination">
      <h2>
        Страница {currentPage} из {totalPages}
      </h2>
      <div className="pagination-container">
        <button
          type="button"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn-page"
        >
          <img src={leftArrow} className="btn-svg" alt="left Arrow" />
        </button>
        <button
          type="button"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn-page"
        >
          <img src={rightArrow} className="btn-svg" alt="right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Paginations;
