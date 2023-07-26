import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
    return (
        <div className="formLayout align-middles ">
            <div >
                <img
                    className="logo"
                    src={require("../assets/bufferzeroLogo.png")}
                    alt="Your Company"
                />
             
                <h2 className="text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            <br></br>
            <Outlet />
        </div>
    );
};

export default Auth;
