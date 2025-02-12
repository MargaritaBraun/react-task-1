import { useState } from 'react';
import './css/App.css';
import TopSection from './topComponents/TopSection';
import { Outlet, useNavigate } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const savedValueSearch = useLocalStorage().valueSearch;
  const valueSearch = savedValueSearch ? savedValueSearch : '';
  const [searchValue, setSearchValue] = useState(valueSearch);
  // const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const [getValueAfterClick, setValueAfterClick] = useState('');

  const handleInputChange = (value: string) => {
    setSearchValue(value);
  };

  const handleButtonClick = () => {
    setValueAfterClick(searchValue);
    console.log('Button clicked, search value:', searchValue);
    localStorage.setItem(
      'searchValue',
      // searchValue
      JSON.stringify(searchValue || '')
    );
    console.log('searchValue', localStorage.getItem('searchValue'));
    navigate(`/search?query=${encodeURIComponent(searchValue)}`);
  };

  return (
    <ErrorBoundary>
      <TopSection
        onInputChange={handleInputChange}
        onButtonClick={handleButtonClick}
        searchValue={searchValue}
      />
      <p className="text">Value {getValueAfterClick}</p>
      <Outlet />
    </ErrorBoundary>
  );
};

export default App;
