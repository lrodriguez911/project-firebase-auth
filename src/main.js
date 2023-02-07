import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import {
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { setupPosts } from "./app/postList.js";

import "./app/signupForm.js";
import "./app/logout.js";
import "./app/signinForm.js";
import "./app/googleLogin.js";
import "./app/facebooLogin.js";
import "./app/githubLogin.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const querySnapshot = await getDocs(collection(db, "posts"));
    setupPosts(querySnapshot.docs)
    console.log(querySnapshot);
  } else {
    setupPosts([])
  }
  loginCheck(user);
});
