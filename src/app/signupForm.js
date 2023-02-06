import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from "./firebase.js";
import {showMessage} from './showMessage.js'
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  console.log(email, password);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log(userCredentials);

    //close the signup modal
    const signupModal = document.querySelector("#signupModal");
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
    showMessage(`Welcome ${userCredentials.user.email}`)
  } catch (error) {
    console.log(error.message);
    console.log(error.code);

    if (error.code === "auth/email-already-in-use") {
      showMessage("Email already in use", "error")
    } else if (error.code === "auth/weak-password") {
      showMessage("Password is too weak", "error")
    } else if (error.code === "auth/invalid-email") {
      showMessage("Invalid Email", "error")
    } else if (error.code) {
      showMessage(error.message, "error")
    }
  }
});
