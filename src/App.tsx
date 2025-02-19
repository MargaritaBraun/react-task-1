import { useState } from 'react';
import './css/App.css';
import TopSection from './topComponents/TopSection';
import { Outlet, useNavigate } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import useLocalStorage from './useLocalStorage';
// import SearchContainer from './SearchContainer';
import EmptyContainer from './MainComponents/EmptyContainer';
import ThemeContext from './ThemeContext';

const App = () => {
  const savedValueSearch = useLocalStorage().valueSearch;
  const valueSearch = savedValueSearch ? savedValueSearch : '';
  const [searchValue, setSearchValue] = useState(valueSearch);
  const navigate = useNavigate();
  const [getValueAfterClick, setValueAfterClick] = useState('');
  const [theme, setTheme] = useState('light');

  const handleInputChange = (value: string) => {
    setSearchValue(value);
  };

  const handleButtonClick = () => {
    setValueAfterClick(searchValue);
    console.log('Button clicked, search value:', searchValue);
    localStorage.setItem('searchValue', JSON.stringify(searchValue || ''));
    navigate(`/search?query=${encodeURIComponent(searchValue)}`);
  };

  console.log('theme', theme);
  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <div className={'theme ' + theme}>
          {' '}
          {/* Применяем класс темы */}
          <TopSection
            onInputChange={handleInputChange}
            onClick={handleButtonClick}
            searchValue={searchValue}
            // className={theme}
          />
          <p className="text">Value {getValueAfterClick}</p>
          {!getValueAfterClick && !valueSearch ? (
            <EmptyContainer></EmptyContainer>
          ) : (
            <Outlet />
          )}
        </div>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
