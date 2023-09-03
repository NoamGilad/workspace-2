import { useContext, useState } from "react";
import { AuthCtx } from "../context/AuthContext";

const SignUpPage = () => {
  const context = useContext(AuthCtx);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>SignUp Page</h1>
      <form onSubmit={handleSignUp}>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => context?.setEmail(e.target.value)}
          placeholder="Enter your Email"
          required
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => context?.setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <label>Role</label>
        <input
          type="text"
          onChange={(e: any) => context?.setRole(e.target.value)}
          placeholder="Enter your role"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;
