import BookInterface from './types/booksType';
import ShowRezult from './ShowRezult';

interface SearchPageProps {
  data: BookInterface[];
  error: boolean;
  totalResults: number;
}

const SearchPage = ({ data, error, totalResults }: SearchPageProps) => {
  return (
    <>
      <h1>Components Search Results</h1>
      <p>{totalResults}</p>
      {error && <p>Error fetching data.</p>}
      <ShowRezult data={data} />
    </>
  );
};

export default SearchPage;
