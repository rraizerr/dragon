import React from 'react';
import { Link } from 'react-router-dom';
import LinearDeterminate from '../localization/linearDeterminate';

import useStyles from '../../styles';

interface StateProps {
  items?: Array<any>;
  isloaded?: boolean;
  error?: string;
}

const DragonsList: React.FC<StateProps> = ({ items, isloaded, error }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.contentContainer}>
        <h1 className={classes.name}>Dragons List</h1>
        {error ? (
          <div className={classes.contentContainer}>
            <p>Data loading error</p>
            <p>{error.message}</p>
          </div>
        ) : null}
        {!isloaded ? (
          <div className={classes.contentContainer}>
            <p>Loading...</p>
            <LinearDeterminate />
          </div>
        ) : null}
        {items.map((item: any) => (
          <div className={classes.contentContainer} key={item.id}>
            <h3 className={classes.name}>{item.name}</h3>
            <div className={classes.listImgWrapper}>
              <Link to={`review/${item.id}`}>
                <img
                  className={classes.dragonListImg}
                  src={item.flickr_images[0]}
                  alt={item.name}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragonsList;
