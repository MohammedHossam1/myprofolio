
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMQ8Tt2a59KZ0T3oNLXO7HYPqRgr4u0k8",
  authDomain: "mohammed-fayyad.firebaseapp.com",
  projectId: "mohammed-fayyad",
  storageBucket: "mohammed-fayyad.firebasestorage.app",
  messagingSenderId: "707039871739",
  appId: "1:707039871739:web:2154d15beca3fd5044265e",
  measurementId: "G-7HQ71HQVQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { db };


// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    throw error;
  }
};

// Sign out
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Sign-Out Error:", error.message);
    throw error;
  }
};
