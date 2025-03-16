import FormData from "../types/formType";
// import { FC } from "react";
import homeStyles from '..//navigation.module.css';

// interface CardProps {
//     data: FormData,
// }
// interface CardProps extends FormData {} // Типизация пропсов

// const Card: FC<CardProps> = ({ name, age, email, password, repeatPassword, gender, textarea }) => {
const Card = ({ name, age, email, password, repeatPassword, gender, textarea }: FormData) => {
    // const { name, age, email, password, repeatPassword, gender, textarea } = data;
    return(
        <div className={homeStyles.cardContainer}>
            <div className={homeStyles.cardPart}>
                <p className={homeStyles.title}>Name</p>
                <p className={homeStyles.cardText}>{ name }</p>
            </div>
            <div className={homeStyles.cardPart}>
                <p className={homeStyles.title}>Age</p>
                <p className={homeStyles.cardText}>{ age }</p>
            </div>
            <div className={homeStyles.cardPart}>
                <p className={homeStyles.title}>Email</p>
                <p className={homeStyles.cardText}>{ email }</p>
            </div>
            <p>{ password }</p>
            <p>{ repeatPassword }</p>
            <p>{ gender }</p>
            <p>{ textarea }</p>
        </div>
    )
}

export default Card;