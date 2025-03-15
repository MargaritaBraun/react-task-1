'use client';
import { ReactNode, FC } from 'react';
import { useRouter } from 'next/router';
import React from 'react';

const ButtonForSearch: FC = (): ReactNode => {
  const router = useRouter();

  const handleSearch = () => {
    const searchValue = window.localStorage.getItem('searchResults') || '';
    if (searchValue) {
      router.push(`/search/${searchValue}`);
    } else {
      console.log('Search value is empty');
    }
  };

  return (
    <button type="submit" className="search-btn" onClick={handleSearch}>
      Search
    </button>
  );
};

export default ButtonForSearch;
