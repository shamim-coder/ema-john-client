import React from "react";
import { useNavigate } from "react-router-dom";
import useOrders from "../Hooks/useOrders";

const OrderConfirmed = () => {
    const { orders, loading } = useOrders();
    const navigate = useNavigate();
    return (
        <div className="text-center my-5">
            <h2 className="mb-3">Thanks you, {loading ? "Loading..." : orders[0]?.name}</h2>
            <h4 className="mb-4">Your order was completed successfully.</h4>
            <button className="btn btn-success" onClick={() => navigate("/manageOrders")}>
                Manage Your Orders
            </button>
        </div>
    );
};

export default OrderConfirmed;
