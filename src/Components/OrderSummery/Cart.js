import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { calculateTax, calculateTotal } from "../../Utilities/functions";
import "./Cart.css";

const Cart = ({ cart }) => {
    const total = calculateTotal(cart, "price");
    const shipping = calculateTotal(cart, "shipping");
    const tax = calculateTax(0.15, total + shipping);
    const grandTotal = total + tax + shipping;

    return (
        <div className="order-sum">
            <h2>Order Summery</h2>
            <p>Selected Items: {cart.length}</p>
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
