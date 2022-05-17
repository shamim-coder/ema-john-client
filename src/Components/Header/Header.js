import React from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Header.css";
import Logo from "../../Images/Logo.svg";

const Header = () => {
    return (
        <Container>
            <Row>
                <Navbar variant="dark">
                    <Container>
                        <Navbar.Brand className="me-auto" href="#home">
                            <img src={Logo} className="d-inline-block align-top" alt="Logo" />
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/order">Order</Nav.Link>
                            <Nav.Link href="/review">Order Review</Nav.Link>
                            <Nav.Link href="/inventory">Manage Inventory</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
};

export default Header;
