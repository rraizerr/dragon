import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import { auth } from '../../../../common/firebaseApp';
import useStyles from '../../../styles';
import defoultAvatar from '../../../../img/defoultAvatar.jpg';

const UserProfile: React.FC = () => {
  const classes = useStyles();
  const user = auth.currentUser;

  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.contentContainer}>
        <h2 className={classes.name}>My Profile</h2>
        {user !== null ? (
          <>
            <img
              className={classes.avatar}
              src={user.photoURL ? user.photoURL : defoultAvatar}
              alt="UserAvatar"
            />
            <p>
              User name - <span>{user.displayName}</span>
            </p>
            <p>
              User email - <span>{user.email}</span>
            </p>
            <Link to="/profile/edit" className={classes.wikiLink}>
              Edit Profile
            </Link>
          </>
        ) : (
          <p>Data loading error. Please try again later.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
