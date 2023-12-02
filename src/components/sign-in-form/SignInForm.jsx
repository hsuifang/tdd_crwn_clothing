import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/button-component";
import "./sign-in-form-styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const formInputs = [
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
];

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formFields);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form data-testid="sign-in-form" onSubmit={handleSubmit}>
        {formInputs.map((input) => (
          <FormInput
            key={input.name}
            value={formFields[input.name]}
            {...input}
            onChange={handleChange}
          />
        ))}
        <div className="button-group">
          <Button type="sumbit" buttonType="inverted">
            Sign In
          </Button>
          <Button type="button" buttonType="google-sign-in">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
