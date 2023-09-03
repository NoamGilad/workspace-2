import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import app from "../base";
import { Auth, User, getAuth } from "firebase/auth";

type AuthContextType = {
  currentUser: string | null;
  setCurrentUser: Dispatch<SetStateAction<string | null>>;
  auth: Auth;
  email: string | null;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string | null;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  role: string | null;
  setRole: React.Dispatch<React.SetStateAction<string | null>>;
};

export const AuthCtx = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const auth = getAuth(app);

  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user ? user.uid : null);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <AuthCtx.Provider
      value={{
        currentUser,
        setCurrentUser,
        auth,
        email,
        setEmail,
        password,
        setPassword,
        role,
        setRole,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};

export default AuthProvider;
