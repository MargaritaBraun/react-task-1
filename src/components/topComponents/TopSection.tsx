import InputTop from './MyInputTop';
import ButtonForSearch from './ButtonForSearch';
import Image from 'next/image';
import { ReactNode } from 'react';
// import SelectTheme from './SelectTheme';

const TopSection = (): ReactNode => {
  return (
    <header className="top-section">
      <div className="head-block">
        <h1>You can find a book</h1>
        <a
          href="https://openlibrary.org/dev/docs/api/search"
          target="_blank"
          rel="noopener"
        >
          <Image
            src='/book-education-find-svgrepo-com.svg'
            className="logo book-find-svg"
            alt="book Find Svg logo"
             width={50}
             height={50}
          />
        </a>
      </div>
      <InputTop />
      <ButtonForSearch />
      {/* <SelectTheme></SelectTheme> */}
    </header>
  );
};

export default TopSection;
