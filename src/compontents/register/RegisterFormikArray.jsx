import { Field, FieldArray } from "formik";
import RegisterFormikErrorMessage from "./RegisterFormikErrorMessage";
const RegisterFormikArray = ({ name, label }) => {
  return (
    <FieldArray name={name}>
      {(arrayHelpers) => {
        return (
          <div>
            {arrayHelpers.form.values[name] &&
            arrayHelpers.form.values[name].length > 0 ? (
              arrayHelpers.form.values[name].map((hobby, index) => (
                <div key={index}>
                  <label
                    htmlFor={name}
                    style={{ display: "block" }}
                    className="fw-bold mb-2 fs-4"
                  >
                    {label}
                  </label>
                  <Field name={`${name}.${index}`} className="mb-4 py-1" />
                  <button
                    type="button"
                    className="btn-dark mx-3 fs-4"
                    onClick={() => arrayHelpers.push("")}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="btn-danger fs-4"
                    onClick={() => arrayHelpers.remove(index)}
                  >
                    Remove
                  </button>
                  <RegisterFormikErrorMessage name={name} />
                </div>
              ))
            ) : (
              <button type="button" onClick={() => arrayHelpers.push("")}>
                Add a hobby!
              </button>
            )}
          </div>
        );
      }}
    </FieldArray>
  );
};
export default RegisterFormikArray;
