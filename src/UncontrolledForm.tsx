import formStyles from './styles/form.module.css';
import { useState, MouseEvent, FC, useRef } from 'react';
import * as yup from 'yup';
import { addUncontrForm } from './redux/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import FormData from './types/formType';
import convertToBase64 from './utils/converTo64Image';
import { useNavigate } from 'react-router';
import schema from './utils/validSchema';
import FormErrors from './types/formErrors';
import ErrorMessage from './components/errorMessage';
import { RootState } from './redux/store';

const UncontrolledForm: FC = () => {
  const dispatch = useDispatch();
  const contries: string[] = useSelector(
    (state: RootState) => state.controlledForm.countries
  );
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const repeatPasswordRef = useRef<HTMLInputElement | null>(null);
  const genderRefs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];
  const imageRef = useRef<HTMLInputElement | null>(null);
  const termsRef = useRef<HTMLInputElement | null>(null);
  const contriesRef = useRef<HTMLInputElement | null>(null);
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
      image: imageRef,
      terms: termsRef,
      country: contriesRef,
      textarea: textareaRef,
    };

    const value =
      fieldName === 'gender'
        ? genderRefs[0].current?.checked
          ? 'man'
          : genderRefs[1].current?.checked
            ? 'woman'
            : null
        : fieldName === 'terms'
          ? termsRef.current?.checked
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

    const imageFile = imageRef.current?.files?.[0];

    const funImage = async (imageFile: File | undefined) => {
      if (imageFile) {
        try {
          const base64Image = await convertToBase64(imageFile);
          return base64Image;
        } catch (error) {
          console.error('Error converting image to Base64:', error);
        }
      }
      return 'none image';
    };

    const base64Image = await funImage(imageFile);

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
      image: base64Image,
      terms: termsRef.current?.checked || false,
      country: contriesRef.current?.value || '',
      textarea: textareaRef.current?.value || '',
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      dispatch(addUncontrForm(formData));
      console.log('Form submitted successfully:', formData);
      navigate('/', { replace: true });
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
            <span className={formStyles.labelSpan}>Image</span>
            <input
              type="file"
              ref={imageRef}
              accept="image/png,image/jpeg,image/jpg"
              className={formStyles.input}
              onChange={() => validateField('image')}
            />
          </label>
          {errors.image && <ErrorMessage message={errors.image as string} />}

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>
              Terms and Conditions agreement
            </span>
            <input
              type="checkbox"
              ref={termsRef}
              className={formStyles.checkbox}
              onChange={() => validateField('terms')}
            />
          </label>
          {errors.terms && <ErrorMessage message={errors.terms} />}

          <label className={formStyles.label} htmlFor="country">
            <span className={formStyles.labelSpan}>Сountry</span>
            <input
              ref={contriesRef}
              list="options"
              placeholder="Alabama"
              className={formStyles.input}
              id="country"
              onChange={() => validateField('country')}
            ></input>
            <datalist id="options">
              {contries &&
                contries.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </datalist>
          </label>
          {errors.country && <ErrorMessage message={errors.country} />}
          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Textarea</span>
            <textarea
              className={`${formStyles.textarea} ${formStyles.input}`}
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
