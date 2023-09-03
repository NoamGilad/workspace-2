import app from "../base";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthCtx } from "../context/AuthContext";

const HomePage = () => {
  const context = useContext(AuthCtx);

  const handleSignOut = async () => {
    if (context) {
      try {
        await signOut(context.auth);
      } catch (error) {
        console.error("Error signing out:", error);
      }
    }

    if (!context) return;
  };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
};

export default HomePage;
