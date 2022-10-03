import React, { useEffect, useState } from 'react';
import Header from '../Header';
import useStyles from '../../styles';
import DragonsList from '../DragonsList';
import dragonsApi from '../../../common/dragonsApi';

interface StateProps {
  items?: any;
  isloaded?: boolean;
  error?: string;
}

const HomeScreen: React.FC<StateProps> = (): any => {
  const classes = useStyles();
  const dragons = dragonsApi;
  const [items, setItems] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(dragons)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          // setIsLoaded(!isloaded);
          setIsLoaded(true);
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
        },
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.wrapper}>
      <Header />
      <DragonsList items={items} isloaded={isloaded} error={error} />
    </div>
  );
};

export default HomeScreen;
