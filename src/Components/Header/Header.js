import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import Logo from "../../Images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand className="me-auto" href="#home">
                    <img src={Logo} className="d-inline-block align-top" alt="Logo" />
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link href="/order">Order</Nav.Link>
                    <Nav.Link href="/review">Order Review</Nav.Link>
                    <Nav.Link href="/inventory">Manage Inventory</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>

                    <div type="button" style={{ color: "white" }} className="btn position-relative">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            9<span className="visually-hidden">unread messages</span>
                        </span>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;