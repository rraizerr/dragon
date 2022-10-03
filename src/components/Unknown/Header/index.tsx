import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'reactfire';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { UIContext } from '../UIContext';
import { auth } from '../../../common/firebaseApp';
import clearFirestoreCache from '../../../common/clearFirestoreCache';
import useStyles from '../../styles';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const Header: React.FC = () => {
  const muiClasses = useStyle();
  const classes = useStyles();
  const [showButton, setShowButton] = useState(false);
  const { currentUser } = useAuth();
  const localUser = window.localStorage.getItem('currentUser');
  let userIconShown;
  const { setAlert } = useContext(UIContext);

  const signUpGreetings = React.useCallback(() => {
    setAlert({
      show: true,
      severity: 'info',
      message: 'Welcome on board 🚀',
    });
  }, [setAlert]);

  if (localUser !== null) {
    window.localStorage.removeItem('currentUser');
    const greetings: NodeJS.Timeout = setTimeout(() => {
      signUpGreetings();
      return clearInterval(greetings);
    }, 500);
  }

  const showLogoutButton = () => {
    setShowButton(!showButton);
  };

  const logout = () => {
    auth.signOut();
    clearFirestoreCache();
  };

  if (currentUser?.displayName) {
    userIconShown = currentUser?.displayName.match(/\b(\w)/g);
  } else if (!currentUser?.displayName && localUser !== null) {
    userIconShown = localUser.match(/\b(\w)/g);
  } else {
    userIconShown = 'U';
  }

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: 1440,
          backgroundColor: '#f50057',
          margin: '0 auto',
        }}
      >
        <AppBar
          position="static"
          sx={{
            maxWidth: 1440,
            backgroundColor: '#f50057',
            margin: '0 auto',
          }}
        >
          <Toolbar>
            <Link to="/" className={classes.goHomeLink}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dragon
            </Typography>
            <Button onClick={showLogoutButton} color="inherit">
              <div className={muiClasses.root}>
                <Avatar>{userIconShown}</Avatar>
              </div>
            </Button>
            <ul
              className={classes.userMenu}
              style={{
                display: showButton ? 'block' : 'none',
              }}
            >
              <li>
                <Link to="/profile" className={classes.userMenuLink}>
                  Profile
                </Link>
              </li>
              <li>
                <button
                  className={classes.userMenuBtn}
                  onClick={logout}
                  type="button"
                >
                  Logout
                </button>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
