import InputTop from './MyInputTop';
import ButtonForSearch from './ButtonForSearch';
import '../css/search.css';
import bookFindSvg from '../assets/book-education-find-svgrepo-com.svg';

interface TopSectionProps {
  onInputChange: (value: string) => void;
  onButtonClick: () => void;
  searchValue: string;
}

const TopSection = ({
  onInputChange,
  onButtonClick,
  searchValue,
}: TopSectionProps): JSX.Element => {
  return (
    <div className="top-section">
      <div className="head-block">
        <h1>You can find a book</h1>
        <a
          href="https://openlibrary.org/dev/docs/api/search"
          target="_blank"
          rel="noopener"
        >
          <img
            src={bookFindSvg}
            className="logo book-find-svg"
            alt="book Find Svg logo"
          />
        </a>
      </div>
      <InputTop onChange={onInputChange} value={searchValue} />{' '}
      <ButtonForSearch onButtonClick={onButtonClick} />
    </div>
  );
};

export default TopSection;
