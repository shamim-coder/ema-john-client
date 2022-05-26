import React from "react";
import { calculateTax, calculateTotal } from "../../Utilities/functions";
import "./Cart.css";

const Cart = ({ cart, handleRemove }) => {
    const quantity = calculateTotal(cart, "quantity");
    let total = 0;

    for (const product of cart) {
        total = total + product.price * product.quantity;
    }
    const shipping = calculateTotal(cart, "shipping");
    const tax = calculateTax(0.15, total + shipping);
    const grandTotal = total + tax + shipping;

    return (
        <React.Fragment>
            <h2>Order Summery</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </React.Fragment>
    );
};

export default Cart;
