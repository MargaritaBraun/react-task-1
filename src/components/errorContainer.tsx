interface ErrorContainerProps {
  message: string;
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
