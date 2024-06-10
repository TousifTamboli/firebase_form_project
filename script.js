// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration
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
const database = getDatabase(app);

var contactFormDB = ref(database, "contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var password = getElementVal("password");
  var confpassword = getElementVal("confpassword");

  saveMessages(name, email, password, confpassword);

  console.log(name, email, password, confpassword);

  // Clear the form inputs after submission (optional)
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, password, confpassword) => {
  var newContactForm = push(contactFormDB);

  set(newContactForm, {
    name: name,
    email: email,
    password: password,
    confirmedpass: confpassword,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
