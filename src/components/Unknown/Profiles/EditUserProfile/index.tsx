// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../../Header';
// import { auth } from '../../../../common/firebaseApp';
// import useStyles from '../../../styles';

// const EditUserProfile: React.FC = (): any => {
//   const classes = useStyles();
//   const user = auth.currentUser;
//   const [name, setName] = useState(user?.displayName ?? '');
//   const [email, setEmail] = useState(user?.email ?? '');
//   const [error, setError] = useState(null);
//   const [buttonDisabled, setBbuttonDisabled] = useState(true);
//   const [dataChange, setDataChange] = useState(false);
//   const [emailDirty, setEmailDirty] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [nameDirty, setNameDirty] = useState(false);
//   const [nameError, setNameError] = useState('');
//   const message = {
//     success: 'Data changed successfully',
//     error: 'Data loading error. Please try again later',
//   };
//   const onBlur = (e: any) => {
//     const emailCondition =
//       (email === ''
//         ? (setEmailDirty(true),
//           setBbuttonDisabled(true),
//           setEmailError('Email field required'))
//         : null,
//       e.target.value === user?.email ? setBbuttonDisabled(true) : null);
//     const nameCondition =
//       (name === ''
//         ? (setNameDirty(true),
//           setBbuttonDisabled(true),
//           setNameError('Name field required'))
//         : null,
//       e.target.value === user?.displayName ? setBbuttonDisabled(true) : null);

//     switch (e.target.name) {
//       case 'email':
//         // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//         emailCondition;
//         break;
//       case 'name':
//         // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//         nameCondition;
//         break;
//       // no default
//     }
//   };

//   const onNameChange = (e: any) => {
//     setName(e.target.value);
//     setBbuttonDisabled(false);
//     setDataChange(false);
//     const twoWords = /\w\s\w/;
//     const capitalize = /^[A-Z][a-z]* [A-Z][a-z]*$/;
//     if (!String(e.target.value).match(twoWords)) {
//       setNameError('Field has to contain at least 2 words');
//       setBbuttonDisabled(true);
//     } else if (!String(e.target.value).match(capitalize)) {
//       setNameError('Name has to start from a capital letter');
//       setBbuttonDisabled(true);
//     } else {
//       setNameError('');
//     }
//   };

//   const onEmailChange = (e: any) => {
//     setEmail(e.target.value);
//     setBbuttonDisabled(false);
//     setDataChange(false);
//     const re =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!String(e.target.value).toLowerCase().match(re)) {
//       setEmailError('Email must be a valid email');
//       setBbuttonDisabled(true);
//     } else {
//       setEmailError('');
//     }
//   };

//   const handleClick = () => {
//     if (name !== user?.displayName) {
//       user
//         ?.updateProfile({ displayName: name })
//         .then(() => {
//           setBbuttonDisabled(true);
//           setDataChange(true);
//         })
//         .catch((err) => setError(err.message));
//     }

//     user
//       ?.updateEmail(email)
//       .then(() => {
//         setBbuttonDisabled(true);
//         setDataChange(true);
//       })
//       .catch((err) => setError(err.message));
//   };

//   return (
//     <div className={classes.wrapper}>
//       <Header />
//       <div className={classes.contentContainer}>
//         <h2 className={classes.name}>Edit Profile</h2>
//         {user !== null ? (
//           <>
//             <img
//               className={classes.avatar}
//               src={
//                 user.photoURL
//                   ? user.photoURL
//                   : 'https://zn.ua/img/article/4626/2_main.jpg'
//               }
//               alt="UserAvatar"
//             />
//             <div className={classes.editProfileForm}>
//               <div className={classes.placeholder}>
//                 {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
//                 <label className={classes.placeholderLabel} htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   className={classes.validateFormInput}
//                   onChange={onNameChange}
//                   onBlur={(e) => onBlur(e)}
//                   name="name"
//                   type="text"
//                   id="name"
//                   value={name}
//                 />
//                 {nameDirty && nameError && (
//                   <div className={classes.inputFeedback}>{nameError}</div>
//                 )}
//               </div>
//               <div className={classes.placeholder}>
//                 {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
//                 <label className={classes.placeholderLabel} htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   className={classes.validateFormInput}
//                   onChange={onEmailChange}
//                   onBlur={(e) => onBlur(e)}
//                   name="email"
//                   type="email"
//                   id="email"
//                   value={email}
//                 />
//                 {emailDirty && emailError && (
//                   <div className={classes.inputFeedback}>{emailError}</div>
//                 )}
//               </div>
//               <div className={classes.editProfileBtnWrapper}>
//                 <button
//                   className={classes.editProfileBtn}
//                   onClick={handleClick}
//                   type="button"
//                   disabled={buttonDisabled}
//                 >
//                   Save
//                 </button>
//                 <Link to="/profile" className={classes.wikiLink}>
//                   Go back
//                 </Link>
//               </div>
//               {dataChange ? <p>{message.success}</p> : null}
//               {error ? <p className={classes.error}>{error}</p> : null}
//             </div>
//           </>
//         ) : (
//           <p>{message.error}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EditUserProfile;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Header from '../../Header';
import { auth, storage } from '../../../../common/firebaseApp';
import useStyles from '../../../styles';
import defoultAvatar from '../../../../img/defoultAvatar.jpg';

const EditUserProfile: React.FC = (): any => {
  const classes = useStyles();
  const user = auth.currentUser;
  const [name, setName] = useState(user?.displayName ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [error, setError] = useState<string | null>(null);
  const [buttonDisabled, setBbuttonDisabled] = useState(true);
  const [dataChange, setDataChange] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [photoURL, setProtoURL] = useState(defoultAvatar);
  const [upliadBtnDisabled, setUpliadBtnDisabled] = useState(true);
  const message = {
    success: 'Data changed successfully',
    error: 'Data loading error. Please try again later',
  };
  const onBlur = (e: any) => {
    const emailCondition =
      (email === ''
        ? (setEmailDirty(true),
          setBbuttonDisabled(true),
          setEmailError('Email field required'))
        : null,
      e.target.value === user?.email ? setBbuttonDisabled(true) : null);
    const nameCondition =
      (name === ''
        ? (setNameDirty(true),
          setBbuttonDisabled(true),
          setNameError('Name field required'))
        : null,
      e.target.value === user?.displayName ? setBbuttonDisabled(true) : null);

    switch (e.target.name) {
      case 'email':
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        emailCondition;
        break;
      case 'name':
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        nameCondition;
        break;
      // no default
    }
  };

  const onNameChange = (e: any) => {
    setName(e.target.value);
    setBbuttonDisabled(false);
    setDataChange(false);
    const twoWords = /\w\s\w/;
    const capitalize = /^[A-Z][a-z]* [A-Z][a-z]*$/;
    if (!String(e.target.value).match(twoWords)) {
      setNameError('Field has to contain at least 2 words');
      setBbuttonDisabled(true);
    } else if (!String(e.target.value).match(capitalize)) {
      setNameError('Name has to start from a capital letter');
      setBbuttonDisabled(true);
    } else {
      setNameError('');
    }
  };

  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
    setBbuttonDisabled(false);
    setDataChange(false);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!String(e.target.value).toLowerCase().match(re)) {
      setEmailError('Email must be a valid email');
      setBbuttonDisabled(true);
    } else {
      setEmailError('');
    }
  };

  const handleClick = () => {
    if (name !== user?.displayName) {
      user
        ?.updateProfile({ displayName: name })
        .then(() => {
          setBbuttonDisabled(true);
          setDataChange(true);
        })
        .catch((err) => setError(err.message));
    }

    user
      ?.updateEmail(email)
      .then(() => {
        setBbuttonDisabled(true);
        setDataChange(true);
      })
      .catch((err) => setError(err.message));
  };

  const handleChange = () => {
    setUpliadBtnDisabled(false);
  };

  useEffect(() => {
    if (user?.photoURL) {
      setProtoURL(user.photoURL);
    }
  }, [user]);

  const uploadFiles = (file: any) => {
    const uploadTask = storage
      .ref(`Avatars/${user?.uid}+${file.name}`)
      .put(file);
    setUploading(true);
    setUpliadBtnDisabled(true);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setUploadProgress(progress);
      },
      (err) => setError(message.error),
      () => {
        storage
          .ref('Avatars')
          .child(`${user?.uid}+${file.name}`)
          .getDownloadURL()
          .then((url) => {
            user
              ?.updateProfile({ photoURL: url })
              .then(() => {
                setBbuttonDisabled(true);
                setUploading(false);
              })
              .catch((err) => setError(err.message));
          });
      },
    );
  };

  const formHandler = (e: any) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.contentContainer}>
        <h2 className={classes.name}>Edit Profile</h2>
        {user !== null ? (
          <>
            <img
              className={classes.avatar}
              src={user.photoURL ? user.photoURL : photoURL}
              alt="UserAvatar"
            />
            {uploading ? <p>Upload progress {uploadProgress}%</p> : null}
            <form className={classes.uploadAvatarForm} onSubmit={formHandler}>
              <label
                htmlFor="file-upload"
                className={classes.uploadAvatarLabel}
              >
                <CloudUploadIcon style={{ color: '#f50057' }} />
                <span style={{ paddingLeft: '10px' }}>Upload avatar</span>
              </label>
              <input
                className={classes.uploadAvatarInput}
                onChange={handleChange}
                type="file"
                id="file-upload"
              />
              <button
                className={classes.editProfileBtn}
                disabled={upliadBtnDisabled}
                type="submit"
              >
                Upload
              </button>
            </form>
            <hr />
            <div className={classes.editProfileForm}>
              <div className={classes.placeholder}>
                {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
                <label className={classes.placeholderLabel} htmlFor="name">
                  Name
                </label>
                <input
                  className={classes.validateFormInput}
                  onChange={onNameChange}
                  onBlur={(e) => onBlur(e)}
                  name="name"
                  type="text"
                  id="name"
                  value={name}
                />
                {nameDirty && nameError && (
                  <div className={classes.inputFeedback}>{nameError}</div>
                )}
              </div>
              <div className={classes.placeholder}>
                {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
                <label className={classes.placeholderLabel} htmlFor="email">
                  Email
                </label>
                <input
                  className={classes.validateFormInput}
                  onChange={onEmailChange}
                  onBlur={(e) => onBlur(e)}
                  name="email"
                  type="email"
                  id="email"
                  value={email}
                />
                {emailDirty && emailError && (
                  <div className={classes.inputFeedback}>{emailError}</div>
                )}
              </div>
              <div className={classes.editProfileBtnWrapper}>
                <button
                  className={classes.editProfileBtn}
                  onClick={handleClick}
                  type="button"
                  disabled={buttonDisabled}
                >
                  Save
                </button>
                <Link to="/profile" className={classes.wikiLink}>
                  Go back
                </Link>
              </div>
              {dataChange ? <p>{message.success}</p> : null}
              {error ? <p className={classes.error}>{error}</p> : null}
            </div>
          </>
        ) : (
          <p>{message.error}</p>
        )}
      </div>
    </div>
  );
};

export default EditUserProfile;
