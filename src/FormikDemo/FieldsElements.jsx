import React from "react";

import { useField, Field } from "formik";

export const MyCustomTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(props);
  return (
    <div>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      <br />
      <br />
    </div>
  );
};
export const MyCustomCheckbox = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label>
        <Field {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      <br />
      <br />
    </div>
  );
};
