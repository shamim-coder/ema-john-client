import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addToDb, deleteShoppingCart } from "../../Utilities/fakedb";
import Loader from "../../Utilities/Loader";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import Cart from "../OrderSummery/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = ({ getCart }) => {
    // Products States
    const [products, , loader] = useProducts();

    const [cart, setCart] = useCart(products);

    // Handle Add to Cart
    const handleAddToCart = (selectedProduct) => {
        const exists = cart.find((product) => product.id === selectedProduct.id);

        let newCart = [];

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter((product) => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
        getCart(newCart);
    };

    const handleRemove = () => {
        setCart([]);
        deleteShoppingCart();
    };

    const navigate = useNavigate();

    const handleReviewOrder = () => {
        navigate("/orders");
    };

    return (
        <Container>
            {loader ? (
                <Loader />
            ) : (
                <Row>
                    <Col className="products mt-5" lg={9}>
                        {products.map((product) => (
                            <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>
                        ))}
                    </Col>
                    <Col className="order-summery" lg={3}>
                        <div className="order-sum">
                            <div className="order-summery-cart p-4">
                                <Cart cart={cart}></Cart>
                            </div>
                            <button className="btn btn-ema-john bg-red mt-4" onClick={handleRemove}>
                                Clear Cart <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                            <button className="btn btn-ema-john bg-yellow" onClick={handleReviewOrder}>
                                Review Order <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Shop;
