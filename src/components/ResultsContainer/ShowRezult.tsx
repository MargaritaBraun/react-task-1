import RenderBooks from './ResultMain';
import BookInterface from './types/booksType';

interface DataFetcherProps {
  // data: BookInterface[] | null;
  data: BookInterface[];
}

const ShowRezult = ({ data }: DataFetcherProps) => {
  // const servedData = JSON.parse(localStorage.getItem('searchResults') || '[]');

  // return <RenderBooks results={data?.length ? data : servedData} />;
  return <RenderBooks results={data} />;
};

export default ShowRezult;
