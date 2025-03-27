// Firebase configuration remains the same
const firebaseConfig = {
    apiKey: "AIzaSyA4NAW8JTKzscaInyZ8sqlJsCN1bBHhkp8",
    authDomain: "chat-chatroom.firebaseapp.com",
    projectId: "chat-chatroom",
    storageBucket: "chat-chatroom.firebasestorage.app",
    messagingSenderId: "442496182434",
    appId: "1:442496182434:web:e68d7f54a74b8213768ffb",
    measurementId: "G-7D0TT9MGBC"
  };
  
  // Initialize Firebase using Compat Library methods
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  // Function to sign in anonymously using Compat methods
  function signInAnonymously() {
    return firebase.auth().signInAnonymously()
      .then((userCredential) => {
        console.log("Signed in anonymously");
        return userCredential.user;
      })
      .catch((error) => {
        console.error("Anonymous sign-in error", error);
        throw error;
      });
  }