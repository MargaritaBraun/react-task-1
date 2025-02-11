import React from 'react';
import { useState } from 'react';

interface MyInputProps {
  onChange: (value: string) => void;
  value: string;
}

const MyInputTop = ({ value, onChange }: MyInputProps): JSX.Element => {
  const [addvalue, setValue] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };
  return (
    <label className="search-label">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={addvalue}
        onChange={handleChange}
      />
    </label>
  );
};

export default MyInputTop;
