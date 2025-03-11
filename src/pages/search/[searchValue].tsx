import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SearchContainer from '../../components/ResultsContainer/SearchContainer';
import ResponceInterface from '../../components/ResultsContainer/types/responce';
import Layout from '@/components/Layout';
import Loading from './loading';
import { GetServerSideProps } from 'next';

const SearchPage = ({ data }: { data: ResponceInterface }) => {
  const router = useRouter();
  const { searchValue } = router.query;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchValue]);

  if (isLoading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Search Results for {searchValue}</h1>
      <SearchContainer
        data={data.docs}
        error={data.numFound === 0}
        totalResults={data.numFound}
      />
    </Layout>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { searchValue } = context.query;
  const url: string = 'https://openlibrary.org/search.json?';
  const localpage = 1;

  const response = await fetch(
    `${url}title=${searchValue}&limit=10&page=${localpage}`
  );
  const data: ResponceInterface = await response.json();

  return {
    props: {
      data,
    },
  };
};