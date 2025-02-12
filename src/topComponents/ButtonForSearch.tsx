interface btnSearchProps {
  onButtonClick: () => void;
}
const ButtonForSearch = ({ onButtonClick }: btnSearchProps): ReactNode => {
  return (
    <button type="submit" className="search-btn" onClick={onButtonClick}>
      Search
    </button>
  );
};

export default ButtonForSearch;
