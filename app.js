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

  function signup() {
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

    createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const user = res.user;
            console.log("Data -->", user);

            Swal.fire({
                title: "Congratulations!!",
                text: "You have successfully signed up.",
                icon: "success",
                draggable: true,
            }).then(() => {
                window.open("login.html", "_self");
            });
        })
        .catch((error) => {
            const errorMessage = "Something went wrong. Please try again.";
            const errorCode = error.code;
            console.log("Error -->", errorMessage,errorCode );
            Swal.fire({
                icon: "error",
                title: "Sign Up Failed",
                text: "Password Must Contain Special Character",
            });
        });
}

document.getElementById("submit").onclick = signup;


