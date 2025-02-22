import { getCountBookSelect } from '../Redux/Redux-main';
import '../css/mini_book_collection.css';

const MiniBookCollection = () => {
    return (
        <div className="mini_book_collection">
            <h3>Value Book Collection
                <span>{getCountBookSelect()}</span>
            </h3>
            <button className="clear_book_collection">Clear Book Collection</button>
            <button className="get_book_collection">Get Book Collection</button>
        </div>
    )
}

export default MiniBookCollection;