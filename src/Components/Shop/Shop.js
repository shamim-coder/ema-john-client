import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { addToDb } from "../../Utilities/fakedb";
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
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    };
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
