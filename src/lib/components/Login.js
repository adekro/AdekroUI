import React, { useState, useRef } from "react";
import classes from "./style/Login.module.css";
import { normalizeToken } from "../lib";

const Login = ({ logo, onSubmit, urlApi }) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    //fetch login
    await fetch(urlApi + "/" + enteredEmail + "/" + enteredPassword)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.Errore.length > 0) {
          console.log(data.Errore);
          setIsError(data.Errore);
        } else {
          const normT = normalizeToken(data.Token);
          const expirationTime = new Date(new Date().getTime() + 14400 * 1000);
          localStorage.setItem("adk_token", normT);
          localStorage.setItem("adk_exptime", expirationTime);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
    onSubmit();
  }

  return (
    <React.Fragment>
      <section className={classes.auth}>
        <img src={logo} alt="" className={classes.authlogo}></img>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request...</p>}
            {isError && <p>{isError}</p>}
            {isNewUser && (
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            )}
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};
export default Login;
