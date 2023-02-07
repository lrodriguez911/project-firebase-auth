import {
    GithubAuthProvider,
    signInWithPopup,
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
  import { auth } from "./firebase.js";
  import { showMessage } from "./showMessage.js";
  const githubButton = document.querySelector("#githubLogin");
  
  githubButton.addEventListener("click", async () => {
    const provider = new GithubAuthProvider();
  
    try {
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials);
  
      const modal = bootstrap.Modal.getInstance(
        document.querySelector("#signinModal"),
      );
      modal.hide();
  
      showMessage(`Welcome ${credentials.user.displayName}`, "success");
    } catch (error) {
        if (error.code === "auth/account-exists-with-different-credential") {
            showMessage("User registered whit anohter method or provider", "error");}
      console.log(error);
    }
  });
  