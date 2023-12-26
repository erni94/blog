import * as yup from 'yup';

const validSchemaReg = yup.object().shape({
  email: yup.string().email('Please enter a valid email.').required('Email is required.'),
  username: yup
    .string()
    .min(3, 'Your username needs to be at least 6 characters.')
    .max(20, 'Your username should not exceed 20 characters.')
    .required('Username is required.'),
  password: yup
    .string()
    .min(6, 'Your password needs to be at least 6 characters.')
    .max(40, 'Your password should not exceed 40 characters.')
    .required('Password is required.'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.')
    .required('Password confirmation is required.'),
  agree: yup
    .boolean()
    .oneOf([true], 'Consent for personal data processing is required.')
    .required('Consent for personal data processing is required.'),
});

const validSchemaLog = yup.object().shape({
  email: yup.string().email('Please enter a valid email.').required('Email is required.'),
  password: yup.string().required('Password is required.'),
});

const validSchemaEdit = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  newPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must be at most 40 characters')
    .required('Password is required'),
  imgUrl: yup.string().url('Invalid URL for image').required('Avatar image URL is required'),
});

export { validSchemaReg, validSchemaLog, validSchemaEdit };
