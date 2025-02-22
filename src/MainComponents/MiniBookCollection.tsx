import { getCountBookSelect } from '../Redux/Redux-main';
import '../css/mini_book_collection.css';
import { useAcrions } from '../Redux/Redux-main';
import store from '../Redux/Redux-main';
const MiniBookCollection = () => {
  const { clearAllCollections } = useAcrions();

  const handleClearCollections = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    clearAllCollections();
  };

  const handleDownloadCSV = () => {
    const selectedItems = store.getState();
    console.log(selectedItems);

    const csvHeaders =
      'ID, Title, Authors, First Publish Year, Has Fulltext, Language, IA Collection\n';
    const csvRows = selectedItems
      .map(
        (item) =>
          `${item.id},"${item.title}","${item.author_name.join(', ')}",${item.first_publish_year},${item.has_fulltext},${item.language.join(', ')},${item.ia_collection_s}`
      )
      .join('\n');

    const csvContent = csvHeaders + csvRows;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const count = selectedItems.length;
    const filename = `${count}_books_collections.csv`;

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mini_book_collection">
      <button
        className="clear_book_collection"
        onClick={handleClearCollections}
        type="button"
      >
        Unselect all
      </button>
      <h3>
        Value Book Collection
        <span>{getCountBookSelect()}</span>
      </h3>
      <button className="get_book_collection" onClick={handleDownloadCSV}>
        Download
      </button>
    </div>
  );
};

export default MiniBookCollection;
