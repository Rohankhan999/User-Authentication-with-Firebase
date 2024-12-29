import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyAy2sdXZBATUG899y7KZpZsnOluIckd_Jc",
    authDomain: "login-signup-999.firebaseapp.com",
    projectId: "login-signup-999",
    storageBucket: "login-signup-999.firebasestorage.app",
    messagingSenderId: "831110980438",
    appId: "1:831110980438:web:0974f24c997274899d2cf7"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
function signup(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Data -->",user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("Error -->",errorMessage);
    });
  }
  signup();