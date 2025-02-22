import BookInterface from './types/booksType';
import '../css/cards.css';
import { useAcrions, checkIsId } from '../Redux/Redux-main';
import { useEffect, useState } from 'react';
// import { useState } from 'react';

interface BookDetails extends BookInterface {
  cover_edition_key: string;
  cover_i: number;
  ia: string[];
  // ia_collection_s: string[];
  public_scan_b: boolean;
}

const Card = ({
  id,
  title,
  author_name: autor,
  ...other
}: BookInterface & { id: string }) => {
  const { add, deleteById } = useAcrions();

  const [isChecked, setChecked] = useState(checkIsId(id));

  useEffect(() => {
    // const checkedState = checkIsId(id);
    setChecked(checkIsId(id));
  }, [id]);
  // const [showDetails, setShowDetails] = useState(false);
  const details: BookDetails = { ...other } as BookDetails;

  const showDetails = false;
  // Получаем URL обложки
  const coverUrl = `https://covers.openlibrary.org/b/id/${details.cover_i}-L.jpg`;
  // const isChecked = checkIsId(id);
  console.log('id', id, 'isCheck', isChecked);
  const toggleSelectBox = () => {
    // setShowDetails((prev) => !prev);
    console.log('isChecked', isChecked);
    if (isChecked) {
      deleteById(id);
      // setChecked(false);
    } else {
      add({ id, title, author_name: autor, ...other });
      // setChecked(true);
    }
    setChecked(checkIsId(id));
  };

  return (
    <div className="card-container">
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
            <p>{details.author_key.join(', ')}</p>
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
            <p>{details.language.join(', ')}</p>
          </div>

          {/* <div className='text-details'>
            <h5>IA Collection:</h5>
            <p>
            {details.ia_collection_s.join('; ')}
            </p>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Card;


// import BookInterface from './types/booksType';
// import '../css/cards.css';
// // import { useDispatch } from 'react-redux';
// import { useAcrions, checkIsId } from '../Redux/Redux-main';
// import { useState } from 'react';
// interface BookDetails extends BookInterface {
//   cover_edition_key: string;
//   cover_i: number;
//   ia: string[];
//   ia_collection_s: string;
//   public_scan_b: boolean;
// }

// const Card = ({ key: id, title, author_name: autor, ...other }: BookInterface) => {
//   // console.log('use', useAcrions())
//   // const actions = useAcrions();
//   const { add, deleteById } = useAcrions();
//   const [showDetails, setShowDetails] = useState(false);
//   // const dispatch = useDispatch();
//   const details: BookDetails = { ...other } as BookDetails;
//   // console.log('detal', details);
//   // console.log('key detal', details.key);
//   // let showDetails = false;

//   const isChecked = checkIsId(id);

//   const toggleSelectBox = () => {
//     // showDetails = true;
//     setShowDetails(prev => !prev);
//     // console.log('detal', details);
//     console.log('id key', id);
//     if (isChecked) {
//       deleteById(id);
//     } else {
//       add({ key: id, title, author_name: autor, ...other })
//     }
//   };

//   // const toggleSelectBox = () => {
//   //   // Переключаем отображение деталей
//   //   setShowDetails(prev => !prev);

//   //   if (isChecked) {
//   //     actions.deleteById(key);
//   //   } else {
//   //     actions.add({ key, title, author_name: autor, ...other });
//   //   }
//   // };

//   return (
//     <div className="card-container">
//       <h3 className="card-title">{title}</h3>
//       <div className="container-autors">
//         {autor &&
//           (Array.isArray(autor) ? (
//             autor.map((ItemAutor, index) => (
//               <p key={index} className="card-autor">
//                 {ItemAutor}
//               </p>
//             ))
//           ) : (
//             <p className="card-autor">{autor}</p>
//           ))}
//       </div>
//       <label>
//         <input type="checkbox" onChange={toggleSelectBox} checked={isChecked}></input>
//       </label>
//       {showDetails && (
//         <div className="details">
//           <h4>Details:</h4>
//           <p>
//             <strong>Author Key:</strong> {details.author_key.join(', ')}
//           </p>
//           <p>
//             <strong>Cover Edition Key:</strong> {details.cover_edition_key}
//           </p>
//           <p>
//             <strong>Cover ID:</strong> {details.cover_i}
//           </p>
//           <p>
//             <strong>Edition Count:</strong> {details.edition_count}
//           </p>
//           <p>
//             <strong>First Publish Year:</strong> {details.first_publish_year}
//           </p>
//           <p>
//             <strong>Full Text Available:</strong>{' '}
//             {details.has_fulltext ? 'Yes' : 'No'}
//           </p>
//           <p>
//             <strong>Languages:</strong> {details.language.join(', ')}
//           </p>
//           <p>
//             <strong>IA Collection:</strong> {details.ia_collection_s}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;
