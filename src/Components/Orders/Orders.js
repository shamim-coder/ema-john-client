import React, { useContext } from "react";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import Cart from "..//OrderSummery/Cart";
import { deleteShoppingCart, removeFromDb } from "../../Utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Orders.css";
import OrderItem from "./OrderItem";
import { CartContext } from "../../App";

const Orders = () => {
    const [products] = useProducts();
    const [, setHeaderCart] = useContext(CartContext);

    const [cart, setCart] = useCart(products);

    const handleRemove = () => {
        setCart([]);
        setHeaderCart([]);
        deleteShoppingCart();
    };
    const deleteItem = (id) => {
        const restItems = cart.filter((pd) => pd.id !== id);
        setCart(restItems);
        setHeaderCart(restItems);
        removeFromDb(id);
    };
    return (
        <div className="container mt-5">
            <div className="order-container row">
                <div className="col-lg-6">
                    {cart.map((item) => (
                        <OrderItem key={item.id} deleteItem={deleteItem} item={item} />
                    ))}
                </div>
                <div className="col-lg-6">
                    <div className="cart">
                        <div className="summery">{<Cart cart={cart} />}</div>
                        <button className="btn btn-ema-john bg-red" onClick={handleRemove}>
                            Clear Cart <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                        <button className="btn btn-ema-john bg-yellow">
                            Process Checkout <FontAwesomeIcon icon={faCreditCard} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
