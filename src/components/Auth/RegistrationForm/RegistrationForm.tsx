import React, { useState } from 'react';
import { Formik, Form, useField, ErrorMessage } from 'formik';
import { useAuth } from 'reactfire';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { RegisterValidation } from '../Validation';
import useStyles from '../../styles';

const Input = ({ name, label, ...props }: any) => {
  const classes = useStyles();
  const [field, meta] = useField(name);

  return (
    <>
      <label className={classes.placeholderLabel} htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`${classes.validateFormInput} || 
        ${meta.error && meta.touched ? classes.inputLoginError : ''}`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className={classes.inputFeedback}
      />
    </>
  );
};

const RegistrationForm = ({ handleRegister }: any) => {
  const classes = useStyles();
  const auth = useAuth();
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePassword = (setPassword: any, password: string | boolean) => {
    setPassword(!password);
  };

  const signUp = async (values: any) => {
    await auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((result) => {
        result?.user?.updateProfile({
          displayName: values.name,
        });
        window.localStorage.setItem('currentUser', values.name);
      })
      .catch((err) => {
        if (err) {
          const errorMessage = err.message;
          handleRegister(errorMessage);
        }
      });
  };

  const onSubmit = async (values: any) => {
    await signUp(values);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={onSubmit}
      validationSchema={RegisterValidation}
    >
      {(props) => {
        const { isSubmitting } = props;
        return (
          <Form className={classes.validateForm}>
            <div className={classes.registerPlaceholder}>
              <Input name="email" label="Email" />
            </div>
            <div className={classes.registerPlaceholder}>
              <Input name="name" label="Full name" />
            </div>
            <div className={classes.registerPlaceholder}>
              <Input
                name="password"
                label="Password"
                type={passwordShown ? 'text' : 'password'}
              />
              <VisibilityIcon
                className={classes.passShowBtn}
                onClick={() => togglePassword(setPasswordShown, passwordShown)}
                aria-label="Show password"
                type="button"
                tabIndex={0}
              />
            </div>
            <div className={classes.registerPlaceholder}>
              <Input
                name="confirmPassword"
                label="Confirm Password"
                type={confirmPasswordShown ? 'text' : 'password'}
              />
              <VisibilityIcon
                className={classes.passShowBtn}
                onClick={() =>
                  togglePassword(setConfirmPasswordShown, confirmPasswordShown)
                }
                aria-label="Show password"
                type="button"
                tabIndex={0}
              />
            </div>
            <button
              className={classes.loginFormBtn}
              type="submit"
              disabled={isSubmitting}
            >
              Register
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
