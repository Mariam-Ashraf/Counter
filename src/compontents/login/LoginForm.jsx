import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ padding: 100 }} className="mb-3">
        <label
          htmlFor="email"
          style={{ display: "block" }}
          className="mt-4 form-label fw-bold fs-4"
        >
          Email
        </label>
        <input
          class="form-control"
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "#860000" }}>{formik.errors.email}</div>
        )}

        <label
          htmlFor="password"
          style={{ display: "block" }}
          className="mt-4 form-label fw-bold fs-4"
        >
          Password
        </label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "#860000" }}>{formik.errors.password}</div>
        )}

        <div class="my-4 ps-0 form-check d-flex align-items-baseline">
          <input
            className="me-3"
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            defaultChecked={formik.values.rememberMe}
            {...formik.getFieldProps("rememberMe")}
          />
          <label
            htmlFor="rememberMe"
            style={{ display: "block" }}
            className="mt-3 form-label fs-5"
          >
            remember me
          </label>
        </div>

        <button
          type="submit"
          className="mx-auto fs-4 fw-bold text-light px-3 mb-5"
          style={{ display: "block", backgroundColor: "#590D45" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
