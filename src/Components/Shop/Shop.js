import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { addToDb, getCartItems } from "../../Utilities/fakedb";
import { getCart } from "../../Utilities/functions";
import Loader from "../../Utilities/Loader";
import Cart from "../OrderSummery/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    // Products States
    const [products, setProducts] = useState([]);

    // get data from database/fake data
    useEffect(() => {
        fetch("data/products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoader(false);
            });
    }, []);

    const [cart, setCart] = useState([]);
    const [loader, setLoader] = useState(true);

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

    // displaying cart data from local storage
    useEffect(() => {
        // get local storage data
        const cartItems = getCartItems();

        // save added items with quantity updating
        const savedCart = [];

        for (const id in cartItems) {
            // find product from products by ID
            const addedItem = products.find((product) => product.id === id);

            // if addedItem has product
            if (addedItem) {
                const quantity = cartItems[id]; // get quantities from local storage
                addedItem.quantity = quantity; // set the quantity to product quantity properties
                savedCart.push(addedItem); // send addedItem to savedCart
            }
        }
        setCart(savedCart); // set state (setCart) with exists products with updated quantities
    }, [products]);

    return (
        <Container>
            {loader ? (
                <Loader />
            ) : (
                <Row>
                    <Col className="products mt-4" lg={9}>
                        {products.map((product) => (
                            <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>
                        ))}
                    </Col>
                    <Col className="order-summery" lg={3}>
                        <Cart cart={cart}></Cart>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Shop;
