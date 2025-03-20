import * as yup from 'yup';

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
  // image: yup.required('Image is required'),
  image: yup.mixed<File>().required('Image is required'),
  // .test('fileSize', 'The file is too big (> 1 MB)', (value) => {
  //   return value && value.size <= 2097152;
  // }),
  // .test('fileSize', 'File size is too large (max 2MB)', (value) => {
  //   // if (!value) return false;
  //   // const file = value as File;
  //   // return file.size <= 2 * 1024 * 1024;
  //   return value && value.size <= ; // 2MB
  // }),
  // .test('fileType', 'Unsupported file format (only PNG and JPEG)', (value) => {
  //   // if (!value) return false;
  //   // const file = value as File;
  //   // return ['image/jpeg', 'image/png'].includes(file.type);
  //   return value && ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type);
  // }),
  terms: yup
    .boolean()
    .oneOf([true], 'Terms is required')
    .required('Terms is required'),
  // terms: yup
  // .boolean()
  // .oneOf([true], 'Terms is required')
  // .required('Terms is required'),
  country: yup.string().required('Country is required'),
  textarea: yup.string().required('Textarea is required'),
});

export default schema;
