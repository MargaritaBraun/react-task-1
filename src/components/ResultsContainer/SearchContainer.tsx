import { GetServerSideProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import BookInterface from '../../components/ResultsContainer/types/booksType';
import ShowRezult from '../../components/ResultsContainer/ShowRezult';

interface SearchPageProps {
  data: BookInterface[];
  error: boolean;
  totalResults: number;
}

const SearchPage = ({ data, error, totalResults }: SearchPageProps) => {
  const router = useRouter();
  const { searchValue } = router.query;

  return (
    <div>
      <h1>Search Results for: {searchValue}</h1>
      {error ? (
        <p>Error fetching data.</p>
      ) : (
        <ShowRezult data={data} />
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { searchValue } = context.params || {};
  let data: BookInterface[] = [];
  let totalResults = 0;
  let error = false;

  if (!searchValue) {
    return { notFound: true };
  }

  try {
    const res = await fetch(`https://openlibrary.org/search.json?title=${searchValue}`);
    const result = await res.json();
    data = result.docs || [];
    totalResults = result.numFound || 0;
  } catch (err) {
    error = true;
    console.error(err);
  }

  return {
    props: {
      data,
      error,
      totalResults,
    },
  };
};

export default SearchPage;