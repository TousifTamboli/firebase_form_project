// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword ,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmkKqAUz6zxrofXp8WV5Oqy3NyfBZRQ9E",
  authDomain: "regiterform-10389.firebaseapp.com",
  databaseURL: "https://regiterform-10389-default-rtdb.firebaseio.com",
  projectId: "regiterform-10389",
  storageBucket: "regiterform-10389.appspot.com",
  messagingSenderId: "645383755122",
  appId: "1:645383755122:web:6f1854da459a7a181279eb",
  measurementId: "G-4F1R5T87CS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app);

const auth = getAuth();

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  // alert(5);

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Logging in...");
      window.location.href = "./grand.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);

      // ..
    });
});
