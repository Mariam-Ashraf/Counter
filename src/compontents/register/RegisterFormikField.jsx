import React from "react";
import { Field } from "formik";
import RegisterFormikErrorMessage from "./RegisterFormikErrorMessage";

const RegisterFormikField = ({ name, type, label, className }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return JSON.stringify(type) !== JSON.stringify("select") ? (
          <>
            <div className="d-flex align-items-baseline mb-4">
              <label
                htmlFor={name}
                style={{ display: "block" }}
                className="fs-4 fw-bold me-3"
              >
                {label}
              </label>
              <input
                className={className}
                type={type}
                id={name}
                {...formikField.field}
                defaultChecked={formikField.field.value}
              />
            </div>
            <RegisterFormikErrorMessage name={name} />
          </>
        ) : (
          <div className="d-flex align-items-baseline mb-4">
            <label
              htmlFor={name}
              style={{ display: "block" }}
              className="fw-bold fs-4 me-4"
            >
              {label}
            </label>
            <select
              className="mb-4"
              id={name}
              {...formikField.field}
              defaultChecked={formikField.field.value}
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <RegisterFormikErrorMessage name={name} />
          </div>
        );
      }}
    </Field>
  );
};

export default RegisterFormikField;
