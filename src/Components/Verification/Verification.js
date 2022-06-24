import React from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const Verification = () => {
    const [user] = useAuthState(auth);
    const [success, setSuccess] = useState("");

    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    const handleVerify = async () => {
        await sendEmailVerification();
        setSuccess("Email send successfully");

        setTimeout(() => {
            setSuccess("");
        }, 5000);
    };

    return (
        <div className="text-center my-5">
            <h1 className="text-danger mb-4">Please Verify your account</h1>
            <p>
                To continue using ema-john, please verify your email address: <strong>{user.email}</strong>
            </p>
            <p className="text-info mt-4">Still can't find the email?</p>
            <button onClick={handleVerify} className="btn bg-success mb-3 px-4 text-white fw-bold">
                Verify Email Address{" "}
                {sending && (
                    <Spinner animation="border" role="status" size="sm">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
            </button>
            <p className="text-success">{success}</p>
            <br />
            <br />
            <br />
            <small>* once verify your email just reload the page to continue</small>
        </div>
    );
};

export default Verification;
