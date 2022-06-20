import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { capitalizeWords } from "../../Utilities/functions";

const OrderItem = ({ item, deleteItem }) => {
    const { img, name, price, shipping, quantity } = item;
    const itemName = capitalizeWords(name);

    return (
        <div className="row align-items-center border m-0 p-2 mb-3 rounded">
            <div className="col-md-8 d-flex gap-4 p-0 align-items-center">
                <img className="w-25 h-25 rounded order-img" src={img} alt="" />
                <div className="order-text">
                    <h5 title={itemName}>{itemName.length > 26 ? itemName.slice(0, 26) + "..." : itemName}</h5>
                    <p>
                        Price: <span className="text-yellow">${price}</span>
                    </p>
                    <p>
                        Shipping Charge <span className="text-yellow">${shipping}</span>
                    </p>
                </div>
            </div>
            <div className="col-md-2 ">
                <p>Qt: {quantity}</p>
            </div>
            <div className="col-md-2 text-center">
                <button onClick={() => deleteItem(item._id)} className="text-red btn-delete">
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>
    );
};

export default OrderItem;
