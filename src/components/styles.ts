import { makeStyles } from '@material-ui/core/styles';
import dragonImg from '../img/dragonImg.jpg';
import notFoundImg from '../img/notFoundImg.jpg';

const useStyles = makeStyles({
  '@global': {
    '*': {
      scrollbarWidth: 'thin',
      scrollbarColor: '#B7B7B7 transparent',
      '&::-webkit-scrollbar': {
        width: 14,
        height: 14,
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        border: '4px solid rgba(245, 245, 245, 1)',
      },
      '&::-webkit-scrollbar-thumb:focus': {
        backgroundColor: '#adadad',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
    },
  },
  root: {
    height: '100vh',
    maxWidth: 1440,
    margin: '0 auto',
  },
  image: {
    backgroundImage: `url(${dragonImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    height: '100vh',
    marginLeft: 30,
    marginRight: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  validateForm: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 375,
    width: '100%',
    margin: '0 auto',
    flexGrow: 1,
  },
  placeholderLabel: {
    position: 'absolute',
    top: 7,
    left: 10,
    zIndex: 10,
    marginBottom: 5,
    height: 22,
  },
  validateFormInput: {
    display: 'block',
    // width: 375,
    width: '100%',
    position: 'relative',
    marginBottom: 25,
    paddingTop: 29,
    paddingRight: 12,
    paddingBottom: 0,
    paddingLeft: 12,
    borderRadius: '5px 5px 0 0',
    border: '1px solid rgba(0, 0, 0, 0.09)',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '24px',
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
  },
  placeholder: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    position: 'relative',
    marginBottom: 25,
  },
  registerPlaceholder: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    position: 'relative',
    marginBottom: 25,
    '@media (width:1024px)': {
      marginBottom: 0,
    },
    '@media (max-width:540px)': {
      marginBottom: 0,
    },
  },
  inputFeedback: {
    color: 'rgb(235, 54, 54)',
    marginTop: -15,
    fontSize: 14,
    lineHeight: 0,
    marginBottom: 15,
  },
  inputLoginError: {
    borderColor: '#ff0000',
  },
  loginFormBtn: {
    padding: '6px 16px',
    backgroundColor: `rgba(245, 0, 87, 1)`,
    color: '#ffffff',
    fontSize: '15px',
    lineHeight: '26px',
    border: '1px solid rgba(245, 0, 87, 1)',
    borderRadius: 5,
    textTransform: `uppercase`,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(245, 0, 87, 0.8)',
      color: '#ffffff',
    },
    '&:disabled': {
      cursor: 'wait',
      backgroundColor: 'rgba(245, 0, 87, 0.1)',
    },
  },
  passShowBtn: {
    position: 'absolute',
    top: 24,
    right: 11,
    display: 'block',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    maxWidth: 1440,
    margin: '0 auto',
  },
  loginTitle: {
    display: 'block',
    fontSize: 40,
    fontWeight: 700,
    lineHeight: '112px',
    marginTop: 10,
    marginBottom: 20,
    '@media (min-width:1080px)': {
      marginTop: 38,
      marginBottom: 61,
    },
  },
  registerTitle: {
    display: 'block',
    fontSize: 40,
    fontWeight: 700,
    lineHeight: '112px',
    marginTop: 38,
    marginBottom: 61,
    '@media (width:1280px)': {
      marginTop: 0,
      marginBottom: 0,
    },
    '@media (width:1024px)': {
      marginTop: 0,
      marginBottom: 0,
      lineHeight: '80px',
    },
    '@media (max-width:540px)': {
      fontSize: 30,
      marginTop: 5,
      marginBottom: 10,
      lineHeight: '80px',
    },
  },
  logo: {
    maxWidth: 300,
    marginTop: 25,
    '@media (min-width:1080px)': {
      marginTop: 100,
    },
  },
  registerLogo: {
    maxWidth: 300,
    marginTop: 100,
    '@media (width:1280px)': {
      marginTop: 20,
    },
    '@media (width:1024px)': {
      marginTop: 5,
    },
    '@media (max-width:540px)': {
      marginTop: 10,
    },
  },
  logoImG: {
    width: '100%',
  },
  registrationLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 70,
  },
  registrationLinkText: {
    fontSize: 14,
    lineHeight: '84px',
    fontWeight: 600,
    margin: 0,
    letterSpacing: '-1.4px',
    '@media (width:1024px)': {
      lineHeight: '50px',
    },
  },
  registrationLinkLink: {
    fontSize: 12,
    lineHeight: '22px',
    fontWeight: 500,
    textTransform: 'uppercase',
    color: 'rgba(245, 0, 87, 1)',
    textDecoration: 'none',
  },
  buttonLogout: {
    position: 'absolute',
    top: 70,
    right: 2,
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 400,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    border: '1px solid #ebebeb',
    borderRadius: 5,
    color: '#000000',
    '&:hover': {
      cursor: 'pointer',
      borderColor: '#d3d3d3',
    },
  },
  userMenu: {
    position: 'absolute',
    top: 70,
    right: 2,
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 400,
    padding: 0,
    margin: 0,
    border: '1px solid #ebebeb',
    borderRadius: 5,
    color: '#000000',
    listStyle: 'none',
  },
  userMenuBtn: {
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    border: 'none',
    width: '100%',
    textAlign: 'left',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#d3d3d3',
    },
  },
  userMenuLink: {
    display: 'block',
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    border: 'none',
    width: '100%',
    textDecoration: 'none',
    color: '#000000',
    backgroundColor: '#f0f0f0',
    '&:hover': {
      cursor: 'pointer',
      color: '#000000',
      backgroundColor: '#d3d3d3',
    },
  },
  positionForBtn: {
    position: 'relative',
  },
  buttonWrapper: {
    marginTop: 114,
  },
  mainCntainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 28,
    paddingLeft: 25,
    margin: '0 auto',
    backgroundColor: '#fff',
  },
  wrapper: {
    margin: '0 auto',
    maxWidth: 1440,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1440,
    margin: '0 auto',
    paddingLeft: 10,
    paddingRight: 10,
  },
  name: {
    marginTop: 20,
    marginBottom: 10,
  },
  carouselWrapper: {
    maxWidth: 800,
    marginBottom: 20,
  },
  dragonImg: {
    width: '100%',
  },
  param: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
  wikiLink: {
    marginBottom: 20,
    padding: '6px 10px',
    backgroundColor: `rgba(245, 0, 87, 1)`,
    color: '#ffffff',
    fontSize: '15px',
    lineHeight: '26px',
    border: '1px solid rgba(245, 0, 87, 1)',
    borderRadius: 5,
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(245, 0, 87, 0.8)',
      color: '#ffffff',
    },
  },
  listImgWrapper: {
    maxWidth: 300,
    marginBottom: 20,
  },
  dragonListImg: {
    maxWidth: '100%',
  },
  avatar: {
    maxWidth: 280,
    borderRadius: 20,
    marginBottom: 20,
  },
  editProfileForm: {
    width: 280,
    display: 'flex',
    flexDirection: 'column',
  },
  editProfileBtnWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  editProfileBtn: {
    padding: '6px 16px',
    backgroundColor: `rgba(245, 0, 87, 1)`,
    color: '#ffffff',
    fontSize: '15px',
    lineHeight: '26px',
    border: '1px solid rgba(245, 0, 87, 1)',
    borderRadius: 5,
    textTransform: `uppercase`,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(245, 0, 87, 0.8)',
      color: '#ffffff',
    },
    '&:disabled': {
      cursor: 'default',
      backgroundColor: 'rgba(245, 0, 87, 0.1)',
    },
  },
  error: {
    color: 'red',
  },
  goHomeLink: {
    color: '#ffffff',
    '&:hover': {
      color: '#ffffff',
    },
  },
  imageNotFound: {
    backgroundImage: `url(${notFoundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  notFoundWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    margin: '0 auto',
    maxWidth: 1440,
    backgroundColor: 'rgb(255, 255, 255, 0.4);',
    padding: 40,
    borderRadius: 16,
    '@media (max-width:300px)': {
      padding: 20,
    },
  },
});

export default useStyles;
