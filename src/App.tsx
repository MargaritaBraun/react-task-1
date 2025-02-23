import { useState, useEffect } from 'react';
import './css/App.css';
import TopSection from './topComponents/TopSection';
import { Outlet, useNavigate } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import useLocalStorage from './useLocalStorage';
import EmptyContainer from './MainComponents/EmptyContainer';
import ThemeContext from './ThemeContext';

const App = () => {
  const {
    valueSearch: savedValueSearch,
    page: savedPage,
    data,
  } = useLocalStorage();
  const [searchValue, setSearchValue] = useState(savedValueSearch || '');
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (savedValueSearch) {
      navigate(
        `/search?search=${encodeURIComponent(savedValueSearch)}&page=${savedPage}`
      );
    }
  }, [savedValueSearch, savedPage, navigate]);

  const handleInputChange = (value: string) => {
    setSearchValue(value);
  };

  const handleButtonClick = () => {
    console.log('Button clicked, search value:', searchValue);
    localStorage.setItem('searchValue', searchValue || '');
    setHasSearched(true);
    navigate(
      `/search?search=${encodeURIComponent(searchValue)}&page=${savedPage}`
    );
  };

  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <div className={`theme ${theme}`}>
          <TopSection
            onInputChange={handleInputChange}
            onClick={handleButtonClick}
            searchValue={searchValue}
          />
          {(!data || data.length === 0) && !hasSearched ? (
            <EmptyContainer />
          ) : (
            <Outlet />
          )}
        </div>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
