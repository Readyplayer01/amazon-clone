import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /***************user Login**************************/
  const signIn = (e) => {
    e.preventDefault();
    // firebase login

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // signing-in was successful
          navigate("/");
          
    })
      .catch(error => alert(error.message));

  };


  /***************user REGISTRATION*******************/
  const register = (e) => {
    e.preventDefault();

    // firebase register

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created a new user with email and password
        if (auth) {
          navigate("/");
        }
      })

      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>

        <form>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login-signInButton">
            Sign In
          </button>
        </form>

        <p>
          By Signing-in you agree to our conditions of use & sale. Please see
          our Policy Notice, our Cookies Notice and our Interest-based Ads
          Notice.
        </p>
        <button onClick={register} className="login-registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
