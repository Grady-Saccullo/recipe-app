import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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
    this.storage = app.storage();
    this.firestore = app.firestore()

    // Auth Sign In providers
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }


  /* ========== Auth API ========== */
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // Email & Password
  doSignInWithEmailAndPassword = ( email, password ) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // Google
  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  // Sign Out
  doSignOutUser = () => this.auth.signOut();

  // Forgot Password/Rest Password
  doForgotPassword = email => this.auth.sendPasswordResetEmail(email);

  /* ========== Firestore API ========== */
  // Create new user document in users collection
  createNewUserDocument = (data) => 
    this.firestore
      .collection('users')
      .doc(this.auth.currentUser.uid)
      .set(data)
      .catch(error => console.error('Firebase createDocument: ', error));
  
  // Get specified document from a given collection
  getFSUserDocument = (uid, callback) => {
    return (
      this.firestore
        .collection('users')
        .doc(uid)
        .collection('recipes')
        .get()
        .then(collectionData => callback(collectionData))
        .catch(error => console.error('Firebase getFSDocument: ', error))
    );
  }

  // Add new recipe to the currently signed in user
  createNewRecipe = (data, callback) =>
    this.firestore
      .collection('users')
      .doc(this.auth.currentUser.uid)
      .collection('recipes')
      .add(data)
      .then(docRef => callback(docRef))
      .catch(error => console.error('Firebase createNewRecipe: ', error));

  /* ========== Storage API ========== */
  // need to get url from photo and pass data through callback
  // look into cloud function to listen to users folder in storage and compress images accordingly
  uploadRecipeImage = (recipeId, filename, file, callback) =>
    this.storage.ref()
      .child(`/users/${this.auth.currentUser.uid}/recipes/${recipeId}/${filename}`)
      .put(file)
      .on(
        'state_changed',
        snapshot => console.log(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)),
        error => console.error('Firebase uploadRecipeImage: ', error),
        callback
      );


}

export default Firebase;