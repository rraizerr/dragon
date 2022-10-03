import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import useStyles from '../../styles';

const NotFoundScreen: React.FC = () => {
  const classes = useStyles();
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.imageNotFound}
    >
      <div className={classes.notFoundWrapper}>
        <p>Mayday... Mayday...</p>
        <p>Something is wrong!</p>
        <p>We do not see the target</p>
        <Typography variant="h4">Page not found</Typography>
        <Link
          to="/"
          style={{ marginTop: '40px', marginBottom: 0, textAlign: 'center' }}
          className={classes.wikiLink}
        >
          Back to home page
        </Link>
      </div>
    </Box>
  );
};

export default NotFoundScreen;
