// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnSbvh7knl8wIfHGB5R5UxyHXVLeMQ1vg",
  authDomain: "login-from-f4276.firebaseapp.com",
  projectId: "login-from-f4276",
  storageBucket: "login-from-f4276.firebasestorage.app",
  messagingSenderId: "17057901421",
  appId: "1:17057901421:web:fb1ffe33035c6b8d9a4864",
  measurementId: "G-LP1W6NX5WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Login
const googleLoginBtn = document.getElementById("googleLoginBtn");
googleLoginBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    alert(`Welcome ${user.displayName}`);
    console.log(user);
  } catch (error) {
    console.error(error);
    alert("Login failed!");
  }
});
