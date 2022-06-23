import axios from "axios";
import React, { useContext, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import { useNavigate } from "react-router-dom";
import "./Shipping.css";
import { calculateTax, calculateTotal } from "../../Utilities/functions";
import { deleteShoppingCart } from "../../Utilities/fakedb";
import { CartContext } from "../../App";

const Shipping = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const { products } = useProducts();
    const {cart, setCart} = useCart(products);
    const navigate = useNavigate();
    const [, setHeaderCart] = useContext(CartContext);

    const [user, loading] = useAuthState(auth);
    const { email } = user;

    const shipping = calculateTotal(cart, "shipping");

    let totalPrice = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
    }
    const tax = calculateTax(0.15, totalPrice + shipping);

    const handleCheckout = async (e) => {
        e.preventDefault();
        const orderTime = new Date();
        const orderStatus = "Processing";
        const orderInfo = { name, email, address, number, orderTime, orderStatus, orders: cart };
        if (totalPrice) {
            orderInfo.totalPrice = totalPrice;
            orderInfo.tax = tax;
        }

        try {
            const response = await axios.post("https://ema-john-api.herokuapp.com/orders", orderInfo);
            console.log(response);
            if (response.status === 200) {
                e.target.reset();
                navigate("/orderConfirmed");
                setCart([]);
                setHeaderCart([]);
                deleteShoppingCart();
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6">
                    <div className="form-style p-5 rounded-3 my-4 shipping">
                        <h2 className="text-center">Shipping Details</h2>
                        <form className="d-inline-flex flex-column justify-content-center w-100" onSubmit={handleCheckout}>
                            <label className="mb-3" htmlFor="signupEmail">
                                <p className="mb-2">Your Name</p>
                                <input onChange={(e) => setName(e.target.value)} value={name} required type="text" autoComplete="off" placeholder="Your Name" id="signupEmail" />
                            </label>
                            <label className="mb-3" htmlFor="signupEmail">
                                <p className="mb-2">Email address</p>
                                <input value={user?.email} required type="email" placeholder="Your Name" id="signupEmail" readOnly className="text-muted" />
                            </label>
                            <label className="mb-3" htmlFor="signupEmail">
                                <p className="mb-2">Shipping address</p>
                                <textarea onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Shipping address" name="address" id="address" className="w-100 ps-2 py-2" rows="3"></textarea>
                            </label>
                            <label className="mb-3" htmlFor="signupEmail">
                                <p className="mb-2">Phone Number</p>
                                <input onChange={(e) => setNumber(e.target.value)} value={number} required type="text" placeholder="Phone Number" id="signupEmail" />
                            </label>
                            <button className="form-style-btn mb-3 rounded" type="submit">
                                {loading ? (
                                    <Spinner animation="border" role="status" size="sm">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                ) : (
                                    "Confirm Order"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </div>
    );
};

export default Shipping;
