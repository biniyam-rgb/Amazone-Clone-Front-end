import React, { useState } from "react";
import Classes from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const authHandler = async (e) => {
    e.preventDefault();
    const action = e.target.name;
    setError("");
    try {
      if (action === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={Classes.container}>
      <Link to="/">
        <img
          className={Classes.logo}
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className={Classes.form__container}>
        <h1>Sign In</h1>
        {error && <p className={Classes.error}>{error}</p>}
        <form>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button name="signin" onClick={authHandler} className={Classes.signin__btn}>
            Sign In
          </button>
        </form>

        <p className={Classes.divider}>
          By signing in you agree to Amazon's conditions of use.
        </p>

        <div className={Classes.signup__section}>
          <p>New to Amazon?</p>
          <button name="signup" onClick={authHandler} className={Classes.signup__btn}>
            Create your Amazon account
          </button>
        </div>
      </div>
    </div>
  );
}
