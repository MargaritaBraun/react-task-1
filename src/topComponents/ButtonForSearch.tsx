import { ButtonHTMLAttributes, ReactNode, FC } from 'react';

interface btnSearchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const ButtonForSearch: FC<btnSearchProps> = ({ ...props }): ReactNode => {
  return (
    <button type="submit" className="search-btn" {...props}>
      Search
    </button>
  );
};

export default ButtonForSearch;
