// Component,
import React from 'react';
import { useState } from 'react';

interface MyInputProps {
  onChange: (value: string) => void;
  // handleChange: (value: string) => void;
  value: string;
}


const MyInputTop = ({ value, onChange }: MyInputProps): JSX.Element => {
  const [addvalue, setValue] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // console.log('newValue', newValue);
    setValue(newValue);
    onChange(newValue);
    // this.setState({ value: newValue });
    // this.props.onChange(newValue);
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


// class OldMyInput extends Component<MyInputProps> {
//   handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     this.setState({ value: newValue });
//     this.props.onChange(newValue);
//   };

//   render() {
//     return (
//       <label className="search-label">
//         <input
//           type="text"
//           placeholder="Search"
//           className="search-input"
//           value={this.props.value}
//           onChange={this.handleChange}
//         />
//       </label>
//     );
//   }
// }

// interface InputTopInterface = (props: MyInputProps) => <JSX.Element />;
