import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OrderSummery from "../OrderSummery/OrderSummery";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("data/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <Container>
            <Row>
                <Col className="products" lg={9}>
                    <h3>{products.length}</h3>
                    <Products products={products}></Products>
                </Col>
                <Col className="order-summery" lg={3}>
                    <OrderSummery></OrderSummery>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;
