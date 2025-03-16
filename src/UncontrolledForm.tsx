import formStyles from './form.module.css';
// ComponentProps,
import { useState, MouseEvent, FC, useRef } from 'react';
// import DetailsComponents from './components/details';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required').matches(/^[A-Z].*/, 'Name must start with a capital letter'),
  age: yup.number().positive('Age is not positive'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  repeatPassword: yup.string().required('Repeat password is required'),
  textarea: yup.string().required('Texterea is required'),
});

interface ErrorMessageProps {
  message: string
  // fieldName: string
}
// const ErrorMessage: FC<ErrorMessageProps> = ({ message, fieldName }) => {
//   return (
//     <p
//       id={`error-${fieldName}`}
//     className={formStyles.textError}
//     >
//       {message}
//     </p>
//   )
// }

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <p
      // id={`error-${fieldName}`}
    className={formStyles.textError}
    >
      {message}
    </p>
  )
}

interface FormErrors {
  name?: string;
  age?: string;
  email?: string;
  password?: string,
  repeatPassword?: string,
  textarea?: string;
}

const UncontrolledForm = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  // password
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const repeatPasswordRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = async (fieldName: keyof FormErrors) => {
    // const value = fieldName === 'name' ? nameRef.current.value
    //   : textareaRef.current.value;
    interface refsAllObj {
      name: React.MutableRefObject<HTMLInputElement | null>,
      age: React.MutableRefObject<HTMLInputElement | null>,
      email: React.MutableRefObject<HTMLInputElement | null>,
      password: React.MutableRefObject<HTMLInputElement | null>,
      repeatPassword: React.MutableRefObject<HTMLInputElement | null>,
      textarea: React.MutableRefObject<HTMLTextAreaElement | null>,
    }

    const refs: refsAllObj = {
      name: nameRef,
      age: ageRef,
      email: emailRef,
      password: passwordRef,
      repeatPassword: repeatPasswordRef,
      textarea: textareaRef,
    }

    const value = refs[fieldName]?.current?.value;
    try {
      await schema.validateAt(fieldName, { [fieldName]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: undefined }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error.message }));
    }
  };

  const handleSubmit = async (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    const formData = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      repeatPassword: repeatPasswordRef.current?.value,
      textarea: textareaRef.current?.value,
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      console.log('Form submitted successfully:', formData);

    } catch (validationErrors) {
      if (validationErrors instanceof yup.ValidationError) {
        const formattedErrors: FormErrors = {};
        validationErrors.inner.forEach((error) => {
          formattedErrors[error.path as keyof FormErrors] = error.message;
        });
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <>
      <h2 className='title-form'>Uncontrolled Form</h2>
      <div className={formStyles.container}>
        <form className={formStyles.form} onSubmit={handleSubmit}>
          <label className={formStyles.label}>
            Name
            <input
              type="text"
              ref={nameRef}
              // value={form.nameText}
              className={formStyles.input}
              // onChange={changeInputText}
              onChange={()=> validateField('name')}
            />
          </label>
          {errors.name && <ErrorMessage message={errors.name} />}

          <label className={formStyles.label}>
            Age
            <input
              type="number"
              ref={ageRef}
              // value={form.nameText}
              className={formStyles.input}
              // onChange={changeInputText}
              onChange={()=> validateField('age')}
            />
          </label>
          {errors.age && <ErrorMessage message={errors.age} />}

          <label className={formStyles.label}>
            Email
            <input
              type="email"
              ref={emailRef}
              // value={form.nameText}
              className={formStyles.input}
              // onChange={changeInputText}
              onChange={()=> validateField('email')}
            />
          </label>
          {errors.email && <ErrorMessage message={errors.email} />}

          <label className={formStyles.label}>
            Password
            <input
              type="password"
              ref={passwordRef}
              // value={form.nameText}
              className={formStyles.input}
              // onChange={changeInputText}
              onChange={()=> validateField('password')}
            />
          </label>
          {errors.email && <ErrorMessage message={errors.email} />}

          <label className={formStyles.label}>
            Repeat password
            <input
              type="password"
              ref={repeatPasswordRef}
              // value={form.nameText}
              className={formStyles.input}
              // onChange={changeInputText}
              onChange={()=> validateField('repeatPassword')}
            />
          </label>
          {errors.email && <ErrorMessage message={errors.email} />}

          <label className={formStyles.label}>
            <textarea
              ref={textareaRef}
              // value={form.textareaState}
              // onChange={changeTextarea}
              onChange={()=> validateField('textarea')}
            ></textarea>
          </label>
          {errors.textarea && <ErrorMessage message={errors.textarea} />}
          <button className={formStyles.button} type='submit'>
            Show
          </button>
        </form>
        {/* {saveData.isSaveData && (
          <DetailsComponents
            nameText={saveData.nameText}
            textareaValue={saveData.textareaState}
            onCloseClick={closeDetails}
          />
        )} */}
      </div>
    </>
  );
};

export default UncontrolledForm;
