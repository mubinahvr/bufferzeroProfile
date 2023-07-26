import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from "@firebase/auth";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"
import './../App.css'
import { Button } from 'react-bootstrap';
const Login = () => {
    const nav = useNavigate();
    const [err, setErr] = useState("");
    const forgotPassword = (email) => {
        email !== "" ? sendPasswordResetEmail(auth, email) : alert("provide email");
    };

    const signIn = (values) => {
        const { email, password } = values;
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                nav("/Home", { replace: true });
                setErr("");
            })
            .catch((error) => setErr(error.message));
    };
    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = "...Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.password) {
            errors.password = "...Required";
        } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)) {
            errors.password =
                "password should contain atleast one number and one special character";
        }
        return errors;
    };
    return (
        <div className="formLayout2">
            {err && <p className="bg-red-400 py-3 mb-8 pl-16">{err}</p>}
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={validate}
                onSubmit={(values) => signIn(values)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <Form  onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    autoComplete="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="p-1.5"
                                />
                                {errors.email && touched.email && (
                                    <p className="text-sm text-red-500 font-semibold my-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                               
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.password && touched.password && (
                                    <p className="text-sm text-red-500 font-semibold my-1">
                                        {errors.password}
                                    </p>
                                )}
                                <div className="text-sm d-flex justify-content-end mt-4">
                                    <a href="/"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                        onClick={() => forgotPassword(values.email)}
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Button 
                                type="submit"
                                className="w-50 m-auto d-flex align-items-center justify-content-center mt-2"
                            >
                                Sign in
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>

            <p className="mt-4 text-center text-sm text-gray-500">
                Not a member?{" "}
                <Link
                    to="register"
                    replace
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                    Register here
                </Link>
            </p>
        </div>
    );
};

export default Login;
