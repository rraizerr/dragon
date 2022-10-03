import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/auth';
import 'firebase/storage';
import firebaseConfig from './firebaseConfig';

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { storage };
export { auth };
export { db };
export default app;
