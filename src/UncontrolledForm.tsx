import formStyles from './form.module.css';
import { useState } from 'react';
// import React from 'react';
import DetailsComponents from './components/details';

const UncontrolledForm = () => {
    const [ inputText, setInputText ] = useState('');
    const [ textareaValue, settextareaValue] = useState('');

    const saveData = {
        nameText:  inputText,
        textareaValue:  textareaValue,
    }
    const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const target = event.target as HTMLButtonElement;
        console.log('Button Click', target);
        console.log('saveData', saveData);
    }

    const changeInputText: React.ComponentProps<'input'>['onChange'] = (event) => {
        setInputText(event.target.value);
    }

    const changeTextarea: React.ComponentProps<'textarea'>['onChange'] = (event) => {
        settextareaValue(event.target.value);
    }
    // console.log('inputText', inputText);
    return (
        <>
            <h2>Uncontrolled Form</h2>
            <div className={formStyles.container}>
            <form className={formStyles.form}>
                <label className={formStyles.label}> Name
                <input type="text" className={formStyles.input} onChange={changeInputText}></input>
                </label>

                <label>
                    <textarea onChange={changeTextarea}></textarea>
                </label>
                <button className={formStyles.button} onClick={handleButton}>Show</button>
            </form>
            <DetailsComponents nameText={inputText} textareaValue={textareaValue } />
            </div>
        </>
    )
}

export default UncontrolledForm;