// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy2sdXZBATUG899y7KZpZsnOluIckd_Jc",
  authDomain: "login-signup-999.firebaseapp.com",
  projectId: "login-signup-999",
  storageBucket: "login-signup-999.appspot.com",
  messagingSenderId: "831110980438",
  appId: "1:831110980438:web:0974f24c997274899d2cf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const button = document.getElementById("button");
// Sign-up function
function signin() {
  // Get email and password values inside the function
  const email = document.getElementById("UserName").value;
  const password = document.getElementById("Password").value;
 

  // Create user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log("User signed up:", user);

      // Optionally show a success alert
      Swal.fire({
        title: 'Signed up successfully!',
        text: 'Welcome to our platform!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      // Redirect or perform any other actions after successful sign-up
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing up:", errorCode, errorMessage);

      // Optionally show an error alert
      Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    });
    
}

signin()