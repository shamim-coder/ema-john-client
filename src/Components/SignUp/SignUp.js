import googleIcon from "../../Images/google.svg";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import auth from "../../Firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Spinner } from "react-bootstrap";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Your password didn't match");
            return;
        } else if (password.length < 6) {
            setErrorMessage("Password should at least 6 characters");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    };

    if (user) {
        navigate("/login");
    }

    console.log(user);

    return (
        <div className="d-flex justify-content-center align-items-center container ">
            <div className="form-style p-4 rounded-3 my-4">
                <h2 className="text-center">Sign Up</h2>
                <form className="d-inline-flex flex-column justify-content-center w-100" onSubmit={handleSubmit}>
                    <label className="mb-3" htmlFor="signupEmail">
                        <p className="mb-2">Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} required type="email" placeholder="Email address" id="signupEmail" />
                    </label>
                    <label className="mb-3" htmlFor="signupPassword">
                        <p className="mb-2">Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required value={password} type="password" placeholder="Password" id="signupPassword" />
                    </label>
                    <label className="mb-3" htmlFor="signupConfirmPassword">
                        <p className="mb-2">Confirm Password</p>
                        <input onChange={(e) => setConfirmPassword(e.target.value)} required value={confirmPassword} type="password" placeholder="Confirm Password" id="signupConfirmPassword" />
                    </label>

                    <button className="form-style-btn mb-3 rounded" type="submit">
                        {loading ? (
                            <Spinner animation="border" role="status" size="sm">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : (
                            "Sign Up"
                        )}
                    </button>
                </form>
                <div className="text-center">
                    <p>
                        Already have an account?{" "}
                        <Link className="text-orange text-decoration-none" to="/login">
                            Login
                        </Link>
                    </p>
                    <p className="or my-3">or</p>
                    <button style={{ border: "1px solid #95a0a7" }} className="w-100 d-flex align-items-center justify-content-center gap-2 py-2 rounded bg-white">
                        <img width="20" height="20" src={googleIcon} alt="" /> Continue with Google
                    </button>
                </div>
                <p className="text-center mt-3" style={{ color: "red" }}>
                    {error?.message || errorMessage}
                </p>
            </div>
        </div>
    );
};

export default SignUp;
