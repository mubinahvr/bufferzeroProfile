import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { Button } from 'react-bootstrap';
import './../App.css'
const Register = () => {
  const nav = useNavigate();
  const signUp = (values) => {
    const { email, password } = values;
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => nav("/", { replace: true }))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="formLayout2">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)) {
              errors.password =
                "password should contain atleast one number and one special character";
            }
            if (!values.confirmpassword) {
              errors.confirmpassword = "Required";
            } else if (values.password !== values.confirmpassword) {
              errors.confirmpassword =
                "confirm password should match with password";
            }
            return errors;
          }}
          onSubmit={(values) => signUp(values)}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isSubmitting,
            dirty,
            isValid,
          }) => (
            <form
              className="space-y-5"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900 sr-only">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full rounded-md px-2 border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {errors.name && touched.name && (
                <p className="text-red-500 font-semibold">{errors.name}</p>
              )}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900 sr-only"
                  >
                    Email address
                  </label>
                </div>
                <div className="mt-0">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full rounded-md px-2 border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {errors.email && touched.email && (
                <p className="text-red-500 font-semibold">{errors.email}</p>
              )}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900 sr-only"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-0">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full rounded-md px-2 border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {errors.password && touched.password && (
                <p className="text-red-500 font-semibold">{errors.password}</p>
              )}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirmpassword"
                    className="block text-sm font-medium leading-6 text-gray-900 sr-only"
                  >
                    confirmPassword
                  </label>
                </div>
                <div className="mt-0">
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    placeholder="confirm password"
                    autoComplete="current-password"
                    value={values.confirmpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full rounded-md px-2 border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {errors.confirmpassword && touched.confirmpassword && (
                <p className="text-red-500 font-semibold">
                  {errors.confirmpassword}
                </p>
              )}
              <div>
                <Button className="w-50 m-auto d-flex align-items-center justify-content-center mt-4" type="submit">
                  Sign up
                </Button>
              </div>
            </form>
          )}
        </Formik>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already a member?{" "}
          <Link
            to="/"
            replace
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            login
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
