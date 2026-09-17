import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create account with email/password
  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  // Login with email/password
  const signIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  // Google Login
  const signInWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(
      auth,
      googleProvider
    );
  };

  // Update Firebase user profile
  const updateUser = (name, photo) => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      return Promise.reject(
        new Error("No authenticated user found.")
      );
    }

    return updateProfile(currentUser, {
      displayName: name,
      photoURL: photo,
    }).then(() => {
      setUser(auth.currentUser);
    });
  };

  // Logout
  const logOut = () => {
    setLoading(true);

    return signOut(auth);
  };

  // Firebase authentication observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (loggedUser) => {
        setUser(loggedUser);
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;