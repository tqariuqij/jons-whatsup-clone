import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC2PT7S_6IVYDH7Iyz4j0Jod6RZnR5n8vE",
    authDomain: "jons-whatsup-clone.firebaseapp.com",
    projectId: "jons-whatsup-clone",
    storageBucket: "jons-whatsup-clone.appspot.com",
    messagingSenderId: "35269709962",
    appId: "1:35269709962:web:a15d3c4615a54b6f761d73",
    measurementId: "G-3HHDE958BB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default firebaseApp;