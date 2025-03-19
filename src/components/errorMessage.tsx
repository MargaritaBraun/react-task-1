import { FC } from 'react';
import formStyles from '../styles/form.module.css';

export interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return;
  return <p className={formStyles.textError}>{message}</p>;
};

export default ErrorMessage;
