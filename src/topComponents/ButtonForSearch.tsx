interface btnSearchProps {
  onButtonClick: () => void;
}
const ButtonForSearch = ({ onButtonClick }: btnSearchProps): JSX.Element => {
  return (
    <button type="submit" className="search-btn" onClick={onButtonClick}>
      Search
    </button>
  );
};

export default ButtonForSearch;
