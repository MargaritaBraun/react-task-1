import formStyles from './form.module.css';
import { ComponentProps, useState, MouseEvent } from 'react';
import DetailsComponents from './components/details';

const ControlledForm = () => {
  const [form, setForm] = useState({
    nameText: '',
      textareaState: '',
      saveData: {
          nameText: '',
          textareaState: '',
    }
  });

    const [saveData, setSaveData] = useState({
            isSaveData: false,
          nameText: '',
          textareaState: '',
  });

  const handleButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    console.log('Button Click', target);
      setSaveData({
        isSaveData: true,
        nameText: form.nameText,
        textareaState: form.textareaState,
      });
    setForm({
        ...form,
      nameText: '',
      textareaState: '',
    });
  };

  const changeInputText: ComponentProps<'input'>['onChange'] = (event) => {
    setForm({
      ...form,
      nameText: event.target.value,
    });
  };

  const changeTextarea: ComponentProps<'textarea'>['onChange'] = (event) => {
    setForm({
      ...form,
      textareaState: event.target.value,
    });
  };

  const closeDetails = () => {
    console.log('Close in Form');
      setSaveData({
        isSaveData: false,
        nameText: '',
        textareaState: '',
      });
  };
  return (
    <>
      <h2 className='title-form'>Controlled Form</h2>
      <div className={formStyles.container}>
        <form className={formStyles.form}>
          <label className={formStyles.label}>
            {' '}
            Name
            <input
              type="text"
              value={form.nameText}
              className={formStyles.input}
              onChange={changeInputText}
            ></input>
          </label>

          <label>
            <textarea
              value={form.textareaState}
              onChange={changeTextarea}
            ></textarea>
          </label>
          <button className={formStyles.button} onClick={handleButton}>
            Show
          </button>
        </form>
        {saveData.isSaveData && (
          <DetailsComponents
            nameText={saveData.nameText}
            textareaValue={saveData.textareaState}
            onCloseClick={closeDetails}
          />
        )}
      </div>
    </>
  );
};

export default ControlledForm;
