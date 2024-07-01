import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const CredProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // popup sign in with google =>==>=>=>=>
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // signIn with email and passwoed =>
  const SignUpWithEmailPass = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current_uesr => ', currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  //  the funcitons ad state value  inside a objects  => => will go throught providers value =>
  const authValue = {
    signInWithGoogle,
    SignUpWithEmailPass,
    setUser,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authValue}> {children} </AuthContext.Provider>
  );
};

// proptyping => => => =>
CredProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CredProvider;
