import React from "react";
import SignInForm from "../../components/sign-in-form/SignInForm";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import "./authentication-styles.scss";

const Signin = () => {
  return (
    <div className="authentication-container">
      <h1>Sign In Page</h1>
      <div className="authentication-content">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Signin;
