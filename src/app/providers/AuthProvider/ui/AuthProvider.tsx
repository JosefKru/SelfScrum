import { FC, ReactNode, useState, useEffect } from "react";
import {
  UserCredential,
  onAuthStateChanged,
  User,
  signOut,
} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./../../../../../config/firebase/firestore";
import { AuthContext } from "../lib/AuthContext";

export interface AuthContextProps {
  googleSignIn: () => Promise<UserCredential>;
  currentUser: User | null;
  logOut: () => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const googleSignIn = async (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
    try {
      return await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Authentication error:", error);
      throw error;
    }
  };

  const logOut = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue: AuthContextProps = {
    googleSignIn,
    currentUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
