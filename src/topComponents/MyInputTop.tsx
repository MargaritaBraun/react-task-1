import React from 'react';
import { useState } from 'react';

interface MyInputProps {
  onChange: (value: string) => void;
  value: string;
}

const MyInputTop = ({ value, onChange }: MyInputProps): ReactNode => {
  const [addvalue, setValue] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  if (typeof value !== 'string') {
    throw new TypeError('Expected value to be a string');
  }

  return (
    <label className="search-label">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={addvalue}
        onChange={handleChange}
        data-testid="test-search-input"
      />
    </label>
  );
};

export default MyInputTop;
