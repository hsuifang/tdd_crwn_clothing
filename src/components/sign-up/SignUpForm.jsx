import React, { useState } from "react";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  passwordAgain: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, passwordAgain } = formFields;

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

    console.log(formFields);
  };

  return (
    <form data-testid="sign-up-form" onSubmit={handleSubmit}>
      <h1>Sign up with your email and password</h1>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        data-testid="name"
        type="text"
        placeholder="Display Name"
        required
        onChange={handleChange}
        value={name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        data-testid="email"
        type="email"
        placeholder="Email Address"
        required
        onChange={handleChange}
        value={email}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        data-testid="password"
        type="password"
        placeholder="Password"
        required
        onChange={handleChange}
        value={password}
      />

      <label htmlFor="password-again">Confirm Password</label>
      <input
        id="password-again"
        name="passwordAgain"
        data-testid="password-again"
        type="password"
        placeholder="Password Again"
        required
        onChange={handleChange}
        value={passwordAgain}
      />

      <button type="sumbit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
