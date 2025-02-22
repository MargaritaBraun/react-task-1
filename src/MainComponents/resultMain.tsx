import BookInterface from './types/booksType';
import Card from './CardView';
import MiniBookCollection from './MiniBookCollection';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Redux-main';

interface RenderBooksInterface {
  results: BookInterface[];
}

const RenderBooks = ({ results }: RenderBooksInterface) => {
  const countBookSelect = useSelector((state: RootState) => state.length);
  const showBookCollection = countBookSelect > 0;

  if (results.length === 0) {
    return (
      <div className="result-empty">
        <p className="result-empty-text">No data available.</p>
      </div>
    );
  }

  return (
    <div className="result-container">
      <div className="result-controls">
        <p className="result-controls-text">Book Name</p>
        <p className="result-controls-text">Autor or autors</p>
      </div>
      {results.map((result) => {
        const { key: id, ...restProps } = result;
        return <Card key={id} id={id} {...restProps} />;
      })}
      {showBookCollection && <MiniBookCollection />}
    </div>
  );
};

export default RenderBooks;
