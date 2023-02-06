 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAvwmfMH0qpHyrwttEsNgdLmofrlIW4VKA",
   authDomain: "fir-auth-project-1b0f3.firebaseapp.com",
   projectId: "fir-auth-project-1b0f3",
   storageBucket: "fir-auth-project-1b0f3.appspot.com",
   messagingSenderId: "452648735444",
   appId: "1:452648735444:web:d545a9903ed4229f382141",
   measurementId: "G-4FP5EYHHZ1",
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 export const auth = getAuth(app)