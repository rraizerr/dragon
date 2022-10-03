import { object, string, ref } from 'yup';

export const RegisterValidation = object().shape({
  name: string()
    .required('Required')
    .matches(/\w\s\w/, 'Field has to contain at least 2 words')
    .matches(
      /^[A-Z][a-z]* [A-Z][a-z]*$/,
      'Name has to start from a capital letter',
    ),
  email: string()
    .required('Valid email required')
    .email('Valid email required'),
  password: string()
    .min(12, 'Password length has to be minimum 12 characters')
    .matches(/(?=.*[0-9])/, 'Password must contain a number')
    .required('Required'),
  confirmPassword: string()
    .required('Please confirm your password')
    .oneOf([ref('password')], 'Passwords do not match'),
});

export const LoginValidation = object().shape({
  email: string().email().required('Required field'),
  password: string()
    .required('No password provided')
    .min(8, 'Password must be 8 characters long')
    .matches(/(?=.*[0-9])/, 'Password must contain a number'),
});
