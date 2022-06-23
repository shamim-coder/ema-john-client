import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import googleIcon from "../../Images/google.svg";
import useToken from "../Hooks/useToken";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [errorMessage, setErrorMessage] = useState("");
    // const [success, setSuccess] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const { token } = useToken(user);

    const handleSignIn = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    if (token) {
        navigate(from, { replace: true });
    }

    // const customError = () => {
    //     if (error.code === "auth/wrong-password") {
    //         return "your password is wrong, please enter valid password!";
    //     } else if (error.code === "auth/user-not-found") {
    //         return "this email you enter is not exist in our database. please register your account!";
    //     } else if (error.code === "auth/too-many-requests") {
    //         return "Access to this account has been temporarily disabled due to many failed login attempts.";
    //     } else {
    //         return "";
    //     }
    // };

    return (
        <div className="d-flex justify-content-center align-items-center container ">
            <div className="form-style px-4 py-5 rounded-3 my-5">
                <h2 className="text-center">Login</h2>
                <form className="d-inline-flex flex-column justify-content-center w-100" onSubmit={handleSignIn}>
                    <label className="mb-3" htmlFor="signupEmail">
                        <p className="mb-2">Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email address" id="signupEmail" required />
                    </label>
                    <label className="mb-3" htmlFor="signupPassword">
                        <p className="mb-2">Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" id="signupPassword" required />
                    </label>

                    <button className="form-style-btn mb-3 rounded" type="submit">
                        {loading ? (
                            <Spinner animation="border" role="status" size="sm">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>
                <div className="text-center">
                    <p>
                        New to Ema-john?{" "}
                        <Link className="text-orange text-decoration-none" to="/signup">
                            Create New Account
                        </Link>
                    </p>
                    <p className="or my-3">or</p>
                    <button style={{ border: "1px solid #95a0a7" }} className="w-100 d-flex align-items-center justify-content-center gap-2 py-2 rounded bg-white">
                        <img width="20" height="20" src={googleIcon} alt="" />
                        Continue with Google
                    </button>
                </div>
                <p className="text-center mt-3" style={{ color: "red" }}>
                    {error ? error?.message : undefined}
                </p>
            </div>
        </div>
    );
};

export default Login;
