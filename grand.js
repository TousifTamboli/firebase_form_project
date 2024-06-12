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
        const contactFormDB = ref(database, "contactForm");
  
        document.addEventListener("DOMContentLoaded", function () {
          document
            .getElementById("contactForm")
            .addEventListener("submit", submitForm);
        });
  
        function submitForm(e) {
          e.preventDefault();
  
          const firstName = getElementVal("firstName");
          const lastName = getElementVal("lastName");
          const birthdayDate = getElementVal("birthdayDate");
          const gender = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
          const email = getElementVal("email");
          const phoneNumber = getElementVal("phoneNumber");
  
          saveMessages(firstName, lastName, birthdayDate, gender, email, phoneNumber);
  
          console.log(firstName, lastName, birthdayDate, gender, email, phoneNumber);
  
          // Clear the form inputs after submission (optional)
          document.getElementById("contactForm").reset();
  
          alert("Form submitted Successfully :");
        }
  
        const saveMessages = (firstName, lastName, birthdayDate, gender, email, phoneNumber) => {
          const newContactForm = push(contactFormDB);
  
          set(newContactForm, {
            firstName: firstName,
            lastName: lastName,
            birthdayDate: birthdayDate,
            gender: gender,
            email: email,
            phoneNumber: phoneNumber,
          });
        };
  
        const getElementVal = (id) => {
          return document.getElementById(id).value;
        };