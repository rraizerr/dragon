import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { UIContext } from '../../Unknown/UIContext';

import LoginForm from '../LoginForm/LoginForm';
import useStyles from '../../styles';
import ErrorMessageCallback from '../../../common/types';
import logo from '../../../img/logo.png';

const SignInScreen: React.FC = () => {
  const classes = useStyles();
  const { setAlert } = useContext(UIContext);

  const handleSignIn = React.useCallback<ErrorMessageCallback>(
    (errorMessage: string): void => {
      setAlert({
        show: true,
        severity: 'error',
        message: errorMessage,
      });
    },
    [setAlert],
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.container}>
        <Grid item xs={false} sm={3} md={6} className={classes.image} />
        <Grid item xs={12} sm={9} md={6} component={Paper} elevation={3} square>
          <div className={classes.paper}>
            <div className={classes.logo}>
              <img className={classes.logoImG} src={logo} alt="Logo" />
            </div>
            <h2 className={classes.loginTitle}>Login</h2>
            <LoginForm handleSignIn={handleSignIn} />
            <div className={classes.registrationLink}>
              <p className={classes.registrationLinkText}>
                Don’t have an account?
              </p>
              <Link to="/register" className={classes.registrationLinkLink}>
                Register
              </Link>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default SignInScreen;
