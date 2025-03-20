// import { useState } from "react";

interface DetailProps {
  nameText: string;
  textareaValue: string;
  onCloseClick: () => void;
}

const DetailsComponents = ({
  nameText,
  textareaValue,
  onCloseClick,
}: DetailProps) => {
  // const [url, setUrl] = useState();
  return (
    <div>
      <h3>Details</h3>
      <button onClick={onCloseClick}>/</button>
      <p>Name: {nameText}</p>
      <p>Text: </p>
      <p>{textareaValue}</p>
      {/* <Upload onUpload={setUrl}>
      <img src={url} alt="" />
    </Upload> */}
    </div>
  );
};

export default DetailsComponents;
