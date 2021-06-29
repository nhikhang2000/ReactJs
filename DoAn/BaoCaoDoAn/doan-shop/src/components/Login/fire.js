import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDv6POtt8nV6JBPLxFbJvKOO-TzybCjRgY",
    authDomain: "e-commerce-32901.firebaseapp.com",
    projectId: "e-commerce-32901",
    storageBucket: "e-commerce-32901.appspot.com",
    messagingSenderId: "106788590299",
    appId: "1:106788590299:web:a72a5a763d61eb93bbb2fe",
    measurementId: "G-LPRX5DE1DS"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;