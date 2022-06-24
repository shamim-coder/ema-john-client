import React from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase.init";
import Verification from "../Verification/Verification";
import "./RequireAuth.css";

const RequireAuth = ({ children }) => {
    const location = useLocation();

    const [user, loading] = useAuthState(auth);

    if (loading) {
        return (
            <Spinner className="loading-spinner" animation="grow" role="status" variant="warning">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    if (user && !user?.emailVerified) {
        return <Verification />;
    }

    // } else {
    //     navigate(from, { replace: true });
    // }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
