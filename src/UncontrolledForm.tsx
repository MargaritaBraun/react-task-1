import formStyles from './form.module.css';
import { useState, MouseEvent, FC, useRef } from 'react';
import * as yup from 'yup';
import { addUncontrForm } from './redux/formSlice';
import { useDispatch } from 'react-redux';
import FormData from './types/formType';

const passwordSchema = yup
  .string()
  .min(8, 'Password is too short')
  .matches(/[0-9]/, 'Password must contain a number')
  .matches(/[a-z]/, 'Password must contain a lowercase letter')
  .matches(/[A-Z]/, 'Password must contain an uppercase letter')
  .matches(/[\W_]/, 'Password must contain a special character')
  .required('Password is required');

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z].*/, 'Name must start with a capital letter'),
  age: yup.number().positive('Age is not positive').required('Age is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: passwordSchema,
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Repeat password is required'),
  gender: yup.string().required('Gender is required'),
  textarea: yup.string().required('Textarea is required'),
});

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <p className={formStyles.textError}>{message}</p>;
};

interface FormErrors {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
  gender?: string;
  textarea?: string;
}

const UncontrolledForm: FC = () => {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const repeatPasswordRef = useRef<HTMLInputElement | null>(null);
  const genderRefs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false);

  const validateField = async (fieldName: keyof FormErrors) => {
    const refs: Record<
      string,
      React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>
    > = {
      name: nameRef,
      age: ageRef,
      email: emailRef,
      password: passwordRef,
      repeatPassword: repeatPasswordRef,
      textarea: textareaRef,
    };

    const value =
      fieldName === 'gender'
        ? genderRefs[0].current?.checked
          ? 'man'
          : genderRefs[1].current?.checked
            ? 'woman'
            : null
        : refs[fieldName]?.current?.value;

    try {
      await schema.validateAt(fieldName, { [fieldName]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: undefined }));
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: error.message,
        }));
      }
    }
  };

  const handleSubmit = async (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    const formData: FormData = {
      name: nameRef.current?.value || '',
      age: Number(ageRef.current?.value) || 0,
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      repeatPassword: repeatPasswordRef.current?.value || '',
      gender: genderRefs[0].current?.checked
        ? 'man'
        : genderRefs[1].current?.checked
          ? 'woman'
          : 'no select',
      textarea: textareaRef.current?.value || '',
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      dispatch(addUncontrForm(formData));
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
      <h2 className="title-form">Uncontrolled Form</h2>
      <div className={formStyles.container}>
        <form className={formStyles.form} onSubmit={handleSubmit}>
          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Name</span>
            <input
              type="text"
              ref={nameRef}
              className={formStyles.input}
              onChange={() => validateField('name')}
            />
          </label>
          {errors.name && <ErrorMessage message={errors.name} />}

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Age</span>
            <input
              type="number"
              ref={ageRef}
              className={formStyles.input}
              onChange={() => validateField('age')}
            />
          </label>
          {errors.age && <ErrorMessage message={errors.age} />}

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Email</span>
            <input
              type="email"
              ref={emailRef}
              className={formStyles.input}
              onChange={() => validateField('email')}
            />
          </label>
          {errors.email && <ErrorMessage message={errors.email} />}

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Password</span>
            <input
              type={showPassword ? 'text' : 'password'}
              ref={passwordRef}
              className={formStyles.input}
              onChange={() => validateField('password')}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className={formStyles.bthShow}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </label>
          {errors.password && <ErrorMessage message={errors.password} />}

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Repeat Password</span>
            <input
              type={showRepeatPassword ? 'text' : 'password'}
              ref={repeatPasswordRef}
              className={formStyles.input}
              onChange={() => validateField('repeatPassword')}
            />
            <button
              type="button"
              onClick={() => setShowRepeatPassword((prev) => !prev)}
              className={formStyles.bthShow}
            >
              {showRepeatPassword ? 'Hide' : 'Show'}
            </button>
          </label>
          {errors.repeatPassword && (
            <ErrorMessage message={errors.repeatPassword} />
          )}

          <div className={formStyles.div}>
            <span className={formStyles.labelSpan}>Gender</span>
            <div className={formStyles.divBlock}>
              <label className={formStyles.labelGender}>
                <span className={formStyles.labelSpan}>Man</span>
                <input
                  type="radio"
                  name="gender"
                  ref={genderRefs[0]}
                  value="man"
                  className={formStyles.radio}
                  onChange={() => validateField('gender')}
                />
              </label>

              <label className={formStyles.labelGender}>
                <span className={formStyles.labelSpan}>Woman</span>
                <input
                  type="radio"
                  name="gender"
                  ref={genderRefs[1]}
                  value="woman"
                  className={formStyles.radio}
                  onChange={() => validateField('gender')}
                />
              </label>
            </div>
            {errors.gender && <ErrorMessage message={errors.gender} />}
          </div>

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Textarea</span>
            <textarea
              ref={textareaRef}
              onChange={() => validateField('textarea')}
            ></textarea>
          </label>
          {errors.textarea && <ErrorMessage message={errors.textarea} />}

          <button className={formStyles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UncontrolledForm;
