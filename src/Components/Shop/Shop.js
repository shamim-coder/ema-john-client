import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { addToDb, getCartItems } from "../../Utilities/fakedb";
import Cart from "../OrderSummery/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("data/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const [cart, setCart] = useState([]);

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
    };

    useEffect(() => {
        const cartItems = getCartItems();
        const savedCart = [];
        for (const id in cartItems) {
            const addedItem = products.find((product) => product.id === id);

            if (addedItem) {
                const quantity = cartItems[id];
                addedItem.quantity = quantity;
                savedCart.push(addedItem);
            }
        }
        setCart(savedCart);
    }, [products]);

    return (
        <Container>
            <Row>
                <Col className="products mt-4">
                    {products.map((product) => (
                        <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>
                    ))}
                </Col>
                <Col className="order-summery" lg={3}>
                    <Cart cart={cart}></Cart>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;
