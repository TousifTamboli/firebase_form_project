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
  const db = getDatabase(app);

  document
    .getElementById("submitBtn")
    .addEventListener("click", function (e) {
      set(ref(db, "users/" + document.getElementById("name").value), {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confpassword: document.getElementById("confpassword").value,
      })
        .then(() => {
          alert("Registration Successful");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          alert("Error: Registration Failed");
        });
    });