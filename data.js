// Initialize Firebase

const config = {
  apiKey: "********************",
  authDomain: "contact-3669e.firebaseapp.com",
  databaseURL: "https://contact-3669e.firebaseio.com",
  projectId: "contact-3669e",
  storageBucket: "contact-3669e.appspot.com",
  messagingSenderId: "131417728522"
};
firebase.initializeApp(config);

// Reference messaages collection
const messagesRef = firebase.database().ref("messages");

// Listen for for submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  const name = getInputVal("name");
  const company = getInputVal("company");
  const email = getInputVal("email");
  const phone = getInputVal("phone");
  const message = getInputVal("message");

  // Save Message
  saveMessage(name, company, phone, message);
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save firebase message
function saveMessage(name, company, email, phone, message) {
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
