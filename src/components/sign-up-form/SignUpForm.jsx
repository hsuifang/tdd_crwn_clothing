import React, { useState, useContext } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/button-component";
import "./sign-up-form-styles.scss";

import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  passwordAgain: "",
};

const formInputs = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
  },
  {
    name: "passwordAgain",
    label: "Confirm Password",
    type: "password",
    required: true,
  },
];

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { password, passwordAgain } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordAgain) {
      alert("Passwords do not match");
      return;
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form data-testid="sign-up-form" onSubmit={handleSubmit}>
        {formInputs.map((input) => (
          <FormInput
            key={input.name}
            value={formFields[input.name]}
            {...input}
            onChange={handleChange}
          />
        ))}

        <Button type="sumbit" buttonType="inverted">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
