import '../styles/card.css';
import styles from '../styles/card.module.css';
import Country from '../types/country';
import {
  memo,
  MouseEventHandler,
  useEffect,
  useState,
  useCallback,
} from 'react';
import collectionCountry from '../utils/collectionCountry';

const Card = memo((data: Country) => {
  const { name, flags, population, region, cca2 } = data;
  const [statusCollection, setStatusCol] = useState(false);

  useEffect(() => {
    const isActive: boolean = collectionCountry(cca2, true);
    setStatusCol(isActive);
  }, [cca2]);

  const { common } = name;
  const { png, alt } = flags;

  const addToCollection: MouseEventHandler<HTMLDivElement> = useCallback(() => {
    collectionCountry(cca2, false);

    const isActive: boolean = collectionCountry(cca2, true);
    setStatusCol(isActive);
  }, []);

  return (
    <div
      className={`${styles.container} ${statusCollection ? 'active-card' : ''}`}
      onClick={addToCollection}
    >
      <div className="image-block">
        <img className="flag-image" src={png} alt={alt ? alt : common}></img>
      </div>
      <p className={styles.part}>{common}</p>
      <p className={styles.part}>{population}</p>
      <p className={styles.part}>{region}</p>
    </div>
  );
});

export default Card;
