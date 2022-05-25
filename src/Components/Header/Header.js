import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import Logo from "../../Images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
    const navigate = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Orders", href: "/orders" },
        { name: "Order Review", href: "/review" },
        { name: "Manage Inventory", href: "/inventory" },
        { name: "Login", href: "/login" },
    ];

    return (
        <header className="main-header">
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand className="me-auto" href="#home">
                        <img src={Logo} className="d-inline-block align-top" alt="Logo" />
                    </Navbar.Brand>
                    <Nav>
                        {navigate.map((nav) => (
                            <Link className="nav-link" to={nav.href}>
                                {nav.name}
                            </Link>
                        ))}

                        <div type="button" style={{ color: "white" }} className="btn position-relative">
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{0}</span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
