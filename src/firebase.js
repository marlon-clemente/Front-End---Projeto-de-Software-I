import * as firebase from "firebase";
import "firebase/auth";

!firebase.apps.length
  ? firebase.initializeApp({
        /* CONFIGURAÇAO FIREBASE */
})
: firebase.app();

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

firebase.auth().languageCode = 'pt';

export { 
  firebase,
  auth,
  googleProvider
}
