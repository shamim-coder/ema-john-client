import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./OrderSummery.css";

const OrderSummery = ({ cart }) => {
    return (
        <div className="order-sum">
            <h2>Order Summery</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $1140</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <h4>Grand Total: ${cart.length * 1140}</h4>

            <button>
                Clear Cart <FontAwesomeIcon icon={faTrashCan} />{" "}
            </button>
            <button>
                Review Order <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default OrderSummery;
