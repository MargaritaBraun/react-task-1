// interface MainPropsBasic {
//     // props: {
//       data: ResponceInterface
//     // }
//   }

import ResponceInterface from 'src/components/ResultsContainer/types/responce';

export default async function getServerSideProps(
  valueOfSearch: string,
  localpage: number
) {
  const url: string = 'https://openlibrary.org/search.json?';
  // const initPage = valueOfSearch === newValue
  // const valueOfSearch: string = newValue ? newValue : 'get';
  // const localpage: number = page ? page : 1;
  // const responce = await fetch(`${url}title=${valueOfSearch}&limit=10&page=${localpage}`);
  const responce = await fetch(
    `${url}title=${valueOfSearch}&limit=10&page=${localpage}`
  );
  const data: ResponceInterface = await responce.json();
  return {
    props: {
      data,
    },
  };
}
