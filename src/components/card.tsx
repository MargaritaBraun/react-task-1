import '../styles/card.css';
import styles from '../styles/card.module.css';
import Country from '../types/country';
import { memo } from 'react';

const Card = memo((data: Country) => {
  const { name, flags, population, region } = data;
  const { common } = name;
  const { png, alt } = flags;
  return (
    <div className={styles.container}>
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
