import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { capitalizeWords } from "../../Utilities/functions";

const OrderItem = ({ item }) => {
    const itemName = capitalizeWords(item.name);
    return (
        <div className="row align-items-center border m-0 p-2 mb-3 rounded">
            <div className="col-md-8 d-flex gap-4 align-items-center p-0">
                <img className="w-25 h-25 rounded order-img " src={item.img} alt="" />
                <div className="order-text">
                    <h5>{itemName}</h5>
                    <p>
                        Price: <span className="text-yellow">${item.price}</span>
                    </p>
                    <p>
                        Shipping Charge <span className="text-yellow">${item.shipping}</span>
                    </p>
                </div>
            </div>
            <div className="col-md-2 ">
                <p>Qt: {item.quantity}</p>
            </div>
            <div className="col-md-2 text-center">
                <button className="text-red btn-delete">
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>
    );
};

export default OrderItem;
