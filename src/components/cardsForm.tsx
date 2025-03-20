import FormData from '../types/formType';
import homeStyles from '../styles/navigation.module.css';

const Card = ({
  name,
  age,
  email,
  password,
  // repeatPassword,
  gender,
  image,
  // terms,
  country,
  textarea,
}: FormData) => {
  return (
    <div className={homeStyles.cardContainer}>
      <div className={homeStyles.imageContainer}>
        <img src={image} alt="Profile Image" className={homeStyles.image} />
      </div>
      <div className={homeStyles.cardPart}>
        <p className={homeStyles.title}>Name</p>
        <p className={homeStyles.cardText}>{name}</p>
      </div>
      <div className={homeStyles.cardPart}>
        <p className={homeStyles.title}>Age</p>
        <p className={homeStyles.cardText}>{age}</p>
      </div>
      <div className={homeStyles.cardPart}>
        <p className={homeStyles.title}>Email</p>
        <p className={homeStyles.cardText}>{email}</p>
      </div>
      <div className={homeStyles.cardPart}>
        <p className={homeStyles.title}>Password</p>
        <p className={homeStyles.cardText}>{password}</p>
      </div>
      <div className={homeStyles.cardPart}>
        <p className={homeStyles.title}>Gender</p>
        <p className={homeStyles.cardText}>{gender}</p>
      </div>
      <div className={homeStyles.cardPart}>
        <p className={homeStyles.title}>Country</p>
        <p className={homeStyles.cardText}>{country}</p>
      </div>
      <div className={homeStyles.cardPart}>
        <p className={homeStyles.title}>Options</p>
        <p className={homeStyles.cardText}>{textarea}</p>
      </div>
    </div>
  );
};

export default Card;
