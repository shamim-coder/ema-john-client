import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OrderSummery = ({ cart }) => {
    return (
        <React.Fragment>
            <h2>Order Summery</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $1140</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <h4>Grand Total: $1559</h4>

            <button>
                Clear Cart <FontAwesomeIcon icon={faTrashCan} />{" "}
            </button>
            <button>
                Review Order <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </React.Fragment>
    );
};

export default OrderSummery;
