interface DetailProps {
    nameText: string;
    textareaValue: string;
}


const DetailsComponents = (props: DetailProps) => {
    return (
        <div>
            <h3>Details</h3>
            <p>Name: { props.nameText}</p>
            <p>Text: </p>
            <p>
            { props.nameText}
            </p>
        </div>
    )
}

export default DetailsComponents;