interface ErrorContainerProps {
  message: string; // Определяем интерфейс для пропсов
}

const ErrorContainer = ({ message }: ErrorContainerProps) => {
  return (
    <>
      <p>Opps Error</p>
      <p>{message}</p>
    </>
  );
};

export default ErrorContainer;
