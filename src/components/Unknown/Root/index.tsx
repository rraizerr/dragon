import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from 'reactfire';
import AuthenticatedLayout from '../AuthenticatedLayout';
import GuestLayout from '../GuestLayout';
import HomeScreen from '../HomeScreen';
import NotFoundScreen from '../NotFoundScreen';
import SignInScreen from '../../Auth/SignInScreen';
import RegistrationScreen from '../../Auth/RegistrationScreen/index';
import ReviewPage from '../ReviewPage';
import UserProfile from '../Profiles/UserProfile';
import EditUserProfile from '../Profiles/EditUserProfile';

const Root: React.FC = () => {
  const {
    data: user,
    // hasEmitted,
    firstValuePromise,
  } = useUser();
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const isLogged = !!user;
  useEffect(() => {
    firstValuePromise.then(() => setIsUserLoaded(true));
  }, [firstValuePromise, setIsUserLoaded]);

  // doesn't always work, but suddenly works when subscribing to `firstValuePromise`
  // thus we use `isUserLoaded` below
  // if (!hasEmitted) {
  //   return null;
  // }
  if (!isUserLoaded) {
    return null;
  }

  if (isLogged) {
    return (
      <AuthenticatedLayout>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/review/:id" component={ReviewPage} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/profile/edit" component={EditUserProfile} />
          <Route exact path="/login" component={() => <Redirect to="/" />} />
          <Route exact path="/register" component={() => <Redirect to="/" />} />
          <Route path="*" component={NotFoundScreen} />
        </Switch>
      </AuthenticatedLayout>
    );
  }

  return (
    <GuestLayout>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route exact path="/flats" component={() => <Redirect to="/login" />} />
        <Route
          exact
          path="/review/:id"
          component={() => <Redirect to="/login" />}
        />
        <Route
          exact
          path="/profile"
          component={() => <Redirect to="/login" />}
        />
        <Route
          exact
          path="/profile/edit"
          component={() => <Redirect to="/login" />}
        />
        <Route exact path="/login" component={SignInScreen} />
        <Route exact path="/register" component={RegistrationScreen} />
        <Route exact path="*" component={NotFoundScreen} />
      </Switch>
    </GuestLayout>
  );
};

export default Root;
