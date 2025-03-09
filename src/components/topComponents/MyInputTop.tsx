'use client'
import React, { ReactNode } from 'react';
// import { useDispatch } from 'react-redux';
// import { saveValue } from '../../Redux/Redux-main';
// import { useState } from 'react';

// interface MyInputProps {
//   onChange: (value: string) => void;
//   value: string;
// }

// { value, onChange }: MyInputProps
const MyInputTop = (): ReactNode => {
  // const dispatch = useDispatch();
  // const [addvalue, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // dispatch(saveValue(newValue));
    // setValue(newValue);
    // window.localStorage.getItem('searchResults');
    window.localStorage.setItem('searchResults', newValue);
    // onChange(newValue);
    // getVale(newValue)
    console.log('seacrh value', newValue);
  };

  // if (typeof value !== 'string') {
  //   throw new TypeError('Expected value to be a string');
  // }

  return (
    <label className="search-label">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        // value={addvalue}
        onChange={handleChange}
        data-testid="test-search-input"
      />
    </label>
  );
};

export default MyInputTop;
