import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy2sdXZBATUG899y7KZpZsnOluIckd_Jc",
  authDomain: "login-signup-999.firebaseapp.com",
  projectId: "login-signup-999",
  storageBucket: "login-signup-999.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "831110980438",
  appId: "1:831110980438:web:0974f24c997274899d2cf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup

function signup(){
const emailinput = document.getElementById("email").value; 
const passwordinput = document.getElementById("password").value; 
createUserWithEmailAndPassword(auth, emailinput,passwordinput)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User Data -->", user);
  })
  .catch((error) => {
    console.error("Error -->", error.message);
    if (emailinput === auth.email){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email Already in use!",
          });
    }
  });
}
signup();
