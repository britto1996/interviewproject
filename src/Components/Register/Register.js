import React, { useState } from "react";
import "./Register.css";
import TextField from "@mui/material/TextField";
import Header from "../Header/Header";
import { registerForm } from "../../ApiService/Api";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailTrue, setEmailTrue] = useState(false);
  const [emailRegexTrue, setEmailRegexTrue] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [passwordTrue, setPasswordTrue] = useState(false);
  const [passwordLengthTrue, setPasswordLengthTrue] = useState(false);

  const registerFormSubmission = async (email, password) => {
    return await registerForm(email, password)
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
  const registerBtn = () => {
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
      registerFormSubmission(email, password);
      window.location = "/";
    }
  };
  return (
    <div>
      <Header />
      <div className="login__form__container">
        <div className="login__header__div">
          <h1 className="login__heading">Register</h1>
        </div>
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
          {dataError ? (
            <p style={{ color: "red", fontSize: "14px" }}>
              This Email Already Exist
            </p>
          ) : null}

          <div style={{ marginTop: "2%" }}></div>

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
          <button onClick={() => registerBtn()} className="login__btn">
            SignUp
          </button>
        </div>
        <div className="add__to__bottom__css">
          <strong>
            Already have an account ?{" "}
            <a className="sign__up__title" href="/">
              <span>Sign in</span>
            </a>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Register;
