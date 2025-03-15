import Layout from '../components/Layout';
import { GetServerSideProps } from 'next';
import SearchContainer from '../components/ResultsContainer/SearchContainer';
import ResponceInterface from '../components/ResultsContainer/types/responce';

interface MainPropsBasic {
  data: ResponceInterface;
}

const MainContainer = (props: MainPropsBasic) => {
  console.log('index js Main Page');
  return (
    <Layout>
      <h1>Main Page</h1>
      <p>Выполните запрос на сервер</p>
      <SearchContainer
        data={props.data.docs}
        error={false}
        totalResults={props.data.numFound}
      ></SearchContainer>
    </Layout>
  );
};

export const getServerSideProp: GetServerSideProps = async () => {
  const url: string = 'https://openlibrary.org/search.json?';
  const valueOfSearch: string = 'get';
  const localpage: number = 1;
  const responce = await fetch(
    `${url}title=${valueOfSearch}&limit=10&page=${localpage}`
  );
  const data: ResponceInterface = await responce.json();
  return {
    props: {
      data,
    },
  };
};
export default MainContainer;
