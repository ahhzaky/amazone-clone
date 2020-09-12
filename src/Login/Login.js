import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const login = (event) => {
    event.preventDefault();
  };

  const register = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Passwor</h5>
          <input type="password" />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazone Account
        </button>
      </div>
    </div>
  );
}

export default Login;
