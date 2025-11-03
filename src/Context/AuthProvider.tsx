import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { type ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
interface AuthContextType {
  user: User | null;
  loader: boolean;
  setUser: (user: User | null) => void;
  setLoader: (loading: boolean) => void;
  register: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  signOutUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const provider = new GoogleAuthProvider();
import { auth } from "@/firebase.config";
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const register = (email: string, password: string) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email: string, password: string) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    console.log('object');
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoader(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loader,
    setUser,
    setLoader,
    register,
    login,
    signInWithGoogle,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
