interface DetailProps {
  nameText: string;
  textareaValue: string;
  onCloseClick: () => void;
}

const DetailsComponents = ({nameText, textareaValue, onCloseClick}: DetailProps) => {

  return (
    <div>
      <h3>Details</h3>
      <button onClick={onCloseClick}>/</button>
      <p>Name: {nameText}</p>
      <p>Text: </p>
      <p>{textareaValue}</p>
    </div>
  );
};

export default DetailsComponents;
