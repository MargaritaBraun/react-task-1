import BookInterface from './types/booksType';
import '../css/cards.css';
import { useAcrions, checkIsId, RootState } from '../Redux/Redux-main';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface BookDetails extends BookInterface {
  ia_collection_s: string;
  cover_edition_key: string;
  cover_i: number;
  ia: string[];
  public_scan_b: boolean;
}

const Card = ({
  id,
  title,
  author_name: autor,
  ...other
}: BookInterface & { id: string }) => {
  const { add, deleteById } = useAcrions();
  const countBookSelect = useSelector((state: RootState) => state.length);
  const [isChecked, setChecked] = useState(checkIsId(id));

  useEffect(() => {
    setChecked(checkIsId(id));
  }, [id, countBookSelect]);
  const [showDetails, setShowDetails] = useState(false);
  const details: BookDetails = { ...other } as BookDetails;

  const coverUrl = `https://covers.openlibrary.org/b/id/${details.cover_i}-L.jpg`;

  const toggleSelectBox = () => {
    console.log('isChecked', isChecked);
    if (isChecked) {
      deleteById(id);
    } else {
      add({ id, title, author_name: autor, ...other });
    }
    setChecked(checkIsId(id));
  };

  const handleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="card-container" onClick={handleShowDetails}>
      <div className="main-card">
        <img src={coverUrl} alt={`Cover of ${title}`} className="book-cover" />
        <h3 className="card-title">{title}</h3>
        <div className="container-autors">
          {autor &&
            (Array.isArray(autor) ? (
              autor.map((itemAutor, index) => (
                <p key={index} className="card-autor">
                  {itemAutor}
                </p>
              ))
            ) : (
              <p className="card-autor">{autor}</p>
            ))}
        </div>
        <label>
          <input
            type="checkbox"
            onChange={toggleSelectBox}
            checked={isChecked}
          />
        </label>
      </div>
      {showDetails && (
        <div className="details">
          <h4>Details:</h4>
          <div className="text-details">
            <h5>Author Key:</h5>
            <p>{details.author_key ? details.author_key.join(', ') : 'N/A'}</p>
          </div>

          <div className="text-details">
            <h5>Cover Edition Key:</h5>
            <p>{details.cover_edition_key}</p>
          </div>

          <div className="text-details">
            <h5>Cover ID:</h5>
            <p>{details.cover_i}</p>
          </div>

          <div className="text-details">
            <h5>Edition Count:</h5>
            <p>{details.edition_count}</p>
          </div>

          <div className="text-details">
            <h5>First Publish Year:</h5>
            <p>{details.first_publish_year}</p>
          </div>
          <div className="text-details">
            <h5>Full Text Available:</h5>
            <p>{details.has_fulltext ? 'Yes' : 'No'}</p>
          </div>

          <div className="text-details">
            <h5>Languages:</h5>
            <p>
              {details.language
                ? details.language.join(', ')
                : details.language}
            </p>
          </div>

          <div className="text-details">
            <h5>IA Collection:</h5>
            <p>
              {details.ia_collection_s
                ? details.ia_collection_s
                    .split(';')
                    .map((collection, index) => (
                      <span key={index}>{collection}</span>
                    ))
                : 'N/A'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;