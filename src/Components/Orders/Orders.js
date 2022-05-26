import React from "react";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import Cart from "..//OrderSummery/Cart";
import { deleteShoppingCart } from "../../Utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Orders.css";
import OrderItem from "./OrderItem";

const Orders = () => {
    const [products] = useProducts();

    const [cart, setCart] = useCart(products);

    const handleRemove = () => {
        setCart([]);
        deleteShoppingCart();
    };
    return (
        <div className="container mt-5">
            <div className="order-container row align-items-center">
                <div className="col-lg-6">
                    {cart.map((item) => (
                        <OrderItem key={item.id} item={item} />
                    ))}
                </div>
                <div className="col-lg-6">
                    <div className="cart">
                        <div className="summery">{<Cart cart={cart} />}</div>
                        <button className="btn btn-ema-john bg-red" onClick={handleRemove}>
                            Clear Cart <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                        <button className="btn btn-ema-john bg-yellow" onClick={handleRemove}>
                            Process Checkout <FontAwesomeIcon icon={faCreditCard} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
