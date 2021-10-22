import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import RegisterFormikField from "./RegisterFormikField";
import RegisterFormikArray from "./RegisterFormikArray";
import "./register-style.css";

const RegisterForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    active: false,
    hobbies: [""],
  };
  const onSubmit = (values) => alert(JSON.stringify(values, null, 4));
  const validationSchema = yup.object({
    username: yup.string().required("Username field is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
    confirmPassword: yup
      .string()
      .required("Password field is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    gender: yup.string().required("Gender field is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log("formik", JSON.stringify(formik, null, 4));
        return (
          <Form>
            <div style={{ padding: 20 }} className="pt-5">
              <RegisterFormikField
                label="Username"
                name="username"
                type="text"
                className="form-control py-1"
              />
              <RegisterFormikField
                label="Email"
                name="email"
                type="email"
                className="form-control py-1"
              />
              <RegisterFormikField
                label="Password"
                name="password"
                type="password"
                className="form-control py-1"
              />
              <RegisterFormikField
                label="ConfirmPassword"
                name="confirmPassword"
                type="password"
                className="form-control py-1"
              />
              <RegisterFormikArray label="Hobbies" name="hobbies" type="text" />
              <RegisterFormikField label="Gender" name="gender" type="select" />
              <RegisterFormikField
                label="Active"
                name="active"
                type="checkbox"
                className="mb-4 form-check-input py-1"
              />
              <button
                className="fs-3 fw-bold text-light px-3 mb-5"
                style={{ display: "block", backgroundColor: "#590D45" }}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default RegisterForm;
