import BookInterface from './types/booksType';
import '../css/cards.css';

// Интерфейс для деталей книги
interface BookDetails extends BookInterface {
  cover_edition_key: string;
  cover_i: number;
  ia: string[];
  ia_collection_s: string;
  public_scan_b: boolean;
}

const Card = ({ title, author_name: autor, ...other }: BookInterface) => {
  const details: BookDetails = { ...other } as BookDetails;

  const showDetails = false;

  return (
    <div className="card-container">
      <h3 className="card-title">{title}</h3>
      {autor &&
        (Array.isArray(autor) ? (
          autor.map((ItemAutor, index) => (
            <p key={index} className="card-autor">
              {ItemAutor}
            </p>
          ))
        ) : (
          <p className="card-autor">{autor}</p>
        ))}
      {showDetails && (
        <div className="details">
          <h4>Details:</h4>
          <p><strong>Author Key:</strong> {details.author_key.join(', ')}</p>
          <p><strong>Cover Edition Key:</strong> {details.cover_edition_key}</p>
          <p><strong>Cover ID:</strong> {details.cover_i}</p>
          <p><strong>Edition Count:</strong> {details.edition_count}</p>
          <p><strong>First Publish Year:</strong> {details.first_publish_year}</p>
          <p><strong>Full Text Available:</strong> {details.has_fulltext ? 'Yes' : 'No'}</p>
          <p><strong>Languages:</strong> {details.language.join(', ')}</p>
          <p><strong>IA Collection:</strong> {details.ia_collection_s}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
