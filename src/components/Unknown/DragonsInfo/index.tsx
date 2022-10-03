import React, { Component, useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LinearDeterminate from '../localization/linearDeterminate';
import useStyles from '../../styles';

interface StateProps {
  items?: Array<any>;
  isloaded?: boolean;
  error?: string;
}

export interface RouteParams {
  id: string;
  dragons: string;
}

const DragonsInfo: React.FC<StateProps & RouteParams> = ({
  dragons,
  id,
}: any) => {
  const classes = useStyles();
  const carouselInterval = 30000;
  const [items, setItems] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(dragons)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
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
      <div className={classes.contentContainer}>
        <h2 className={classes.name}>Information about:</h2>
        {error ? (
          <div className={classes.contentContainer}>
            <p>Data loading error</p>
            {/* <p>{error.message}</p> */}
          </div>
        ) : null}
        {!isloaded ? (
          <div className={classes.contentContainer}>
            <p>Loading...</p>
            <LinearDeterminate />
          </div>
        ) : null}
        {items.map((item: any) =>
          item.id === id ? (
            <div className={classes.contentContainer} key={item.id}>
              <h1 className={classes.name}>{item.name}</h1>
              <div className={classes.carouselWrapper}>
                <Carousel interval={carouselInterval}>
                  {item.flickr_images.map((itemImg: any) => (
                    <Carousel.Item key={itemImg}>
                      <img
                        className={classes.dragonImg}
                        src={itemImg}
                        alt="Dragon"
                      />
                      <Carousel.Caption>
                        <h3>SpaceX {item.name}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <p className={classes.param}>
                <span>
                  Height - <b>{item.height_w_trunk.meters}</b> meters
                </span>
                <span>
                  Diameter - <b>{item.diameter.meters}</b> meters
                </span>
                <span>
                  Weight - <b>{item.dry_mass_kg}</b> kg
                </span>
                <span>
                  First flight in <b>{item.first_flight}</b>
                </span>
              </p>
              <p className="description">{item.description}</p>
              <a className={classes.wikiLink} href={item.wikipedia}>
                More information on wiki
              </a>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};

export default DragonsInfo;

// class DragonsInfo extends Component<any, any> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: [],
//       carouselInterval: 30000,
//     };
//   }

//   componentDidMount(): void {
//     const { getApiUrl }: any = this.props;
//     fetch(getApiUrl)
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result,
//           });
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         },
//       );
//   }

//   render() {
//     const { id } = this.props;
//     const { error, isLoaded, items, carouselInterval }: any = this.state;
//     if (error) {
//       return (
//         <div className="content-container">
//           <p>Data loading error</p>
//           <p>{error.message}</p>
//         </div>
//       ); // eslint-disable-next-line
//     } else if (!isLoaded) {
//       return (
//         <div className="content-container mt-2">
//           <LinearDeterminate />
//         </div>
//       ); // eslint-disable-next-line
//     } else {
//       return (
//         <>
//           {items.map((item: any) =>
//             item.id === id ? (
//               <div className="content-container" key={item.id}>
//                 <h3 className="name">{item.name}</h3>
//                 <div className="carousel-wrapper">
//                   <Carousel interval={carouselInterval}>
//                     {item.flickr_images.map((itemImg: any) => (
//                       <Carousel.Item key={itemImg}>
//                         <img
//                           className="dragon-img"
//                           src={itemImg}
//                           alt="Dragon"
//                         />
//                         <Carousel.Caption>
//                           <h3>SpaceX {item.name}</h3>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                     ))}
//                   </Carousel>
//                 </div>
//                 <p className="param">
//                   <span className="height">
//                     Height - {item.height_w_trunk.meters} meters
//                   </span>
//                   <span className="weight">Weight - {item.dry_mass_kg} kg</span>
//                   <span className="first-flight">
//                     First flight at {item.first_flight}
//                   </span>
//                 </p>
//                 <p className="description">{item.description}</p>
//                 <a className="wiki-link" href={item.wikipedia}>
//                   more information on wiki
//                 </a>
//               </div>
//             ) : null,
//           )}
//         </>
//       );
//     }
//   }
// }

// export default DragonsInfo;
