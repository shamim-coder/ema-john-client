import React from "react";
import { Spinner } from "react-bootstrap";
import useOrders from "../Hooks/useOrders";
import OrderRow from "../ManageOrders/OrderRow";

const ManageOrders = () => {
    const { orders, loading } = useOrders();
    console.log(orders);

    return (
        <div className="container my-5">
            {loading ? (
                <Spinner className="loading-spinner" animation="grow" role="status" variant="warning">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                orders.map((order) => (
                    <div key={order?._id} className="table table-striped mb-5">
                        <div className="row">
                            <h4>
                                Order <span className="fs-5 text-info">#{order?._id.replace(/\D/g, "")}</span>
                            </h4>
                            <p>Place on {order?.orderTime}</p>
                        </div>
                        <div className="w-100 px-1">
                            {order?.orders?.map((od) => (
                                <OrderRow key={od?._id} orders={order} order={od} />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ManageOrders;
