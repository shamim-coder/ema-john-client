import React from "react";

const OrderRow = ({ order, orders }) => {
    return (
        <div className="row align-items-center justify-content-between">
            <div className="col-1">
                <img width={70} src={order?.img} alt="" />
            </div>
            <p className="col-5">{order?.name}</p>
            <p className="col-3">Qty: {order?.quantity}</p>
            <p className="col-2">{orders?.number}</p>
            <p className="col-1 bg-light px-1 text-center rounded-pill">{orders?.orderStatus}</p>
        </div>
    );
};

export default OrderRow;
