import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const singinForm = document.querySelector("#login-form");

singinForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = singinForm["login-email"].value;
  const password = singinForm["login-password"].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);

    const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
    modal.hide()
    showMessage(`Welcome ${credentials.user.email}`);

  } catch (error) {
    if (error.code === "auth/wrong-password") {
      showMessage("Wrong password", "error");
    } else if (error.code === "auth/user-not-found") {
      showMessage("User not found", "error");
    } else {
      showMessage(error.message, "error");
    }
  }
});
