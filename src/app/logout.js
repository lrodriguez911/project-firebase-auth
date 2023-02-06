import { signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from "./firebase.js"
const logout = document.querySelector("#logout")


logout.addEventListener('click', async() => {
  try {
    await signOut(auth)
    console.log('user signed out');
  } catch (error) {
    console.log(error.message)
  }
})

