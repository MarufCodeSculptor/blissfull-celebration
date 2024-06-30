import PropTypes from 'prop-types';
import { createContext } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword } from 'firebase/auth';

 export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const CredProvider = ({ children }) => {
  // popup sign in with google =>==>=>=>=>
  const signInWithGoogle =  () => {
    return signInWithPopup(auth, googleProvider);
  };
// signIn with email and passwoed => 
  const signInWithEmailPass= (email,pass)=>{
    return  createUserWithEmailAndPassword(auth,email,pass);
  }
  //  the funcitons ad state value  inside a objects  => => will go throught providers value =>
  const authValue = {
    signInWithGoogle,
    signInWithEmailPass
   
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
