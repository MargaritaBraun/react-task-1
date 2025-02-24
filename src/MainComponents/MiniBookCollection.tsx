import React, { useRef } from 'react';
import { getCountBookSelect } from '../Redux/Redux-main';
import '../css/mini_book_collection.css';
import { useAcrions } from '../Redux/Redux-main';
import store from '../Redux/Redux-main';

export const handleClearCollections = (
  clearAllCollections: () => void,
  event: React.MouseEvent<HTMLButtonElement>
) => {
  event.preventDefault();
  clearAllCollections();
};

const MiniBookCollection = () => {
  const { clearAllCollections } = useAcrions();
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleClearCollections(clearAllCollections, event);
  };

  const handleDownloadCSV = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const selectedItems = store.getState();
    console.log(selectedItems);

    const csvHeaders =
      'ID, Title, Authors, First Publish Year, Has Fulltext, Language, IA Collection\n';
    const csvRows = selectedItems
      .map(
        (item) =>
        `${item.id}, "${item.title}",
        "${item.author_name ? item.author_name.join(', ') : 'N/A'}",
         ${item.first_publish_year},
         ${item.has_fulltext}, ${item.language ? item.language.join(', ') : 'N/A'},
         ${item.ia_collection_s}`
      )
      .join('\n');

    const csvContent = csvHeaders + csvRows;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const count = getCountBookSelect();
    const filename = `${count}_books_collections.csv`;

    if (linkRef.current) {
      linkRef.current.href = url;
      linkRef.current.download = filename;
      linkRef.current.click();
    }

    URL.revokeObjectURL(url);
  };

  return (
    <div className="mini_book_collection" data-testid="mini-book-collection">
      <button
        className="clear_book_collection"
        onClick={handleClick}
        type="button"
      >
        Unselect all
      </button>
      <h3>
        Value Book Collection
        <span>{getCountBookSelect()}</span>
      </h3>
      <a
        ref={linkRef}
        style={{ display: 'none' }}
      >
        Download
      </a>
      <button className="get_book_collection" onClick={handleDownloadCSV}>
        Download
      </button>
    </div>
  );
};

export default MiniBookCollection;
