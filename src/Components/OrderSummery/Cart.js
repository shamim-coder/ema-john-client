import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { calculateTax, calculateTotal } from "../../Utilities/functions";
import "./Cart.css";

const Cart = ({ cart }) => {
    const quantity = calculateTotal(cart, "quantity");
    // const total = calculateTotal(cart, "price");
    let total = 0;
    // let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        // quantity = product.quantity + quantity;
    }
    const shipping = calculateTotal(cart, "shipping");
    const tax = calculateTax(0.15, total + shipping);
    const grandTotal = total + tax + shipping;

    return (
        <div className="order-sum">
            <h2>Order Summery</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>

            <button>
                Clear Cart <FontAwesomeIcon icon={faTrashCan} />{" "}
            </button>
            <button>
                Review Order <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default Cart;
