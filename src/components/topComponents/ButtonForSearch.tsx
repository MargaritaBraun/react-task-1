'use client';
import { ReactNode, FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ButtonForSearch: FC = (): ReactNode => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>('');

  // Получаем значение из localStorage только на клиенте
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = window.localStorage.getItem('searchResults') || '';
      setSearchValue(value);
    }
  }, []);

  const handleSearch = () => {
    if (searchValue) {
      // Переход на динамическую страницу с searchValue
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

// 'use client'
// import { ReactNode, FC, useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
// // import { type InterfaceRootState } from '../../Redux/Redux-main';

// const ButtonForSearch: FC = (): ReactNode => {
//   const router = useRouter();
//   const [searchValueState, setSearchValue] = useState('');

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const searchValue: string = window.localStorage.getItem('searchResults') !== null ? window.localStorage.getItem('searchResults')! : '';
//       // searchValueState
//       setSearchValue(setSearchValue);
//     }
//   }, [])
//   // const searchValue: string = useSelector((state: InterfaceRootState) => state.searcValReducer);

//   console.log('searchValue', searchValue);

//   const handleSearch = () => {
//     if (searchValue) {
//       // Переход на динамическую страницу с searchValue
//       router.push(`/search/${searchValue}`);
//     } else {
//       console.log('Search value is empty');
//     }
//   };

//   return (
//     <button type="submit" className="search-btn" onClick={handleSearch}>
//       Search
//     </button>
//   );
// };

// export default ButtonForSearch;


// // ButtonHTMLAttributes,
// // import { RootState } from '@reduxjs/toolkit/query';
// import { ReactNode, FC } from 'react';
// // useDispatch,
// import {useDispatch, useSelector } from 'react-redux';
// // import Link from 'next/link';
// import { type InterfaceRootState } from '../../Redux/Redux-main';
// // import { redirect } from 'next/navigation';
// import { useRouter } from 'next/router';
// // interface btnSearchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
// //   onClick: () => void;
// // }

// // const ButtonForSearch: FC<btnSearchProps> = ({ ...props }): ReactNode => {
// const ButtonForSearch: FC = (): ReactNode => {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   // const searchValueFromRedax: string = useSelector((state: InterfaceRootState) => state.searcValReducer)
//   const searchValue: string = useSelector((state: InterfaceRootState)=> state.searcValReducer)
//   return (
//     // <Link>
//     // Search
//     // </Link>
//     <button type="submit" className="search-btn"
//       onClick={
//         () => {
//           // const searchFromLocal = window.localStorage.getItem('searchResults');
//           // console.log('searchValueFromRedax', searchValue);
//     //       // router.push(`/search?q=${searchValueFromRedax}`)
//           router.push(`/${searchValue}`)
//     //       console.log('searchValueFromRedax', searchValue); // Проверка значения
//     // if (searchValue) {
//     //   // router.push(`/search?q=${searchValue}`);
//     //   redirect(`/${searchValue}`)
//     // } else {
//     //   console.log('else searchValueFromRedax', searchValue); // Проверка значения
//           // }
//           // const searchValue: HTMLInputElement = document.querySelector('.search-input')?.value;
//           // console.log('else', searchValue);
//           // redirect(`/${searchValue}`)
//           // router.push(`/search?q=${searchValue}`);
//           // router.push(`/search?q=${searchValue}`);
//           // router.push(`/search=${searchValue}`);
//       }
//     }>
//       Search
//     </button>
//   );
// };

// export default ButtonForSearch;
