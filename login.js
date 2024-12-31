import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
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
function login() {
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value; 

    
    if (!email || !password) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter an Email and Password",
        });
        return;
    }
    
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Data -->", user);
    Swal.fire({
        title: "Congratulations!!",
        text: "You are login successfully.",
        icon: "success",
        draggable: true,
    })
    .then(() => {
        window.open("create.html", "_self");
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log("Error -->", errorMessage);
    Swal.fire({
        icon: "error",
        title: "Sign Up Failed",
        text: "Invalid Passord or Email",
    });
  });
}
document.getElementById("submit").onclick = login;