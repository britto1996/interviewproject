import React, { useState } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Header from "../Header/Header";
import { loginForm } from "../../ApiService/Api";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailTrue, setEmailTrue] = useState(false);
  const [emailRegexTrue, setEmailRegexTrue] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [passwordTrue, setPasswordTrue] = useState(false);
  const [passwordLengthTrue, setPasswordLengthTrue] = useState(false);

  const loginFormSubmission = async (email, password) => {
    return await loginForm(email, password)
      .then((res) => {
        console.log("res", res);
        setDataError(false);
      })
      .catch((err) => {
        console.log("err", err);
        setDataError(true);
      });
  };
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const loginBtn = () => {
    if (!email) {
      console.log("please enter your email");
      setEmailTrue(true);
    } else if (!validateEmail(email)) {
      console.log("please enter valid email");
      setEmailTrue(false);
      setEmailRegexTrue(true);
    } else {
      console.log("email entered");
      setEmailTrue(false);
      setEmailRegexTrue(false);
    }
    if (!password) {
      console.log("please enter your password");
      setPasswordTrue(true);
    } else {
      console.log("password must contain atleast 8 characters");
      setPasswordTrue(false);
    }
    if (email !== "" && password !== "") {
      console.log("login and go to dashboard");
      setPasswordTrue(false);
      setPasswordLengthTrue(false);
      loginFormSubmission(email, password);
      window.location = "/dashboard";
    }
  };
  return (
    <div>
      <Header />
      <div className="login__form__container">
        <div className="login__header__div">
          <h1 className="login__heading">Login</h1>
        </div>
        {dataError ? (
          <p style={{ color: "red", fontSize: "14px" }}>
            Invalid Email Or Password
          </p>
        ) : null}
        <div className="input__forms__container">
          <TextField
            type="email"
            id="filled-basic"
            label="Email Address"
            variant="filled"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailTrue ? (
            <p style={{ color: "red", fontSize: "14px" }}>
              Please Enter Your Email
            </p>
          ) : null}
          {emailRegexTrue ? (
            <p style={{ color: "red", fontSize: "14px" }}>
              Please Enter Valid Email
            </p>
          ) : null}
          <div className="forgot__password__div">
            <p className="forgot__password">Forgot Password?</p>
          </div>

          <TextField
            type="password"
            id="filled-basic"
            label="Password"
            variant="filled"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordTrue ? (
            <p style={{ color: "red", fontSize: "14px" }}>
              Please Enter Your Password
            </p>
          ) : null}
          {passwordLengthTrue ? (
            <p style={{ color: "red", fontSize: "14px" }}>
              Please Enter Atleast 8 Characters
            </p>
          ) : null}
        </div>
        <div className="login__btn__container">
          <button onClick={() => loginBtn()} className="login__btn">
            Login
          </button>
        </div>
        <div className="add__to__bottom__css">
          <strong>
            Don't have an account ?{" "}
            <a className="sign__up__title" href="/signup">
              <span>Sign up</span>
            </a>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Login;
