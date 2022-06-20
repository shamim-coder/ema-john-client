import React, { useContext } from "react";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import OrderSummery from "../OrderSummery/OrderSummery";
import { deleteShoppingCart, removeFromDb } from "../../Utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Orders.css";
import OrderItem from "./OrderItem";
import { CartContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const { products } = useProducts();
    const [, setHeaderCart] = useContext(CartContext);

    const [cart, setCart] = useCart(products);

    const navigate = useNavigate();

    const handleRemove = () => {
        setCart([]);
        setHeaderCart([]);
        deleteShoppingCart();
    };
    const deleteItem = (id) => {
        const restItems = cart.filter((pd) => pd._id !== id);
        setCart(restItems);
        setHeaderCart(restItems);
        removeFromDb(id);
    };
    return (
        <div className="container mt-5">
            <div className="order-container row">
                {cart.length ? (
                    <>
                        <div className="col-lg-6">
                            {cart.map((item) => (
                                <OrderItem key={item._id} deleteItem={deleteItem} item={item} />
                            ))}
                        </div>
                        <div className="col-lg-6">
                            <div className="cart">
                                <div className="summery">{<OrderSummery cart={cart} />}</div>
                                <button className="btn btn-ema-john bg-red" onClick={handleRemove}>
                                    Clear Cart <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                                <button onClick={() => navigate("/shipping")} className="btn btn-ema-john bg-yellow">
                                    Process Checkout <FontAwesomeIcon icon={faCreditCard} />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <h4 className="text-center">Your cart is empty</h4>
                )}
            </div>
        </div>
    );
};

export default Orders;
