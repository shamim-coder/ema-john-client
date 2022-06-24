import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../App";
import { addToDb, deleteShoppingCart } from "../../Utilities/fakedb";
import Loader from "../../Utilities/Loader";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import OrderSummery from "../OrderSummery/OrderSummery";
import Pagination from "../Pagination/Pagination";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    // Products States
    const { loader } = useProducts();
    const [products, setProducts] = useState([]);
    const [, setHeaderCart] = useContext(CartContext);
    const { cart, setCart } = useCart();

    // Handle Add to Cart
    const handleAddToCart = (selectedProduct) => {
        const exists = cart.find((product) => product._id === selectedProduct._id);

        let newCart = [];

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter((product) => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct._id);
        setHeaderCart(newCart);
    };

    const handleRemove = () => {
        setCart([]);
        setHeaderCart([]);
        deleteShoppingCart();
    };

    const navigate = useNavigate();

    const handleReviewOrder = () => {
        navigate("/orders");
    };

    return (
        <Container>
            {loader ? (
                <Spinner className="loading-spinner" animation="grow" role="status" variant="warning">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Row className="mb-5">
                    <Col className="mt-5 pe-lg-5 order-2 order-lg-1" lg={9}>
                        <Pagination setProducts={setProducts}></Pagination>
                        <div className="products">
                            {products.map((product) => (
                                <Product key={product._id} handleAddToCart={handleAddToCart} product={product}></Product>
                            ))}
                        </div>
                    </Col>
                    <Col className="order-summery order-1 order-lg-2 mt-5 mt-lg-0 pb-3" lg={3}>
                        <div className="order-sum">
                            <div className="order-summery-cart p-4">
                                <OrderSummery cart={cart}></OrderSummery>
                            </div>
                            <button className="btn btn-ema-john bg-red mt-4" onClick={handleRemove}>
                                Clear Cart <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                            <button className="btn btn-ema-john bg-yellow" onClick={handleReviewOrder}>
                                View Carts <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Shop;
