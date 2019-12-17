import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  /**** Auth API ****/

  // Create User
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // Sign In
  doSignInWithEmailAndPassword = ( email, password ) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // Sign Out
  doSignOutUser = () => this.auth.signOut();

  // Forgot Password/Rest Password
  doForgotPassword = email => this.auth.sendPasswordResetEmail(email);
}

export default Firebase;