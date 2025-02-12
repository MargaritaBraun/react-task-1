import RenderBooks from './MainComponents/resultMain';
import BookInterface from './MainComponents/types/booksType';

interface DataFetcherProps {
  data: BookInterface[] | null;
}

const ShowRezult = ({ data }: DataFetcherProps) => {
  const servedData = JSON.parse(localStorage.getItem('searchResults') || '[]');

  return <RenderBooks results={data?.length ? data : servedData} />;
};

export default ShowRezult;
