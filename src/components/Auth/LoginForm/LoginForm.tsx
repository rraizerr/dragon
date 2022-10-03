import React, { useState } from 'react';
import { Formik } from 'formik';
import { useAuth } from 'reactfire';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { LoginValidation } from '../Validation';
import useStyles from '../../styles';

const LoginForm = ({ handleSignIn }: any) => {
  const classes = useStyles();
  const [passwordShown, setPasswordShown] = useState(false);
  const auth = useAuth();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const signIn = async (values: any) => {
    await auth
      .signInWithEmailAndPassword(values.email, values.password)
      .catch((err) => {
        if (err) {
          const errorMessage = err.message;
          handleSignIn(errorMessage);
        }
      });
  };

  const onSubmit = async (values: any) => {
    await signIn(values);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={LoginValidation}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }: any = props;

        return (
          <form className={classes.validateForm} onSubmit={handleSubmit}>
            <div className={classes.placeholder}>
              {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
              <label htmlFor="email" className={classes.placeholderLabel}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  classes.validateFormInput ||
                  (errors.email && touched.email && 'error')
                }
              />
              {errors.email && touched.email && (
                <div className={classes.inputFeedback}>{errors.email}</div>
              )}
            </div>
            <div className={classes.placeholder}>
              <label htmlFor="password" className={classes.placeholderLabel}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type={passwordShown ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  classes.validateFormInput ||
                  (errors.password && touched.password && 'error')
                }
              />
              <VisibilityIcon
                className={classes.passShowBtn}
                onClick={togglePassword}
                aria-label="Show password"
                type="button"
                tabIndex={0}
              />
              {errors.password && touched.password && (
                <div className={classes.inputFeedback}>{errors.password}</div>
              )}
            </div>
            <button
              className={classes.loginFormBtn}
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
