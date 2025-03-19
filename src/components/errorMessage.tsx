import { FC } from 'react';
import formStyles from '../styles/form.module.css';

export interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <p className={formStyles.textError}>{message}</p>;
};

export default ErrorMessage;
