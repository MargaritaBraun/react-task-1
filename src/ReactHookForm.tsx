import { useForm, SubmitHandler } from 'react-hook-form';
import formStyles from './styles/form.module.css';
import schema from './utils/validSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import ErrorMessage from './components/errorMessage';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import FormData from './types/formType';

const ReactHookForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('data', data);
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false);

  const contries: string[] = useSelector(
    (state: RootState) => state.controlledForm.countries
  );

  return (
    <>
      <h2 className="title-form">React Hook Form</h2>
      <div className={formStyles.container}>
        <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Name</span>
            <input
              type="text"
              className={formStyles.input}
              {...register('name')}
            />
          </label>
          {errors.name && <ErrorMessage message={errors.name.message} />}

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Age</span>
            <input
              type="number"
              className={formStyles.input}
              {...register('age')}
            />
          </label>
          {errors.age && <ErrorMessage message={errors.age.message} />}

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Email</span>
            <input
              type="email"
              className={formStyles.input}
              {...register('email')}
            />
          </label>
          {errors.email && <ErrorMessage message={errors.email.message} />}

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Password</span>
            <input
              type={showPassword ? 'text' : 'password'}
              className={formStyles.input}
              {...register('password')}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className={formStyles.bthShow}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </label>
          {errors.password && (
            <ErrorMessage message={errors.password.message} />
          )}

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Repeat Password</span>
            <input
              type={showRepeatPassword ? 'text' : 'password'}
              className={formStyles.input}
              {...register('repeatPassword')}
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
            <ErrorMessage message={errors.repeatPassword.message} />
          )}

          <div className={formStyles.div}>
            <span className={formStyles.labelSpan}>Gender</span>
            <div className={formStyles.divBlock}>
              <label className={formStyles.labelGender}>
                <span className={formStyles.labelSpan}>Man</span>
                <input
                  type="radio"
                  value="man"
                  className={formStyles.radio}
                  {...register('gender')}
                />
              </label>

              <label className={formStyles.labelGender}>
                <span className={formStyles.labelSpan}>Woman</span>
                <input
                  type="radio"
                  value="woman"
                  className={formStyles.radio}
                  {...register('gender')}
                />
              </label>
            </div>
          </div>
          {errors.gender && <ErrorMessage message={errors.gender.message} />}

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Image</span>
            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              className={formStyles.input}
              {...register('image')}
            />
          </label>
          {errors.image && <ErrorMessage message={errors.image.message} />}

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>
              Terms and Conditions agreement
            </span>
            <input
              type="checkbox"
              className={formStyles.checkbox}
              {...register('terms')}
            />
          </label>
          {errors.terms && <ErrorMessage message={errors.terms.message} />}

          <label className={formStyles.label} htmlFor="country">
            <span className={formStyles.labelSpan}>Сountry</span>
            <input
              {...register('country')}
              list="options"
              placeholder="Select a country"
              className={formStyles.input}
              id="country"
            />
            <datalist id="options">
              {contries?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </datalist>
          </label>
          {errors.country && <ErrorMessage message={errors.country.message} />}

          <label className={formStyles.label}>
            <span className={formStyles.labelSpan}>Textarea</span>
            <textarea
              className={`${formStyles.textarea} ${formStyles.input}`}
              {...register('textarea')}
            ></textarea>
          </label>
          {errors.textarea && (
            <ErrorMessage message={errors.textarea.message} />
          )}

          <button className={formStyles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ReactHookForm;
