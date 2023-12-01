import React from "react";
import "./form-input-styles.scss";

const FormInput = ({ label, name, type = "text", onChange, value }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        required
        value={value}
      />
      {label && (
        <label
          htmlFor={name}
          className={`${value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
